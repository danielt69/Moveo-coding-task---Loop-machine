import { Play, Pause, Square, Repeat } from 'react-feather';


const Controls = (props) => {
    return (

        <span className="controls border-t mt-5 py-4 relative z-0 flex justify-center">
            <button
                type="button"
                onClick={() => props.onPlayerStateChange({
                    ...props.playerState,
                    isPlaying: true,
                })}
                className={props.playerState.isPlaying ?
                    `relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"` :
                    `relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"`}>

                <Play />
            </button>
            <button
                type="button"
                onClick={() => props.onPlayerStateChange({
                    ...props.playerState,
                    isPlaying: false,
                })}
                className="-ml-px relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <Pause />
            </button>
            <button
                type="button"
                onClick={() => props.onPlayerStateChange({
                    ...props.playerState,
                    isPlaying: false,
                    currentTime: 0,
                })}
                className="-ml-px relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <Square />
            </button>
            <button
                type="button"
                onClick={() => props.onPlayerStateChange({ ...props.playerState, isRpeat: !props.isRpeat })}
                className={props.playerState.isRpeat ?
                    `-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500` :
                    `-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`
                }
            >
                <Repeat />
            </button>
        </span>
    );
}

export default Controls;