package sg.df.geoloc.repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import sg.df.geoloc.domain.Agence;

public interface AgenceRepository extends PagingAndSortingRepository<Agence, String> {
    @Query("select a from Agence a where a.ville.id  = :id")
    List<Agence> findByVille(@Param("id") Long id);
 }
