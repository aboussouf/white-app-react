package sg.df.prospect.resource;

import io.swagger.annotations.ApiOperation;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import sg.df.prospect.dto.ProspectDTO;
import sg.df.prospect.service.ProspectService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/prospect")
public class ProspectResource {

    Logger logger = LoggerFactory.getLogger(ProspectResource.class) ;

    @Resource
    private ProspectService prospectServices;

    @GetMapping("/{idAgence}/occuppiedtime")
    @ApiOperation(value = "Récupérer la liste des horaire reserves")
    public  ResponseEntity < List <Date>> findAllRendezVousByIdAgence(@PathVariable String idAgence)
    {
        return ResponseEntity.status(HttpStatus.OK).body(prospectServices.findAllRendezVousByIdAgence(idAgence) );
    }


    /**
     * Endpoint to create new Prospect
     * @param prospectDTO
     * @return
     */
    @PostMapping
    @ApiOperation(value = "Ajouter un nouveau prospect")
    public ResponseEntity createProspect(@RequestBody ProspectDTO prospectDTO){
        ProspectDTO prospect = prospectServices.saveProspect(prospectDTO);
        return ResponseEntity.ok().body(prospect);
    }

    /**
     * Endpoint to get all prospect
     * @return
     */
    @GetMapping
    @ApiOperation(value = "Récupérer la liste des prospects")
    public  ResponseEntity < List < ProspectDTO >> prospects(){
        List<ProspectDTO> prospectDTOs = this.prospectServices.getAllProspects();

        return ResponseEntity.status(HttpStatus.OK).body(prospectDTOs);
    }

    /**
     * Endpoint to recover one prospect
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation(value = "Récupérer un prospect par un identifiant")
    public ResponseEntity<ProspectDTO> findProspect(@PathVariable Long id){
        ProspectDTO prospect = this.prospectServices.findOne(id);
        return ResponseEntity.status(HttpStatus.OK).body(prospect);
    }

    /**
     * Endpoint to modify a prospect
     * @param prospectDTO
     * @return
     */
    @PutMapping()
    @ApiOperation(value = "modifier un prospect par un identifiant")
    public ResponseEntity<ProspectDTO> updateProspect(@RequestBody ProspectDTO prospectDTO){
        ProspectDTO prospect = this.prospectServices.updateProspect(prospectDTO);
        return ResponseEntity.status(HttpStatus.OK).body(prospect);
    }

    /**
     * Endpoint to remove prospect by id
     * @param id
     * @return
     */
    @DeleteMapping("{id}")
    @ApiOperation(value = "supprimer un prospect par un identifiant")
    public ResponseEntity deleteProspect(@PathVariable("id") Long id){
               this.prospectServices.removeProspect(id);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
