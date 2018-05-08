package sg.df.prospect.domain.type;

public enum TypeProspect {
   P("PARTICULIER") , E("ENTREPRISE") ;
   private String libelleTypeProspect ;
   TypeProspect(String libelleTypeProspect) {
        this.libelleTypeProspect = libelleTypeProspect;
    }
}
