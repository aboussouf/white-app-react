package sg.df.prospect.util;

/*
import org.springframework.core.env.Environment;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.ldap.support.LdapNameBuilder;
*/

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LdapConfiguration {


        @Value("${ldap.url}")
        private String ldapUrl  ;
        @Value("${ldap.base}")
        private String ldapBase  ;
        @Value("${ldap.username}")
        private String ldapUser  ;
        @Value("${ldap.password}")
        private String ldapPassword  ;
/*
    @Bean
    public LdapContextSource contextSource () {
        LdapContextSource contextSource= new LdapContextSource();
        contextSource.setUrl(ldapUrl);
        contextSource.setBase(ldapBase);
        contextSource.setUserDn(ldapUser);
        contextSource.setPassword(ldapPassword);
        return contextSource;
    }

    @Bean
    public LdapTemplate ldapTemplate() {
        return new LdapTemplate(contextSource());
    }
    public void create(String username, String password) {
        Name dn = LdapNameBuilder
                .newInstance()
                .add("ou", "Utilisateurs")
                .add("cn", username)
                .build();
        DirContextAdapter context = new DirContextAdapter(dn);

        context.setAttributeValues(
                "objectclass",
                new String[]
                        { "top",
                                "person",
                                "organizationalPerson",
                                "inetOrgPerson" });
        context.setAttributeValue("cn", username);
        context.setAttributeValue("sn", username);
        //context.setAttributeValue("userPassword", digestSHA(password));
        context.setAttributeValue("userPassword", password);
        ldapTemplate().bind(context);
    }
    public void modify(String username, String password) {
        Name dn = LdapNameBuilder.newInstance()
                .add("ou", "users")
                .add("cn", username)
                .build();
        DirContextOperations context      = ldapTemplate().lookupContext(dn);

        context.setAttributeValues
                ("objectclass",
                        new String[]
                                { "top",
                                        "person",
                                        "organizationalPerson",
                                        "inetOrgPerson" });
        context.setAttributeValue("cn", username);
        context.setAttributeValue("sn", username);
        //context.setAttributeValue("userPassword",digestSHA(password));
        context.setAttributeValue("userPassword",password);
        ldapTemplate().modifyAttributes(context);
    }
    */


}
