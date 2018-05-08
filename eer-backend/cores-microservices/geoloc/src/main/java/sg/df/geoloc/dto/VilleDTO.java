package sg.df.geoloc.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class VilleDTO extends ResourceSupport implements Serializable {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private  static  final  long serialVersionUID =  1350092881346723535L;
    @NonNull
    private Long idVille;
    @NonNull
    private String libelle;
    @NonNull
    private  String longitude;
    @NonNull
    private  String latitude;
}
