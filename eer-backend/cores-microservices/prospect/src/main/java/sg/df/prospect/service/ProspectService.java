package sg.df.prospect.service;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;
import javax.annotation.Resource;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.apache.commons.lang.time.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import sg.df.prospect.util.PhoneUtils;
import sg.df.prospect.util.SendMail;
import sg.df.prospect.util.SmsConfig;
import sg.df.prospect.dto.ProspectDTO;
import sg.df.prospect.mappers.ProspectMapper;
import sg.df.prospect.domain.Prospect;
import sg.df.prospect.repository.ProspectRepository;

@Service
public class ProspectService {
    Logger logger = LoggerFactory.getLogger(ProspectService.class) ;
    @Resource
    private ProspectRepository prospectRepository;
    @Resource
    SendMail sendMail ;
    @Resource
    SmsConfig smsConfig ;
    //  @Resource
    //  LdapConfiguration ldapConfiguration ;

    public List<Date> findAllRendezVousByIdAgence(String codeAgence )
    {
        return prospectRepository.
                findAllOccupiedDateRdvDesc(codeAgence , new Date())
                .stream()
                .map(Prospect::getDateRdv).collect(Collectors.toList());

    }

    /**
     * save Prospect
     * @param prospectDTO
     * @return
     */
    @Transactional
    public ProspectDTO saveProspect(ProspectDTO prospectDTO){

        this.sendMailToProspect(prospectDTO);

        smsConfig.sendSms(PhoneUtils.formatNumber("+212",prospectDTO.getNumeroTel()),"Votre Mot de Passe est: XXX12!At45 ");
        Prospect prospect = ProspectMapper.INSTANCE.DtoToProspect(prospectDTO);
        Prospect prospectbdd = this.prospectRepository.save(prospect);
        return ProspectMapper.INSTANCE.ProspectToDto(prospectbdd);
    }

    /**
     * send a mail to prospect
     * @param prospectDTO
     */
    private void sendMailToProspect(ProspectDTO prospectDTO){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
        formatter.format(prospectDTO.getDateRdv());
        String timestamp = DateFormatUtils.ISO_DATE_FORMAT.format(prospectDTO.getDateRdv());
        Map<String, Object> variables = new HashMap<String, Object>() ;
        variables.put("nom",prospectDTO.getLastName());
        variables.put("prenom",prospectDTO.getFirstName());
        variables.put("dateRdv",DateFormatUtils.ISO_DATE_FORMAT.format(prospectDTO.getDateRdv()));
        variables.put("heureRdv",prospectDTO.getHeureRdv());
        variables.put("tele",prospectDTO.getNumeroTel());

        //TODO ajouter call rest to geoloc

        variables.put("nomAgence",prospectDTO.getCodeAgence());
        variables.put("adresseAgence","adresse agence");
        variables.put("ville","libelle Ville ");
        sendMail.prepareAndSend("anis.khai@socgen.com",prospectDTO.getEmail(),variables);
    }
    /**
     * get all prospect from bdd
     * @return
     */
    @Transactional
    public List<ProspectDTO> getAllProspects(){
        Iterable<Prospect> prospects = this.prospectRepository.findAll();
        Iterable<ProspectDTO> prospectsDTO = ProspectMapper.INSTANCE.prospectsToProspectsDTO(prospects);
        return IteratorUtils.toList(prospectsDTO.iterator());

    }

    /**
     * get one prospect by id
     * @param id
     * @return
     */

    public ProspectDTO findOne(Long id){

      Prospect prospect = this.prospectRepository.findOne(id);
        if (prospect != null ){
            return ProspectMapper.INSTANCE.ProspectToDto(prospect);
        }
        return null  ;

    }

    /**
     * update prospect
     * @param prospectDTO
     * @return
     */
    @Transactional
    public ProspectDTO updateProspect(ProspectDTO prospectDTO){
        if (prospectRepository.findOne(prospectDTO.getIdProspect())!= null ){
            Prospect prospect = this.prospectRepository.save(ProspectMapper.INSTANCE.DtoToProspect(prospectDTO));
            return ProspectMapper.INSTANCE.ProspectToDto(prospect);
        }
        return null;
    }

    /**
     * remove prospect by id from bdd
     * @param id
     */
    @Transactional
    public void removeProspect(Long id){
        prospectRepository.delete(id);
    }
}
