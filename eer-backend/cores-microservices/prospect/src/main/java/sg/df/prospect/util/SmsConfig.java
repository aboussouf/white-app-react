package sg.df.prospect.util;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


import sg.df.propsect.connectors.client.Soapdemo_wsdl;
import sg.df.propsect.connectors.client.Soapdemo_wsdlLocator;
import sg.df.propsect.connectors.client.Soapdemo_wsdlPortType;

import javax.xml.ws.BindingProvider;


@Configuration
public class SmsConfig {
    Logger logger = LoggerFactory.getLogger(SendMail.class) ;
    @Value("${sms.username}")
    private String username;
    @Value("${sms.password}")
    private String password;
    @Value("${sms.url}")
    private String url ;
    public void sendSms(String recipient , String message) {
        try {
            String endpoint = "https://10.6.1.196/api/webservicesms/index.php";
            Soapdemo_wsdl service = new Soapdemo_wsdlLocator();
                 ((BindingProvider)service).getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, "http://new/endpointaddress");
            Soapdemo_wsdlPortType port = service.getsoapdemo_wsdlPort();
            port.sendSMS(username, password, recipient, message, "101", null, null, 0, null) ;
        } catch (Exception e) {
            System.err.println(e.toString());
        }
    }

}
