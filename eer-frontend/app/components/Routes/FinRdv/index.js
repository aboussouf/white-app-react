import React from 'react';
import PropTypes from 'prop-types';
import conf from '../../../images/conf.svg';
import './styles.css';


class FinRdv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="container-fluid">
        <br /><br /><br /><br />
        <div className="row">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 ">
                <img src={conf} className="img-fluid-spec" alt="" />

              </div>
              <div className="col-md-6">
                <h1 className="red-text">NOTRE RENDEZ-VOUS</h1>
                <h2>Félicitations, votre demande a bien été prise en compte</h2>
                <br /><br /><br />
                <div className="row">
                  <h3> Bonjour                      {this.props.prospect.firstName.value}!</h3><br />
                  <h5> Bienvenue à la Société Générale Maroc, nous sommes ravis de vous compter parmi nous et très impatients de vous recevoir pour notre premier rendez-vous en agence !</h5>
                  <h5> Nous vous avons envoyé un mail avec votre identifiant de connexion à votre espace SGMA. Dans quelques instants, vous recevrez votre mot de passe par SMS.</h5>
                  <h5 className="text-inline-spec"> N&apos;oubliez pas de vous munir des pièces justificatives qui vous serviront à ouvrir votre compte lors de notre rendez-vous ! </h5>
                </div>
              </div>

            </div>
          </div></div>
      </div>
    );
  }
}

FinRdv.propTypes = {
  prospect: PropTypes.object.isRequired,
};


export default FinRdv;
