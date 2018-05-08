package sg.df.geoloc.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import sg.df.geoloc.dto.VilleDTO;
import sg.df.geoloc.domain.Ville;

@Mapper
public interface VilleMapper {

    VilleMapper INSTANCE = Mappers.getMapper( VilleMapper.class );

    VilleDTO villeToDto(Ville ville);
    Ville dtoToVille(VilleDTO prospectDTO);
    Iterable<VilleDTO> villeToVilleDTO(Iterable<Ville> ville);

}
