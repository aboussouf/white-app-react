package sg.df.geoloc.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import sg.df.geoloc.domain.Ville;

public interface VilleRepository extends PagingAndSortingRepository<Ville, Long> {

}
