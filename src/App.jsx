import { useState } from 'react';
import Channel from "./components/channel";
import Controls from "./components/controls";
import Indicator from "./components/indicator";

function App() {

  let audioPath = (name) => `${document.URL}mp3/${name}.mp3`;

  let [channels, setChannels] = useState([
    {
      "name": "clearday",
      "path": audioPath("clearday"),
      "isMuted": false,
      "color": "bg-red-500",
    },
    {
      "name": "cute",
      "path": audioPath("cute"),
      "isMuted": true,
      "color": "bg-orange-500",
    },
    {
      "name": "funnysong",
      "path": audioPath("funnysong"),
      "isMuted": true,
      "color": "bg-amber-500",
    },
    {
      "name": "happyrock",
      "path": audioPath("happyrock"),
      "isMuted": true,
      "color": "bg-yellow-500",
    },
    {
      "name": "jazzyfrenchy",
      "path": audioPath("jazzyfrenchy"),
      "isMuted": true,
      "color": "bg-lime-500",
    },
    {
      "name": "memories",
      "path": audioPath("memories"),
      "isMuted": true,
      "color": "bg-green-500",
    },
    {
      "name": "onceagain",
      "path": audioPath("onceagain"),
      "isMuted": true,
      "color": "bg-emerald-500",
    },
    {
      "name": "sunny",
      "path": audioPath("sunny"),
      "isMuted": true,
      "color": "bg-teal-500",
    },
    {
      "name": "ukulele",
      "path": audioPath("ukulele"),
      "isMuted": true,
      "color": "bg-cyan-500",
    },
  ]);

  let [playerState, setPlayerState] = useState({
    isRpeat: false,
    isPlaying: false,
    currentTime: 0,
  });

  let handleOnMute = (name, value) => {
    let newChannels = [...channels];
    newChannels.find(c => c.name === name).isMuted = value;
    setChannels(newChannels);
  }


  return (
    <div className="App">
      <div className="container px-5 mx-auto">
        <h1 className="mb-5 text-3xl text-gray-700 font-extrabold uppercase text-center py-4 border-b">Moveo coding task - Loop machine</h1>

        <div className="channels relative">
          {channels.map(channel => (
            <Channel key={channel.name} playerState={playerState} color={channel.color} isMuted={channel.isMuted} onMute={handleOnMute} name={channel.name} path={channel.path} channel={channel} />
          ))}
          <Indicator />
        </div>

        <Controls onPlayerStateChange={setPlayerState} playerState={playerState} />
      </div>
    </div>
  );
}

export default App;
