package sg.df.geoloc.domain.type;

public enum TypeAgence {
    PRINCIPAL("principal") , ACP("acp") ,PROXIMITE("proximite") ;
    private String libelle ;

    TypeAgence(String libelle) {
        this.libelle = libelle;
    }
}
