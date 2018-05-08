package ma.dgfa.oauth;

import org.keycloak.adapters.KeycloakConfigResolver;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;


@EnableDiscoveryClient
@CrossOrigin(origins = "*")
@SpringBootApplication
public class OauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthApplication.class, args);
	}
	@Bean
	public KeycloakConfigResolver KeycloakConfigResolver(){
		return new KeycloakSpringBootConfigResolver();
	}

}
