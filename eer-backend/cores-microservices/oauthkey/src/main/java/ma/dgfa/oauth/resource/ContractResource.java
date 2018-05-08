package ma.dgfa.oauth.resource;


import ma.dgfa.oauth.KeycloakAuthenticatoin;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

@RestController
public class ContractResource {

	@RequestMapping(value = "/api/contracts", method = RequestMethod.GET)
	@PreAuthorize("isAuthenticated()")
	@ResponseBody
	public Authentication getContracts() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("authorities "+authentication.getAuthorities());
		return authentication;
	}

	@RequestMapping("user")
	public String user(Principal principal) {
		return principal.getName();
	}
	@RequestMapping("userInfo")
	public Boolean getUserInfo(HttpServletRequest request, HttpServletResponse response) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication instanceof KeycloakAuthenticationToken) {
			return new KeycloakAuthenticatoin((KeycloakAuthenticationToken) authentication).isAuthenticated();
		}
		return authentication.isAuthenticated();
	}
}
