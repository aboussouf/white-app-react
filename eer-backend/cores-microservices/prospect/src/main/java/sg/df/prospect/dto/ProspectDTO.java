package sg.df.prospect.dto;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.ResourceSupport;
import sg.df.prospect.domain.type.Sexe;
import sg.df.prospect.domain.type.TypeBoisson;
import sg.df.prospect.domain.type.TypeProspect;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
public class ProspectDTO  extends ResourceSupport implements Serializable {

    private Long idProspect;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String numeroTel;
    @NotNull
    private String email;
    @NotNull
    private Sexe sexe;
    @NotNull
    private Boolean acceptCgu;
    @NotNull
    private TypeBoisson boisson;
    @NotNull
    private Date dateRdv;
    @NotNull
    private String heureRdv;
    @NotNull
    private TypeProspect typeProspect ;
    @NotNull
    private String codeAgence;

}
