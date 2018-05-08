package sg.df.prospect.domain.type;

import java.util.ArrayList;
import java.util.List;

public enum Piece {
    CNIE(TypeProspect.P , "Carte identite National",CategoriePiece.JUSTIFICATIF_IDENTITE  )    ;
    private TypeProspect typeProspect ;
    private String libelleTypePiece ;
    private CategoriePiece categoriePiece ;

    Piece(TypeProspect typeProspect , String libelleTypePiece, CategoriePiece categoriePiece  ) {
        this.typeProspect = typeProspect ;
        this.libelleTypePiece = libelleTypePiece;
        this.categoriePiece = categoriePiece ;
    }
    public TypeProspect getTypeProspect() {
        return typeProspect;
    }

    public void setTypeProspect(TypeProspect typeProspect) {
        this.typeProspect = typeProspect;
    }

    public String getLibelleTypePiece() {
        return libelleTypePiece;
    }

    public void setLibelleTypePiece(String libelleTypePiece) {
        this.libelleTypePiece = libelleTypePiece;
    }

    public CategoriePiece getCategoriePiece() {
        return categoriePiece;
    }

    public void setCategoriePiece(CategoriePiece categoriePiece) {
        this.categoriePiece = categoriePiece;
    }



    public static List<Piece> getListPieceByTypeProspect(TypeProspect typeProspect)
    {
        List<Piece> pieceList =new ArrayList<Piece>() ;
        for(Piece piece: Piece.values())
        {
        if(typeProspect.equals(piece.getTypeProspect()))
        pieceList.add(piece) ;
    }
        return pieceList ;
    }
}
