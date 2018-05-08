package sg.df.prospect.mappers;

import java.util.ArrayList;
import javax.annotation.Generated;
import sg.df.prospect.domain.Prospect;
import sg.df.prospect.dto.ProspectDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-05-08T15:31:21+0100",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
public class ProspectMapperImpl implements ProspectMapper {

    @Override
    public ProspectDTO ProspectToDto(Prospect prospect) {
        if ( prospect == null ) {
            return null;
        }

        ProspectDTO prospectDTO = new ProspectDTO();

        prospectDTO.setIdProspect( prospect.getIdProspect() );
        prospectDTO.setFirstName( prospect.getFirstName() );
        prospectDTO.setLastName( prospect.getLastName() );
        prospectDTO.setNumeroTel( prospect.getNumeroTel() );
        prospectDTO.setEmail( prospect.getEmail() );
        prospectDTO.setSexe( prospect.getSexe() );
        prospectDTO.setAcceptCgu( prospect.getAcceptCgu() );
        prospectDTO.setBoisson( prospect.getBoisson() );
        prospectDTO.setDateRdv( prospect.getDateRdv() );
        prospectDTO.setTypeProspect( prospect.getTypeProspect() );
        prospectDTO.setCodeAgence( prospect.getCodeAgence() );

        return prospectDTO;
    }

    @Override
    public Prospect DtoToProspect(ProspectDTO prospectDTO) {
        if ( prospectDTO == null ) {
            return null;
        }

        Prospect prospect = new Prospect();

        prospect.setIdProspect( prospectDTO.getIdProspect() );
        prospect.setFirstName( prospectDTO.getFirstName() );
        prospect.setLastName( prospectDTO.getLastName() );
        prospect.setNumeroTel( prospectDTO.getNumeroTel() );
        prospect.setEmail( prospectDTO.getEmail() );
        prospect.setSexe( prospectDTO.getSexe() );
        prospect.setAcceptCgu( prospectDTO.getAcceptCgu() );
        prospect.setBoisson( prospectDTO.getBoisson() );
        prospect.setDateRdv( prospectDTO.getDateRdv() );
        prospect.setCodeAgence( prospectDTO.getCodeAgence() );
        prospect.setTypeProspect( prospectDTO.getTypeProspect() );

        return prospect;
    }

    @Override
    public Iterable<ProspectDTO> prospectsToProspectsDTO(Iterable<Prospect> prospects) {
        if ( prospects == null ) {
            return null;
        }

        ArrayList<ProspectDTO> iterable = new ArrayList<ProspectDTO>();
        for ( Prospect prospect : prospects ) {
            iterable.add( ProspectToDto( prospect ) );
        }

        return iterable;
    }
}
