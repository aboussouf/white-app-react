import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../Inputs/Button';
import geo from '../../../images/gps-fixed-indicator.png';


class MapButtonLocation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentLocation: {
        lat: "",
        lng: ""
      },
      centerAroundCurrentLocation : false,
      fetchingPosition: false,
      position: undefined,
      error: undefined
    }
    // This binding is necessary to make `this` work in the callback
    this.functionCurrentLocation = this.functionCurrentLocation.bind(this);
  }

  getCurrentPosition = () => {
    const {
      centerAroundCurrentLocation,
      enableHighAccuracy,
      timeout,
      maximumAge,
      onSuccess,
      onError
    } = this.props

    this.setState({ centerAroundCurrentLocation:true,fetchingPosition: true })

    return window.navigator.geolocation.getCurrentPosition(
      position => {
        if (this.willUnmount) return

        this.setState({ position, centerAroundCurrentLocation:true }, () =>
          onSuccess(position)
        )
      },
      err => {
        if (this.willUnmount) return

        this.setState({ err, centerAroundCurrentLocation:true }, () => onError(err))
      },
      { centerAroundCurrentLocation,enableHighAccuracy, timeout, maximumAge }
    )
  }

  // activating current localization
  functionCurrentLocation(){
     this.setState({ centerAroundCurrentLocation:true });

     if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
              currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
              }
          })
      })
    }
  }
  // Fin

  render() {

    return (
      // icon={<SvgIconButton className="material-icons" styles={styles.icon}/>}
      <div>
      <Button label="Trouver ma position" action={this.functionCurrentLocation} icone={geo} />
      </div>
    )
  }
}


MapButtonLocation.propTypes = {
  // activating current localization
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  placeholder: React.PropTypes.string,
  onPlacesChanged: React.PropTypes.func,
  // Fin

   // https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
   enableHighAccuracy: PropTypes.bool,
   timeout: PropTypes.number,
   maximumAge: PropTypes.number,
   // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
   onSuccess: PropTypes.func,
   onError: PropTypes.func,
   // Do not call getCurrentPosition on mount
   lazy: PropTypes.bool
};
MapButtonLocation.defaultProps = {
  // activating current localization

  centerAroundCurrentLocation: false,
  // Fin
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
  onSuccess: pos => {},
  // eslint-disable-next-line handle-callback-err
  onError: err => {},
  lazy: false
}
 export default MapButtonLocation;
