package sg.df.prospect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.sleuth.Sampler;
import org.springframework.cloud.sleuth.sampler.AlwaysSampler;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableDiscoveryClient
@EnableSwagger2
public class ProspectApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProspectApplication.class, args);
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("sg.df.prospect.resource"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo())
                ;
    }
    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo(
                "catalaogue du prospect ",
                "micro service du prospect",
                "1.0",
                "Craftmen",
                new Contact("DIGITAL FACTORY", null, "dgfa@socgen.com"),
                "Apache License Version 2.0",
                "https://www.apache.org/licenses/LICENSE-2.0");
        return apiInfo;
    }
    @Bean
    public AlwaysSampler defaultSampler() {
        return new AlwaysSampler();
    }
}
