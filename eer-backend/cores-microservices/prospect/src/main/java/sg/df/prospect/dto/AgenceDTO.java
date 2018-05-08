package sg.df.prospect.dto;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;

@Data
@NoArgsConstructor
@JsonIgnoreProperties({ "id" })
public class AgenceDTO extends ResourceSupport implements Serializable {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private  static  final  long serialVersionUID =  1350092881346723535L;
    @NonNull
    private Long idAgence;
    @NonNull
    private String adresse;

    private String tele;

    private String name;

    private  VilleDTO ville;

}
