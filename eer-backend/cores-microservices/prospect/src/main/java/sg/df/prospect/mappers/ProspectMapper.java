package sg.df.prospect.mappers;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import sg.df.prospect.dto.ProspectDTO;
import sg.df.prospect.domain.Prospect;


@Mapper
public interface ProspectMapper {

    ProspectMapper INSTANCE = Mappers.getMapper( ProspectMapper.class );

    ProspectDTO ProspectToDto(Prospect prospect);
    Prospect DtoToProspect(ProspectDTO prospectDTO);
    Iterable<ProspectDTO> prospectsToProspectsDTO(Iterable<Prospect> prospects);
}
