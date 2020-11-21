import react from 'react';
import { Embed } from 'semantic-ui-react';

function VideoDisplay(props){
if (props.videourl.length == 0){
    return(<img src={process.env.PUBLIC_URL + '/images/nophotoavailable_cropped.gif'}/>)
} else {
    return(
        <Embed
        id={props.video_id}
        placeholder='/images/vimeo-example.jpg'
        source='vimeo'
      />
    )
}
}
export default VideoDisplay;