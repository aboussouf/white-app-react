package sg.df.prospect.util;


public class PhoneUtils {

    public static String formatNumber(String codePays , String phoneNumber )
    {
        StringBuilder stringBuilder = new StringBuilder(codePays) ;
        stringBuilder.append( phoneNumber, 1, phoneNumber.length()) ;
        return stringBuilder.toString() ;
    }

}
