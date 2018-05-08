package sg.df.geoloc.service;

import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.stereotype.Service;
import sg.df.geoloc.dto.AgenceDTO;
import sg.df.geoloc.exception.AgenceNotFoundException;
import sg.df.geoloc.mapper.AgenceMapper;
import sg.df.geoloc.domain.Agence;
import sg.df.geoloc.repository.AgenceRepository;

@Service
public class AgenceService {

    @Resource
    private AgenceRepository agenceRepository;


    /**
     * save Agence
     * @param agenceDTO
     * @return
     */
    @Transactional
    public AgenceDTO save(AgenceDTO agenceDTO){
        Agence agence = agenceRepository.save(AgenceMapper.INSTANCE.dtoToAgence(agenceDTO));
        return AgenceMapper.INSTANCE.agenceToDto(agence);
    }

    /**
     * get all agence from bdd
     * @return
     */

    public List<AgenceDTO> getAll(){
        Iterable<Agence> agences = this.agenceRepository.findAll();
        Iterable<AgenceDTO> agenceDTOS = AgenceMapper.INSTANCE.agencesToAgencesDTO(agences);
        return IteratorUtils.toList(agenceDTOS.iterator());

    }

    public AgenceDTO findOne(String codeAgence)  throws AgenceNotFoundException {

        Agence agence = agenceRepository.findOne(codeAgence);
        if (agence ==  null )
            throw new AgenceNotFoundException();
        return AgenceMapper.INSTANCE.agenceToDto(agence);

    }

    /**
     * update agence
     * @param agenceDTO
     * @return
     */
    @Transactional
    public AgenceDTO update(AgenceDTO agenceDTO){
        if (agenceRepository.findOne(agenceDTO.getCodeAgence()) != null ){
            Agence agence = this.agenceRepository.save(AgenceMapper.INSTANCE.dtoToAgence(agenceDTO));
            return AgenceMapper.INSTANCE.agenceToDto(agence);
        }
        return null;
    }

    /**
     * remove agence by id from bdd
     * @param id
     */
    @Transactional
    public void remove(String codeAgence ){
        agenceRepository.delete(codeAgence);
    }

    /**
     *  get agence by citie
     * @param id
     * @return
     */
    @Transactional
    public List<AgenceDTO> getAgencesByville(long id){
       List<Agence> agences =  agenceRepository.findByVille(id);
       return AgenceMapper.INSTANCE.agencesToAgencesDTO(agences);

    }


}
