import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../../components/Nav'
import MenuItem from '../../../components/MenuItem'
import HorizontalNav from '../../../components/HorizontalNav'
import * as face4 from '../../../asserts/images/faces/face4.jpg'
import un from '../../../asserts/images/menu_icons/01.png'
import * as deux from '../../../asserts/images/menu_icons/02.png'
import * as trois from '../../../asserts/images/menu_icons/03.png'
import * as quatre from '../../../asserts/images/menu_icons/04.png'
import * as cinq from '../../../asserts/images/menu_icons/05.png'

const elementsMenu = [
  {href: "index.html", image: un , titre: '  Mon Espace'},
  {href: "pages/widgets.html", image: deux, titre: '  Mon Profil'},
  {href: "pages/ui-features/buttons.html", image: trois, titre: '  Mon Agence'},
  {href: "pages/forms/basic_elements.html", image: quatre, titre: '  Ma Banque'},
  {href: "pages/charts/chartjs.html", image: cinq, titre: '  Coffre-fort'},
];

class MainPage extends React.Component {
  state = {
    isDrawerOpen: false,
  }
  onRequestChange = (val) => {
    this.setState({ isDrawerOpen: val });
  }
  onHeaderTitleClick = () => {
    (this.props.history).push('/');
  }
  handleHeaderLeftIconClick = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }
  render() {
    return (
      <div className="container-scroller">
        <HorizontalNav />
        <div className="container-fluid page-body-wrapper">
        <Nav icon = {face4} nom='Sara El Amrani' type='Particulier' options= {elementsMenu} />
        {this.props.children}
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  step: PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default MainPage;
