package sg.df.prospect.domain.type;

public enum TypeBoisson {
    T("The") , C("Cafe") ;
    private String libelleTypeBoisson ;

    TypeBoisson(String libelleTypeBoisson) {
        this.libelleTypeBoisson = libelleTypeBoisson;
    }
}
