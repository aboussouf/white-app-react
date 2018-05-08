package sg.df.geoloc.mapper;

import java.util.ArrayList;
import javax.annotation.Generated;
import sg.df.geoloc.domain.Ville;
import sg.df.geoloc.dto.VilleDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-05-08T15:32:25+0100",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
public class VilleMapperImpl implements VilleMapper {

    @Override
    public VilleDTO villeToDto(Ville ville) {
        if ( ville == null ) {
            return null;
        }

        VilleDTO villeDTO = new VilleDTO();

        villeDTO.setIdVille( ville.getIdVille() );
        villeDTO.setLibelle( ville.getLibelle() );
        villeDTO.setLongitude( ville.getLongitude() );
        villeDTO.setLatitude( ville.getLatitude() );

        return villeDTO;
    }

    @Override
    public Ville dtoToVille(VilleDTO prospectDTO) {
        if ( prospectDTO == null ) {
            return null;
        }

        Ville ville = new Ville();

        ville.setIdVille( prospectDTO.getIdVille() );
        ville.setLibelle( prospectDTO.getLibelle() );
        ville.setLongitude( prospectDTO.getLongitude() );
        ville.setLatitude( prospectDTO.getLatitude() );

        return ville;
    }

    @Override
    public Iterable<VilleDTO> villeToVilleDTO(Iterable<Ville> ville) {
        if ( ville == null ) {
            return null;
        }

        ArrayList<VilleDTO> iterable = new ArrayList<VilleDTO>();
        for ( Ville ville_ : ville ) {
            iterable.add( villeToDto( ville_ ) );
        }

        return iterable;
    }
}
