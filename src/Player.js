import React ,{Component} from "react";

class player extends Component{

    render(){
        return (<div id="rmp"></div>);
    }

    componentDidMount(){
        const src = {
            hls: 'https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1600000.m3u8'
          };
          var settings = {
            timeout: 12000,
            licenseKey: 'Kl8lYz0wN3o9NjJjczl2P3JvbTVkYXNpczMwZGIwQsSVfKg==',
            iframeMode: true,
            iframeAllowed: true,
            autoplay: false,
            sharing: false,
            skin: 's3',
            src: src,
            pip: false,
            logoPosition: 'bottom',
            logoWatermark: 'false',
            mute: 'false',
            isLive: true,
            gaEvents: ['context', 'ready', 'playerstart', 'error', 'adimpression', 'adloadererror', 'aderror']
        };
           const elementID = 'rmp';
           const rmp = new window.RadiantMP(elementID);
           rmp.init(settings);
    }
}


export default player;