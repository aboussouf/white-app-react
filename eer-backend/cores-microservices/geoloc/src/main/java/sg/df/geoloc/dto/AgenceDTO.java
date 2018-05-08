package sg.df.geoloc.dto;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;
import sg.df.geoloc.domain.type.TypeAgence ;

@Data
@NoArgsConstructor
@JsonIgnoreProperties({ "codeAgence" })
public class AgenceDTO extends ResourceSupport implements Serializable {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private  static  final  long serialVersionUID =  1350092881346723535L;
    @NonNull
    private String codeAgence;
    @NonNull
    private String libelleAgence;
    @NonNull
    private String adresseAgence;
    @NonNull
    private String numTel;
    @NonNull
    private TypeAgence typeAgence ;
    @NonNull
    private String codePostal ;
    @NonNull
    private  String latitude;
    @NonNull
    private  String longitude;
    @NonNull
    private  VilleDTO ville;

}
