package sg.df.geoloc.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.mapstruct.factory.Mappers;
import sg.df.geoloc.domain.Agence;
import sg.df.geoloc.dto.AgenceDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-05-08T15:32:25+0100",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
public class AgenceMapperImpl implements AgenceMapper {

    private final VilleMapper villeMapper = Mappers.getMapper( VilleMapper.class );

    @Override
    public AgenceDTO agenceToDto(Agence agence) {
        if ( agence == null ) {
            return null;
        }

        AgenceDTO agenceDTO = new AgenceDTO();

        agenceDTO.setCodeAgence( agence.getCodeAgence() );
        agenceDTO.setLibelleAgence( agence.getLibelleAgence() );
        agenceDTO.setAdresseAgence( agence.getAdresseAgence() );
        agenceDTO.setNumTel( agence.getNumTel() );
        agenceDTO.setTypeAgence( agence.getTypeAgence() );
        agenceDTO.setCodePostal( agence.getCodePostal() );
        agenceDTO.setLatitude( agence.getLatitude() );
        agenceDTO.setLongitude( agence.getLongitude() );
        agenceDTO.setVille( villeMapper.villeToDto( agence.getVille() ) );

        return agenceDTO;
    }

    @Override
    public Agence dtoToAgence(AgenceDTO agenceDTO) {
        if ( agenceDTO == null ) {
            return null;
        }

        Agence agence = new Agence();

        agence.setCodeAgence( agenceDTO.getCodeAgence() );
        agence.setLibelleAgence( agenceDTO.getLibelleAgence() );
        agence.setAdresseAgence( agenceDTO.getAdresseAgence() );
        agence.setNumTel( agenceDTO.getNumTel() );
        agence.setTypeAgence( agenceDTO.getTypeAgence() );
        agence.setCodePostal( agenceDTO.getCodePostal() );
        agence.setLatitude( agenceDTO.getLatitude() );
        agence.setLongitude( agenceDTO.getLongitude() );
        agence.setVille( villeMapper.dtoToVille( agenceDTO.getVille() ) );

        return agence;
    }

    @Override
    public Iterable<AgenceDTO> agencesToAgencesDTO(Iterable<Agence> agences) {
        if ( agences == null ) {
            return null;
        }

        ArrayList<AgenceDTO> iterable = new ArrayList<AgenceDTO>();
        for ( Agence agence : agences ) {
            iterable.add( agenceToDto( agence ) );
        }

        return iterable;
    }

    @Override
    public List<AgenceDTO> agencesToAgencesDTO(List<Agence> agences) {
        if ( agences == null ) {
            return null;
        }

        List<AgenceDTO> list = new ArrayList<AgenceDTO>();
        for ( Agence agence : agences ) {
            list.add( agenceToDto( agence ) );
        }

        return list;
    }
}
