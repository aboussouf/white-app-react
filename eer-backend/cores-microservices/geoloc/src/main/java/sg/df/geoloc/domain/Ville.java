package sg.df.geoloc.domain ;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
public class Ville {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_ville_seq")
    @SequenceGenerator(name = "id_ville_seq", sequenceName = "id_ville_seq")
    @Column(name = "idville")
    @NonNull
    private Long idVille;
    @NonNull
    private String libelle;
    @NonNull
    private  String longitude;
    @NonNull
    private  String latitude;
}
