package sg.df.prospect.domain.type;

public enum CategoriePiece {
    JUSTIFICATIF_IDENTITE("justificatif identite") ,
    JUSTIFICATIF_DOMICILE("justificatif domicile") ,
    JUSTIFICATIF_ACTIVITE("justificatif activite") ,
    CAS_PARTICULIERS("cas particuliers") ;
    private String libelleJustificatif ;

    CategoriePiece(String libelleJustificatif) {
        this.libelleJustificatif = libelleJustificatif;
    }


}
