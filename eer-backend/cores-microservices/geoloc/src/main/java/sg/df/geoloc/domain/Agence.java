package sg.df.geoloc.domain;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import sg.df.geoloc.domain.type.TypeAgence;

@Entity
@Data
@NoArgsConstructor
public class Agence {
    @Id
    @Column(name = "codeAgence")
    @NonNull
    private String codeAgence;
    @NonNull
    private String libelleAgence;
    @NonNull
    private  String adresseAgence;
    @NonNull
    private  String numTel ;
    @NonNull
    @Enumerated(EnumType.STRING)
    private TypeAgence typeAgence ;
    @NonNull
    private String codePostal ;
    @NonNull
    private  String latitude;
    @NonNull
    private  String longitude;
    @NonNull
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idVille")
    private Ville ville;

}
