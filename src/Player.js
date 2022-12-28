import React ,{Component, useEffect} from "react";

class player extends Component{

    render(){
        return (<div id="rmp"></div>);
    }

    componentDidMount(){
        const src = {
            hls: 'https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
          };
          var streamrootConfig = {
            type: 'hlsjs',
            streamrootKey: 'demoswebsiteandpartners',
            dnaConfig: {},
        };
          var settings = {
            licenseKey: 'Kl8lMD1pZ2N2MDIwN292PWlvZWU3MnNlP3JvbTVkYXNpczMwZGIwQSVfKg==',
                streamrootConfig: streamrootConfig,
                src: src,
                // Recommended settings for HLS streaming
                hlsJSMaxBufferSize: 0,
                hlsJSMaxBufferLength: 30,
                hlsJSLiveSyncDuration: 30, // Not needed for VoD streams
                forceHlsJSOnMacOSIpadOSSafari: true, //To activate Streamroot on Safari Mac OS. Only from player 5.4.10+.
                delayToFade: 3000,
              
                muted: true,
                autoplay: true,
        };
          const elementID = 'rmp';
          const rmp = new window.RadiantMP(elementID);

          const rmpContainer = document.getElementById(elementID);
rmpContainer.addEventListener('ready', () => {
  console.log('player ready');
  // Invoke API methods
  console.log(rmp.getStreamType());
});
rmpContainer.addEventListener('playing', () => {
  console.log('player has received playing event');
  rmp.setBitrate(0);
});
          rmp.init(settings);
 
   
    
     
    }
}


export default player;