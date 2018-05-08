/**
 * Answersms.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.df.propsect.connectors.client;

public class Answersms  implements java.io.Serializable {
    private java.lang.String SMSSTATUSREPORT;

    private java.lang.String motif;

    public Answersms() {
    }

    public Answersms(
           java.lang.String SMSSTATUSREPORT,
           java.lang.String motif) {
           this.SMSSTATUSREPORT = SMSSTATUSREPORT;
           this.motif = motif;
    }


    /**
     * Gets the SMSSTATUSREPORT value for this Answersms.
     * 
     * @return SMSSTATUSREPORT
     */
    public java.lang.String getSMSSTATUSREPORT() {
        return SMSSTATUSREPORT;
    }


    /**
     * Sets the SMSSTATUSREPORT value for this Answersms.
     * 
     * @param SMSSTATUSREPORT
     */
    public void setSMSSTATUSREPORT(java.lang.String SMSSTATUSREPORT) {
        this.SMSSTATUSREPORT = SMSSTATUSREPORT;
    }


    /**
     * Gets the motif value for this Answersms.
     * 
     * @return motif
     */
    public java.lang.String getMotif() {
        return motif;
    }


    /**
     * Sets the motif value for this Answersms.
     * 
     * @param motif
     */
    public void setMotif(java.lang.String motif) {
        this.motif = motif;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Answersms)) return false;
        Answersms other = (Answersms) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.SMSSTATUSREPORT==null && other.getSMSSTATUSREPORT()==null) || 
             (this.SMSSTATUSREPORT!=null &&
              this.SMSSTATUSREPORT.equals(other.getSMSSTATUSREPORT()))) &&
            ((this.motif==null && other.getMotif()==null) || 
             (this.motif!=null &&
              this.motif.equals(other.getMotif())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getSMSSTATUSREPORT() != null) {
            _hashCode += getSMSSTATUSREPORT().hashCode();
        }
        if (getMotif() != null) {
            _hashCode += getMotif().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Answersms.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("urn:soapdemo_wsdl", "answersms"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SMSSTATUSREPORT");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SMSSTATUSREPORT"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("motif");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Motif"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
