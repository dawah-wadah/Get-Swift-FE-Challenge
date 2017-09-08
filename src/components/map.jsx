import React, {
	Component
} from 'react';

import GoogleMap from 'google-map-react';

class Map extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			center: {
				lat: 40.740198,
				lng: -73.989433
			},
			zoom: 17,
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
