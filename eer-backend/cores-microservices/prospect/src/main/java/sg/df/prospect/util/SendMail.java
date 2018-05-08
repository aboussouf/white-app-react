package sg.df.prospect.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;

import javax.mail.internet.MimeMessage;
import java.util.Map;


@Configuration
public class SendMail {
    Logger logger = LoggerFactory.getLogger(SendMail.class) ;
    public static final String DEFAULT_ENCODING = "UTF-8" ;

    @Value("${mail.host}")
    private String host;
    @Value("${mail.port}")
    private Integer port;
    @Value("${mail.username}")
    private String username;
    @Value("${mail.password}")
    private String password;
    @Autowired
    private TemplateConfig templateConfig ;

    public SendMail() {
    }
    @Bean
    public JavaMailSender javaMailService() {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost(host);
        javaMailSender.setPort(port);
        javaMailSender.setUsername(username);
        javaMailSender.setPassword(password);
        javaMailSender.setDefaultEncoding(DEFAULT_ENCODING);
        return javaMailSender;
    }


    public void prepareAndSend(String from ,String recipient , Map<String, Object> variables) {
        MimeMessagePreparator messagePreparator = (MimeMessage mimeMessage) -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(from);
            messageHelper.setTo(recipient);
            messageHelper.setSubject(EMailTemplate.CREATION_PROSPECT_OBJET.getMessage());
            //build header

            //build body
            String content = templateConfig.build(variables,EMailTemplate.CREATION_PROSPECT_BODY.getTemplate() );
            //build footer

            messageHelper.setText(content, true);

        };





        try {
            javaMailService().send(messagePreparator);
            logger.info("mail envoye") ;
        } catch (MailException e) {
            logger.error("pb envoye mail "+e.getMessage());
            e.printStackTrace() ;
        }





    }
}
