import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
/* import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';*/
// import MarkerClusterer from './markerclusterer';

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';

import configureStore from '../../../configureStore';
import MapMarker from './MapMarker';
import { Provider } from 'react-redux';

const store = configureStore();
const styles = {
  icon: {
    background: 'url(http://www.broken-links.com/tests/images/faces.svg#devil-view)',
  },
};


class MapView extends React.Component {

  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      loaded: false,
      map: null,
      google: null,
      currentLocation: {
        lat,
        lng,
      },
      centerAroundCurrentLocation: false,
      fetchingPosition: false,
      position: undefined,
      error: undefined,
      loaded: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.functionCurrentLocation = this.functionCurrentLocation.bind(this);
    this.currentPosition = this.currentPosition.bind(this);
  }

  selectAgence(agence) {
    console.log('agence', agence);
    this.setState({ selectedAgence: agence, loaded: !this.props.loaded });
    this.props.setAgenceSelectionnee(agence);
   // this.getSelectedAgencePosition(agence);
  }

  getSelectedAgencePosition = (agence) => {
    const {
      centerAroundCurrentLocation,
      currentLocation,
      enableHighAccuracy,
      timeout,
      maximumAge,
      onSuccess,
      onError,
    } = this.props;
    console.log('getcurrentposition', this.props.city);
    // /this.setState({ centerAroundCurrentLocation:true, currentLocation:{lat:this.state..latitude,  lng:agence.longitude},fetchingPosition: true })

    return window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (this.willUnmount) return;

        this.setState({ position, centerAroundCurrentLocation: true, currentLocation: { lat: agence.latitude, lng: agence.longitude } }, () =>
          onSuccess(position)
        );
      },
      (err) => {
        if (this.willUnmount) return;

        this.setState({ err, centerAroundCurrentLocation: true, currentLocation: { lat: agence.latitude, lng: agence.longitude } }, () => onError(err));
      },
      { centerAroundCurrentLocation, currentLocation, enableHighAccuracy, timeout, maximumAge }
    );
  }

  getCurrentPosition = () => {
    const {
      centerAroundCurrentLocation,
      currentLocation,
      enableHighAccuracy,
      timeout,
      maximumAge,
      onSuccess,
      onError,
    } = this.props;
    console.log('getcurrentposition', this.props.city);
    this.setState({ centerAroundCurrentLocation: true, currentLocation: { lat: this.props.city.latitude, lng: this.props.city.longitude }, fetchingPosition: true });

    return window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (this.willUnmount) return;

        this.setState({ position, centerAroundCurrentLocation: true, currentLocation: { lat: this.props.city.latitude, lng: this.props.city.longitude } }, () =>
          onSuccess(position)
        );
      },
      (err) => {
        if (this.willUnmount) return;

        this.setState({ err, centerAroundCurrentLocation: true, currentLocation: { lat: this.props.city.latitude, lng: this.props.city.longitude } }, () => onError(err));
      },
      { centerAroundCurrentLocation, currentLocation, enableHighAccuracy, timeout, maximumAge }
    );
  }

  currentPosition() {
    this.map.panTo(currentLocation);
  }

  componentDidMount = () => {
  //  this.map.panTo(centerAroundCurrentLocation);
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: this.props.city.latitude,
              lng: this.props.city.longitude,
            },
          });
        });
      }
    }
    this.loadMap();
  }

  componentWillMount() {
    if (typeof window !== 'object') {
      return;
    }

    if (!('mapview' in window.navigator)) {
      return;
    }

    if (this.props.lazy) {
      return;
    }

    this.getCurrentPosition();
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state.currentLocation);
    window.initMap = this.initMap;
    if (prevProps.google !== this.props.google) {
      console.log('loadmap.agences1', this.props.agences);
      this.loadMap();
    }
    if (prevProps.city !== this.props.city) {
      console.log('loadmap.agences2', this.state.currentLocation);
      this.setState({ currentLocation: { lat: this.props.city.latitude, lng: this.props.city.longitude }, agences: this.props.agences });
      this.recenterMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      console.log('loadmap.agences2', this.props.agences);
      this.setState({ agences: this.props.agences });
      this.loadMap();
    }
    if (prevState.functionCurrentLocation !== this.state.functionCurrentLocation) {
      console.log('loadmap.agences3', this.state.currentLocation);
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      const center = new maps.LatLng(curr.lat, curr.lng);
      map.setCenter(center);
      map.panTo(center);
    }
    // this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      console.log('loadmap.agences', this.props.agences);
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props
      // load
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
      });

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      // activating current localization
      const { initialCenter, zoom } = this.props;
      const { lat, lng } = initialCenter;
      // const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(this.props.city.latitude, this.props.city.longitude);

      const mapConfig = Object.assign({}, {
        center,
        zoom, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap', // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      });

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      const infowindow = new google.maps.InfoWindow();

      const markers = [];
      const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const labelIndex = 0;


      this.props.agences.forEach((agence) => {
        const image = {
          url: 'https://www.sgmaroc.com/wp-content/themes/sg/assets/img/icon-map.png',
          size: new google.maps.Size(42, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 64),
        };

        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: { lat: parseFloat(agence.latitude), lng: parseFloat(agence.longitude) }, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          label: '',
        // animation: google.maps.Animation.DROP,
          icon: image,
          title: agence.name, // the title of the marker is set to the name of the location
        });


        const contentString = document.createElement('div');
        ReactDOM.render(<Provider store={store}>
          <MapMarker agence={agence} action={() => { this.selectAgence(agence); }} />
        </Provider>, contentString);

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200,
        });
        /* Code SG MAROC
        var morocco = new google.maps.LatLng(30.98840971557888, -7.712892499999948);
					var mapStyles = [{featureType: "administrative.country",stylers: [{ visibility: "off" }]}];
		    		var mapType = new google.maps.StyledMapType(mapStyles ,{name: "Maroc"});
					map = new google.maps.Map(document.getElementById('map'), {
						center: morocco,
						zoom: 6
					});
					map.mapTypes.set('maroc', mapType );
		        	map.setMapTypeId('maroc');
		        	layer = new google.maps.FusionTablesLayer({
						query: {
							select: 'geometry',
							from: '1S4aLkBE5u_WS0WMVSchhBgMLdAARuPEjyW4rs20',
							where: "col1 contains 'MAR'"
						},
						styles: [{
							polylineOptions: {
							    strokeColor: "#333333",
							    strokeWeight: 2
							},
						}],
						suppressInfoWindows: true,
					});
					layer.setMap(map);

        */

        // google.maps.event.addListener(infowindow, 'closeclick', infowindow.onClose.bind(infowindow));

       /* marker.addListener('mouseover', function() {
          infowindow.close();
          infowindow.open(this.map, marker);
        });

        marker.addListener('mouseout', function() {
          infowindow.close();
        });*/

        marker.addListener('click', function () {
          infowindow.open(this.map, marker);
          this.map.setCenter(marker.getPosition());
          this.map.setZoom(15);
        });

        marker.addListener('mousedown', function () {
          infowindow.open(this.map, marker);
        });

        marker.addListener('mouseup', () => {
          infowindow.close();
        });


        /* google.maps.event.addListener(marker, 'mousedown', function() {
          infowindow.open(this.map, marker);
          });
        google.maps.event.addListener(marker, 'mouseup', function() {
          infowindow.close();
          });*/

        /* marker.child.addListener('close', function() {
          console.log("map.infowindow.close", infowindow);
          //infowindow.close();

         // this.map.refs.marker.close();
        });*/

        marker.addListener('closeclick', () => {
          console.log('map.infowindow.closeclick', marker);
          // currentMark.setMap(null);
        });

        /* google.maps.event.addListener(infowindow, 'click2', function() {
          console.log("map.infowindow.click2", infowindow);
          infoWindow.onClose().bind(this);
          //currentMark.setMap(null);
        });*/
        markers.push(marker);
        // Add a marker clusterer to manage the markers.
        /* var markerCluster = new MarkerClusterer(this.map, markers,
          {imagePath: 'http://www.louis-serge-real-del-sarte.com/var/f/l8/nq/l8nqkBfAJpig6oW4M3YzmEnHqw9UKGsTPVevZr20hRaO8_juc1.jpg'});*/

        google.maps.event.trigger(infowindow, 'closeclick');
      });


      //  Centrer la map au milieu de la ville séléctionnée
      this.props.functionCurrentLocation;
    }
  }


  // activating current localization
  functionCurrentLocation() {
    this.setState({ centerAroundCurrentLocation: true });

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
        });
      });
    }
  }
  // Fin

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '46vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '70vh', // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    };


    return (
    // in our return function you must return a div with ref='map' and style.
      <div className="row">

        <div className="col-lg-12" ref="map" style={style} >
          loading map...
        </div>


      </div>

    );
  }
}


MapView.propTypes = {
  agences: PropTypes.array.isRequired,
  // activating current localization
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  placeholder: React.PropTypes.string,
  onPlacesChanged: React.PropTypes.func,
  setAgenceSelectionnee: React.PropTypes.func.isRequired,
  // Fin

   // https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
  enableHighAccuracy: PropTypes.bool,
  timeout: PropTypes.number,
  maximumAge: PropTypes.number,
   // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
   // Do not call getCurrentPosition on mount
  lazy: PropTypes.bool,
};
MapView.defaultProps = {

  zoom: 11,
  // Rabat, by default
  initialCenter: {
    lat: 34.0132500,
    lng: -6.8325500,
  },
   // activating current localization
  centerAroundCurrentLocation: false,
  // Fin
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
  onSuccess: (pos) => {},
  // eslint-disable-next-line handle-callback-err
  onError: (err) => {},
  lazy: false,
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyALWPNUAcR9SSUTQUBxV1tVpJ_ZMmi7LuQ',
})(MapView);
