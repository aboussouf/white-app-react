package sg.df.prospect.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import sg.df.prospect.domain.Prospect;

import java.util.Date;
import java.util.List;

public interface ProspectRepository extends CrudRepository<Prospect,Long> {

    @Query("select p from Prospect p where p.codeAgence = :codeAgence and p.dateRdv >= :dateRdv ")
    List<Prospect> findAllOccupiedDateRdvDesc(String codeAgence , Date dateRdv );

}
