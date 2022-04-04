import React, { useEffect, useMemo } from 'react';
import { VolumeX, Volume2 } from 'react-feather';


const Channel = (props) => {
    // console.log(props);

    let audioElement = useMemo(() => new Audio(props.path), [props.path]);

    useEffect(() => {
        let audioLoadedHandlet = () => {
            // console.log(audioElement.duration);
        }
        // audioElement.play();
        // audioElement.pause();
        // audioElement.duration;
        // audioElement.currentTime;
        // audioElement.muted = true;
        audioElement.addEventListener('loadeddata', audioLoadedHandlet);
        return () => {
            audioElement.removeEventListener('loadeddata', audioLoadedHandlet);
        }
    }, [audioElement]);

    useEffect(() => {
        audioElement.muted = props.isMuted;
    }, [audioElement, props.isMuted]);

    useEffect(() => {
        props.playerState.isPlaying ? audioElement.play() : audioElement.pause();
    }, [audioElement, props.playerState.isPlaying]);

    useEffect(() => {
        if (!props.playerState.isPlaying && props.playerState.currentTime === 0) {
            console.log('reseting to 0');
            audioElement.currentTime = 0;
        }
    }, [audioElement, props.playerState.currentTime, props.playerState.isPlaying]);

    return (
        <div className={`channel py-2 px-4 border-b border-white text-sm flex items-center capitalize font-semibold gap-2 ${props.color}`}>
            <span className="mute cursor-pointer hover:bg-slate-100 hover:shadow-md p-1 rounded-full text-gray-700 block transition-all" onClick={() => props.onMute(props.name, !props.isMuted)}>
                {props.isMuted ? <VolumeX /> : <Volume2 />}
            </span>
            <span>
                {props.name}
            </span>
            {/* <audio controls>
                <source src={props.channel.path} type="audio/mp3" />
                Your browser does not support the <code>audio</code> element.
            </audio> */}
        </div>
    );
}

export default Channel;