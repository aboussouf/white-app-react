package sg.df.prospect.domain.type;

public enum Sexe {
    M("Masculin"), F("Feminin") ;

    private String libelleSexe ;

    Sexe(String libelleSexe) {
        this.libelleSexe = libelleSexe;
    }
}
