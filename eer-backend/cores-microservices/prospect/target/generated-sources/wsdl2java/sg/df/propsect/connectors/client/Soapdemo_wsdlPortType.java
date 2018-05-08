/**
 * Soapdemo_wsdlPortType.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.df.propsect.connectors.client;

public interface Soapdemo_wsdlPortType extends java.rmi.Remote {

    /**
     * Envoi SMS
     */
    public int sendSMS(java.lang.String username, java.lang.String password, java.lang.String to, java.lang.String message, java.lang.String id, java.lang.String from, java.lang.String hdsend, int binary, java.lang.String operator) throws java.rmi.RemoteException;

    /**
     * Statut
     */
    public sg.df.propsect.connectors.client.Answersms[] querySMSReport(java.lang.String username, java.lang.String password, java.lang.String id) throws java.rmi.RemoteException;
}
