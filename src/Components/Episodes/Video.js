import react from 'react';
import { Embed } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function VideoDisplay(props){
let placeholderName = process.env.PUBLIC_URL + '/images/clicktoview._animation.gif'
if (props.videourl.length == 0){
    return(<img className="NoVideoAvailable" src={process.env.PUBLIC_URL + '/images/nophotoavailable_cropped.gif'} alt="No video available"/>)
} else {
    return(
        <Embed
        id={props.video_id}
        placeholder={placeholderName}
        source='vimeo'
      />
    )
}
}
export default VideoDisplay;