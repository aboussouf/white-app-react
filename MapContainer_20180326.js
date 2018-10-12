import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
//import {  } from "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
// import {geolocated} from 'react-geolocated';

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};
 class MapContainer extends React.Component {
  constructor (props) {
    super(props)

    //this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
    //this.currentPosition = this.currentPosition.bind(this);
    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },  
      centerAroundCurrentLocation : false,
      fetchingPosition: false,
      position: undefined,
      error: undefined
    }
    // This binding is necessary to make `this` work in the callback
    this.functionCurrentLocation = this.functionCurrentLocation.bind(this);
    //this.centerAroundCurrentLocation = this.state.centerAroundCurrentLocation.bind(this);
  }

  componentWillMount () {
    if (typeof window !== 'object') {
      return
    }

    if (!('mapcontainer' in window.navigator)) {
      return
    }

    if (this.props.lazy) {
      return
    }

    this.getCurrentPosition()
  }

  componentWillUnmount () {
    this.willUnmount = true
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

    //this.setState({ centerAroundCurrentLocation:true,fetchingPosition: true })
    this.setState({ centerAroundCurrentLocation:true })

    return window.navigator.geolocation.getCurrentPosition(
      position => {
        if (this.willUnmount) return

        //this.setState({ centerAroundCurrentLocation:true });
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

  panToArcDeTriomphe() {
    this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  }
  // currentPosition(){
  // this.map.panTo(currentLocation);
  //}
 

  componentDidMount = () => {
    console.log('ssss',this.props.agences)
    
      if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((pos) => {
                  const coords = pos.coords;
                  console.log('coords',pos.coords)
                  this.setState({
                      currentLocation: {
                          lat: coords.latitude,
                          lng: coords.longitude
                      }
                  })
              })
          }
      }
      this.loadMap();
    }

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      { name: 'Test 1', location: {lat:33.5926823,lng:-7.637372699999999}},
      { name: 'Test 2', location: {lat:33.5881494,lng:-7.6398432000000005}},
      { name: 'Test 3', location: {lat:33.5898884,lng:-7.638024499999999}},
      { name: 'Test 4', location: {lat:33.592659999999995,lng:-7.6429329}},
      { name: 'Test 5', location: {lat:33.58781,lng:-7.6431313}},
      { name: 'Test 6', location: {lat:33.5873458,lng:-7.6322429}},
      { name: 'Test 7', location: {lat:33.5846636,lng:-7.632670699999999}},
      { name: 'Test 8', location: {lat:33.58229,lng:-7.6403099999999995}},
      { name: 'Test 9', location: {lat:33.5901172,lng:-7.626318299999999}},
      { name: 'Test 10', location: {lat:33.581188499999996,lng:-7.623835499999999}},
      { name: 'Test 11', location: {lat:33.5787232,lng:-7.6456685}},
      { name: 'Test 12', location: {lat:33.60053,lng:-7.637930000000001}},
      { name: 'Test 13', location: {lat:33.5881033,lng:-7.6172925000000005}},
      { name: 'Test 14', location: {lat:33.581749699999996,lng:-7.6346015}},
      { name: 'Test 15', location: {lat:33.5697025,lng:-7.6517553000000005}},
      { name: 'Test 16', location: {lat:33.5796142,lng:-7.6174642}},
      { name: 'Test 17', location: {lat:33.5983543,lng:-7.6448599999999995}},
      { name: 'Test 18', location: {lat:33.56854,lng:-7.62629}}, 
      { name: 'Test 19', location: {lat:33.59478,lng:-7.61448}},
      { name: 'Test 20', location: {lat:33.5715809,lng:-7.6590143}}
    ],
  }

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      // Ali 20180326
      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      //const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      // Fin Ali 20180326

      const mapConfig = Object.assign({}, {
        //center: {lat: 33.5883100, lng: -7.6113800}, // sets center of google map to Casablanca.
        center: center,
        //center: {lat: this.componentWillMount.position.latitude, lng: this.componentWillMount.position.longitude},
        zoom: zoom, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      var markers = []; 
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;
  // ==================
  // ADD MARKERS TO MAP
  // ==================
      this.props.agences.forEach( location => { // iterate through locations saved in state
        console.log('ddd',location)
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: location.latitude, lng: location.longitude}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          label: labels[labelIndex++ % labels.length],
          animation: google.maps.Animation.DROP,
          title: location.name // the title of the marker is set to the name of the location
        });
        // Add a marker clusterer to manage the markers.
        //var markerCluster = new MarkerClusterer(this.map, marker,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
        //marker.addListener('click', drop);
      },
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 52.520, lng: 13.410}
        });
      
    },

      function drop() {
        clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200);
        }
      },

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          this.markers.push(new google.maps.Marker({
            position: position,
            map: this.map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      },

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      },
     
      )
      

    }

  }

  // Ali TODO activating cuurent loc
  functionCurrentLocation(){
  
    // this.props.centerAroundCurrentLocation=true;
     this.setState({ centerAroundCurrentLocation:true });
     //this.setState({
     console.log("centerAroundCurrentLocation",this.state.centerAroundCurrentLocation)
     if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          console.log('coords',pos.coords)
          this.setState({
              currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
              }
          })
      })
  }
     //this.map.panTo(this.state.currentLocation);
     //const curr = this.state.currentLocation;

    //const google = this.props.google;
    //const maps = google.maps;

    //let center = new maps.LatLng(curr.lat, curr.lng)
    //this.map.panTo(center)
     //this.centerAroundCurrentLocation = true;
     // Object.assign({}, { centerAroundCurrentLocation: true });
     //let {centerAroundCurrentLocation} = this.centerAroundCurrentLocation;
     //centerAroundCurrentLocation=this.state.centerAroundCurrentLocation;
     
      
    }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '45vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '35vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }
  
    
    return ( 
    // in our return function you must return a div with ref='map' and style.
    <div>
      <div>
        <button onClick={this.functionCurrentLocation}>Trouver ma position</button>
        {this.state.centerAroundCurrentLocation}
      </div>
      <div ref="map" style={style} >
        loading map...
      </div>
    </div>
    
    )
    //if (!this.props.render) {
    //  return null
    //}
    //return (
    //  this.props.render({
    //    getCurrentPosition: this.getCurrentPosition,
    //    fetchingPosition: this.state.fetchingPosition,
    //    position: this.state.position,
    //    error: this.state.error
    //  }) || null
    //)
  }
}


MapContainer.propTypes = {
  agences: PropTypes.array.isRequired,
  // Ali 20180326
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  // Fin Ali

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
MapContainer.defaultProps = {
  // Ali 20180326
  zoom: 11,
  // Rabat, by default
  initialCenter: {
    lat: 34.0132500,
     lng: -6.8325500
  },
  centerAroundCurrentLocation: true,
  // Fin Ali
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
  onSuccess: pos => {},
  // eslint-disable-next-line handle-callback-err
  onError: err => {},
  lazy: false
}
 export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi05uxM4Kl9rjYnVGF6WukRTJvHwNsa7Y'
})(MapContainer);
