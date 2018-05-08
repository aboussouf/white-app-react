package sg.df.prospect.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.TemplateEngine ;
import org.thymeleaf.context.Context;

import java.util.Map;


@Configuration
public class TemplateConfig {

    @Autowired
    private TemplateEngine templateEngine;

    public String build(Map<String, Object> variables, String template) {
        Context context = new Context();
        context.setVariables(variables);
        return templateEngine.process(template , context);
    }

}

