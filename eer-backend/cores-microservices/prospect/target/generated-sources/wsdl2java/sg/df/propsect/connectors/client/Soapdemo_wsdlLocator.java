/**
 * Soapdemo_wsdlLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.df.propsect.connectors.client;

public class Soapdemo_wsdlLocator extends org.apache.axis.client.Service implements sg.df.propsect.connectors.client.Soapdemo_wsdl {

    public Soapdemo_wsdlLocator() {
    }


    public Soapdemo_wsdlLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public Soapdemo_wsdlLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for soapdemo_wsdlPort
    private java.lang.String soapdemo_wsdlPort_address = "https://10.6.1.196:443/api/webservicesms/index.php";

    public java.lang.String getsoapdemo_wsdlPortAddress() {
        return soapdemo_wsdlPort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String soapdemo_wsdlPortWSDDServiceName = "soapdemo_wsdlPort";

    public java.lang.String getsoapdemo_wsdlPortWSDDServiceName() {
        return soapdemo_wsdlPortWSDDServiceName;
    }

    public void setsoapdemo_wsdlPortWSDDServiceName(java.lang.String name) {
        soapdemo_wsdlPortWSDDServiceName = name;
    }

    public sg.df.propsect.connectors.client.Soapdemo_wsdlPortType getsoapdemo_wsdlPort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(soapdemo_wsdlPort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getsoapdemo_wsdlPort(endpoint);
    }

    public sg.df.propsect.connectors.client.Soapdemo_wsdlPortType getsoapdemo_wsdlPort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            sg.df.propsect.connectors.client.Soapdemo_wsdlBindingStub _stub = new sg.df.propsect.connectors.client.Soapdemo_wsdlBindingStub(portAddress, this);
            _stub.setPortName(getsoapdemo_wsdlPortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setsoapdemo_wsdlPortEndpointAddress(java.lang.String address) {
        soapdemo_wsdlPort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (sg.df.propsect.connectors.client.Soapdemo_wsdlPortType.class.isAssignableFrom(serviceEndpointInterface)) {
                sg.df.propsect.connectors.client.Soapdemo_wsdlBindingStub _stub = new sg.df.propsect.connectors.client.Soapdemo_wsdlBindingStub(new java.net.URL(soapdemo_wsdlPort_address), this);
                _stub.setPortName(getsoapdemo_wsdlPortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("soapdemo_wsdlPort".equals(inputPortName)) {
            return getsoapdemo_wsdlPort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("urn:soapdemo_wsdl", "soapdemo_wsdl");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("urn:soapdemo_wsdl", "soapdemo_wsdlPort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("soapdemo_wsdlPort".equals(portName)) {
            setsoapdemo_wsdlPortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
