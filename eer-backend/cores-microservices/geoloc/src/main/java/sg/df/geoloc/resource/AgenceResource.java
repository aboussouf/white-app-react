package sg.df.geoloc.resource;


import io.swagger.annotations.ApiOperation;
import java.util.List;
import javax.annotation.Resource;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sg.df.geoloc.dto.AgenceDTO;
import sg.df.geoloc.exception.AgenceNotFoundException;
import sg.df.geoloc.service.AgenceService;

@RefreshScope
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/agence")
public class AgenceResource {

    Logger LOGGER = LoggerFactory.getLogger(AgenceResource.class) ;


    @Resource
    private AgenceService agenceService;
    /**
     * Endpoint to create new Agence
     * @param  agenceDTO
     * @return
     */
    @PostMapping
    @ApiOperation(value = "Ajouter une nouvelle agence")
    public ResponseEntity saveAgence(@Valid @RequestBody AgenceDTO agenceDTO){
        AgenceDTO agence = agenceService.save(agenceDTO);
        LOGGER.info("Ajouter une nouvelle agence avec code {}",agence.getCodeAgence());
        return ResponseEntity.status(HttpStatus.OK).body(agence);
    }

    /**
     * Endpoint to get all agences
     * @return
     */
    @GetMapping
    @ApiOperation(value = "Récupérer toutes les agences")
    public ResponseEntity<List<AgenceDTO>> agences(){
        List<AgenceDTO> agenceDTOS = agenceService.getAll();
        LOGGER.info("Consultation liste Agence");
        return ResponseEntity.status(HttpStatus.OK).body(agenceDTOS);
    }

    /**
     * Endpoint to recover one agence
     * @param id
     * @return
     */
    @GetMapping("/{codeAgence}")
    @ApiOperation(value = "Récupérer une agence par un identifiant",response = AgenceDTO.class)
    public ResponseEntity<AgenceDTO> findAgence(@PathVariable String codeAgence ) throws AgenceNotFoundException {
        AgenceDTO agence = agenceService.findOne(codeAgence);
        LOGGER.info("Récuperer agence avec codeagence {}",codeAgence);
        return ResponseEntity.status(HttpStatus.OK).body(agence);
    }

    /**
     * Endpoint to modify a agence
     * @param agenceDTO
     * @return
     */
    @PutMapping("/{codeAgence}")
    @ApiOperation(value = "Modifier une agence par un identifiant",response = AgenceDTO.class)
    public ResponseEntity<AgenceDTO> updateAgence(@RequestBody AgenceDTO agenceDTO){
        AgenceDTO agence = agenceService.update(agenceDTO);
        LOGGER.info("Modifier  agence avec codeagence {}",agence.getCodeAgence());
        return ResponseEntity.status(HttpStatus.OK).body(agence);
    }

    /**
     * Endpoint to remove agence by codeAgence
     * @param codeAgence
     * @return
     */
    @DeleteMapping("{codeAgence}")
    @ApiOperation(value = "Supprimer une agence par un identifiant")
    public ResponseEntity deleteAgence(@PathVariable("codeAgence") String codeAgence){
         agenceService.remove(codeAgence);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
