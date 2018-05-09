import React from 'react';

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="content" >


        <h3>{this.props.agence.name}</h3><p>{this.props.agence.adresse}<br />{this.props.city}</p>
        <span>Téléphone : <span><a href="tel:">{this.props.agence.tele}</a></span></span>
        <span><i className="glyphicon glyphicon-gab"></i> Distributeur Automatique de Billets (GAB)</span><br />
        <span><i className="glyphicon glyphicon-wu"></i> Western Union</span><br />
        <span><i className="glyphicon glyphicon-user"></i> PROXIMITE</span><br />

        <p><button onClick={this.props.action}>Sélectionner</button></p>
      </div>
    );
  }
}

export default MapMarker;
