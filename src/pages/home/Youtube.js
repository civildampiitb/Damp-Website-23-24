import React from 'react';
import style from "./home.module.css"
import ReactPlayer from 'react-player';

const MyVideoComponent = () => {


    return (
        <div className={style.youtube_main}>
        <div className={style.youtube_text}><p>Department at a Glimpse</p></div>
        <div className={style.player}>
            <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=HOyAwRDGKUI"
                width="150vh"
                height="80vh"
                controls={true}
            />
        </div>
        </div>
    );
}

export default MyVideoComponent;
