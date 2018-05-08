package sg.df.prospect;



import java.net.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.io.IOException;

/**
 * this class is needed for Java to connect to any webservice through forwarding proxy
 * Unfortunately Java cannot resolve remote DNS and therefore, when we set System.properties
 * with our socks proxy details, we encounter in SOCKS:authentification failed error. This is because
 * Java is connecting to Socks Proxy, but DNS is is getting resolved incorrectly and therefore Java uses default DNS.
 * In any case, you can set any proxy address you like and Java will connect through it
 */

public  class MyProxySelector extends ProxySelector {
    // Keep a reference on the previous default
    public ProxySelector defsel = null;

    /*
     * Inner class representing a Proxy and a few extra data
     */
    class InnerProxy {
        Proxy proxy;
        SocketAddress addr;
        // How many times did we fail to reach this proxy?
        int failedCount = 0;

        InnerProxy(InetSocketAddress a) {
            addr = a;
            proxy = new Proxy(Proxy.Type.HTTP, a);
        }

        SocketAddress address() {
            return addr;
        }

        Proxy toProxy() {
            return proxy;
        }

        int failed() {
            return ++failedCount;
        }
    }

    /*
     * A list of proxies, indexed by their address.
     */
    HashMap<SocketAddress, InnerProxy> proxies = new HashMap<SocketAddress, InnerProxy>();

    public MyProxySelector(ProxySelector def, String host, int port) {
        // Save the previous default
        defsel = def;

        // Populate the HashMap (List of proxies)
        InnerProxy i = new InnerProxy(new InetSocketAddress(host, port));
        proxies.put(i.address(), i);
    }

    /*
     * This is the method that the handlers will call.
     * Returns a List of proxy.
     */
    public java.util.List<Proxy> select(URI uri) {
        // Let's stick to the specs.
        if (uri == null) {
            throw new IllegalArgumentException("URI can't be null.");
        }
        /*
         * If it's a http (or https) URL, then we use our own
         * list.
         */
        String protocol = uri.getScheme();
        if ("http".equalsIgnoreCase(protocol) ||
                "https".equalsIgnoreCase(protocol)) {
            ArrayList<Proxy> l = new ArrayList<Proxy>();
            for (InnerProxy p : proxies.values()) {
                l.add(p.toProxy());
            }
            return l;
        }

        /*
         * Not HTTP or HTTPS (could be SOCKS or FTP)
         * defer to the default selector.
         */
        if (defsel != null) {
            return defsel.select(uri);
        } else {
            ArrayList<Proxy> l = new ArrayList<Proxy>();
            l.add(Proxy.NO_PROXY);
            return l;
        }
    }

    /*
     * Method called by the handlers when it failed to connect
     * to one of the proxies returned by select().
     */
    public void connectFailed(URI uri, SocketAddress sa, IOException ioe) {
        // Let's stick to the specs again.
        if (uri == null || sa == null || ioe == null) {
            throw new IllegalArgumentException("Arguments can't be null.");
        }

        /*
         * Let's lookup for the proxy
         */
        InnerProxy p = proxies.get(sa);
        if (p != null) {
                /*
                 * It's one of ours, if it failed more than 3 times
                 * let's remove it from the list.
                 */
            if (p.failed() >= 3)
                proxies.remove(sa);
        } else {
                /*
                 * Not one of ours, let's delegate to the default.
                 */
            if (defsel != null)
                defsel.connectFailed(uri, sa, ioe);
        }
    }
}
