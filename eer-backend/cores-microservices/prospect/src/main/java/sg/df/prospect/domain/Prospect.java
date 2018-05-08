package sg.df.prospect.domain;


import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import sg.df.prospect.domain.type.Sexe;
import sg.df.prospect.domain.type.TypeBoisson;
import sg.df.prospect.domain.type.TypeProspect;

@Entity
@Data
@NoArgsConstructor
public class Prospect {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_prospect_seq")
    @SequenceGenerator(name = "id_prospect_seq", sequenceName = "id_prospect_seq")
    @NonNull
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
    @Enumerated(EnumType.STRING)
    private Sexe sexe;
    @NotNull
    private Boolean acceptCgu;
    @NotNull
    @Enumerated(EnumType.STRING)
    private TypeBoisson boisson;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateRdv;
    @NotNull
    private String codeAgence;
    @NotNull
    @Enumerated(EnumType.STRING)
    private TypeProspect typeProspect ;


}
