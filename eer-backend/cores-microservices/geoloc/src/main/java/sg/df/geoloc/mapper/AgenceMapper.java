package sg.df.geoloc.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import sg.df.geoloc.dto.AgenceDTO;
import sg.df.geoloc.domain.Agence;


@Mapper(uses = {VilleMapper.class})
public interface AgenceMapper {

    AgenceMapper INSTANCE = Mappers.getMapper(AgenceMapper.class );

    AgenceDTO agenceToDto(Agence agence);
    Agence dtoToAgence(AgenceDTO agenceDTO);
    Iterable<AgenceDTO> agencesToAgencesDTO(Iterable<Agence> agences);
    List<AgenceDTO> agencesToAgencesDTO(List<Agence> agences);
}
