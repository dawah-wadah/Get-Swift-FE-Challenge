import React, {
	Component
} from 'react';

import GoogleMap from 'google-map-react';

class Map extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			center: {
				lat: 40.6743890,
				lng: -73.9455
			},
			zoom: 13,

		};
	}


	render() {
		return (
			<div className="map" ref="map">
         <GoogleMap
					 bootstrapURLKeys={{key: 'AIzaSyASdz5Bcn99thaUGyMM6Ce1MpsmvgXMLzQ'}}
					 center={this.state.center}
					 zoom={this.state.zoom}
					 >

         </GoogleMap>
     </div>
		);
	}
}

export default Map;
