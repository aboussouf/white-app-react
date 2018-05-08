package sg.df.geoloc.service;

import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.stereotype.Service;
import sg.df.geoloc.dto.VilleDTO;
import sg.df.geoloc.exception.VilleNotFoundException;
import sg.df.geoloc.mapper.VilleMapper;
import sg.df.geoloc.domain.Ville;
import sg.df.geoloc.repository.VilleRepository;

@Service
public class VilleService {

    @Resource
    private VilleRepository villeRepository;

    /**
     * save Ville
     * @param villeDTO
     * @return
     */
    @Transactional
    public VilleDTO save(VilleDTO villeDTO){
        Ville ville = this.villeRepository.save(VilleMapper.INSTANCE.dtoToVille(villeDTO));
        return VilleMapper.INSTANCE.villeToDto(ville);
    }

    /**
     * get all ville from bdd
     * @return
     */
    @Transactional
    public List<VilleDTO> getAll(){
        Iterable<Ville> villes = this.villeRepository.findAll();
        Iterable<VilleDTO> villeDTOS = VilleMapper.INSTANCE.villeToVilleDTO(villes);
        return IteratorUtils.toList(villeDTOS.iterator());

    }

    /**
     * get one ville by id
     * @param id
     * @return
     */
    @Transactional
    public VilleDTO findOne(Long id) throws  VilleNotFoundException{

       Ville ville = villeRepository.findOne(id);
        if (ville != null ){
          throw new VilleNotFoundException() ;
        }
        return VilleMapper.INSTANCE.villeToDto(ville);

    }

    /**
     * update prospect
     * @param villeDTO
     * @return
     */
    @Transactional
    public VilleDTO update(VilleDTO villeDTO){
        if (villeRepository.findOne(villeDTO.getIdVille())!= null ){
            Ville ville = this.villeRepository.save(VilleMapper.INSTANCE.dtoToVille(villeDTO));
            return VilleMapper.INSTANCE.villeToDto(ville);
        }
        return null;
    }

    /**
     * remove prospect by id from bdd
     * @param id
     */
    @Transactional
    public void remove(Long id){
        villeRepository.delete(id);
    }


}
