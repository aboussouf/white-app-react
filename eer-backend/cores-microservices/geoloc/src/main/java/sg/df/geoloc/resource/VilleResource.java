package sg.df.geoloc.resource;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import io.swagger.annotations.ApiOperation;
import java.util.List;
import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
/*
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.*;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
*/
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sg.df.geoloc.constantes.ResourcesOperations;
import sg.df.geoloc.dto.AgenceDTO;
import sg.df.geoloc.dto.VilleDTO;
import sg.df.geoloc.exception.VilleNotFoundException;
import sg.df.geoloc.service.AgenceService;
import sg.df.geoloc.service.VilleService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ville")
public class VilleResource {
    Logger LOGGER = LoggerFactory.getLogger(VilleResource.class) ;

    @Resource
    private VilleService villeService;
    @Resource
    private AgenceService agenceService;


    /**
     * Endpoint to create new Ville
     * @param  villeDTO
     * @return
     */


    @PostMapping
    @ApiOperation(value = "Ajouter une nouvelle ville")
    public ResponseEntity saveVille(@RequestBody VilleDTO villeDTO){
        VilleDTO ville = villeService.save(villeDTO);
        LOGGER.info("Ajouter une nouvelle Ville ");
        return ResponseEntity.status(HttpStatus.OK).body(ville);
    }

    /**
     * Endpoint to get all villes
     * @return
     */


    @GetMapping
    @ApiOperation(value = "Récupérer toutes les villes",response = VilleDTO.class)
    public ResponseEntity<List<VilleDTO>> villes(){
        /*
        Authentication authentication =        SecurityContextHolder.getContext()
                        .getAuthentication();

        OAuth2AuthenticationToken oauthToken =
                (OAuth2AuthenticationToken) authentication;
        OAuth2AuthorizedClient client =
                clientService.loadAuthorizedClient(
                        oauthToken.getAuthorizedClientRegistrationId(),
                        oauthToken.getName());

        String accessToken = client.getAccessToken().getTokenValue();
        */
        List<VilleDTO> villeDTOS = villeService.getAll();
         villeDTOS.stream().forEach( item-> {
            item.add(linkTo(methodOn(VilleResource.class).agencesbyVille(item.getIdVille())).withRel(
                ResourcesOperations.AGENCES));
        });
        LOGGER.info("Récuperer la liste des villes ");
        return ResponseEntity.status(HttpStatus.OK).body(villeDTOS);
    }

    /**
     * Endpoint to recover one ville
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation(value = "Récupérer une ville par un identifiant",response = VilleDTO.class)
    public ResponseEntity<VilleDTO> findVille(@PathVariable Long id) throws VilleNotFoundException {
        VilleDTO ville = villeService.findOne(id);
        ville.add(linkTo(methodOn(VilleResource.class).agencesbyVille(ville.getIdVille())).withRel(ResourcesOperations.AGENCES));
        LOGGER.info("Récuperer la ville {} et la liste de ses agences ",id);
        return ResponseEntity.status(HttpStatus.OK).body(ville);
    }

    /**
     * Endpoint to modify a ville
     * @param villeDTO
     * @return
     */
    @PutMapping()
    @ApiOperation(value = "Modifier une ville par un identifiant",response = VilleDTO.class)
    public ResponseEntity<VilleDTO> updateville(@RequestBody VilleDTO villeDTO){
        VilleDTO ville = villeService.update(villeDTO);
        LOGGER.info("Modifier la ville {} ",villeDTO);
        return ResponseEntity.status(HttpStatus.OK).body(ville);
    }

    /**
     * Endpoint to remove ville by id
     * @param id
     * @return
     */
    @DeleteMapping("{id}")
    @ApiOperation(value = "supprimer une ville par un identifiant")
    public ResponseEntity deleteVille(@PathVariable("id") Long id){
        villeService.remove(id);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    /**
     * Endpoint to get all agences
     * @return
     */
    @GetMapping("/{id}/agences")
    @ApiOperation(value = "Récupérer la liste des agences par ville",response = AgenceDTO.class)
    public ResponseEntity<List<AgenceDTO>> agencesbyVille(@PathVariable("id") Long id){
        List<AgenceDTO> agenceDTOS = this.agenceService.getAgencesByville(id);
        return ResponseEntity.status(HttpStatus.OK).body(agenceDTOS);
    }



}
