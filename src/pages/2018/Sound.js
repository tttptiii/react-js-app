import ttt_logo from "../../assets/images/ttt_white.png";

function Sound(props) {
  return (
    <div className="App">
      <img src={ttt_logo} className="image-style-1" alt="ttt_logo" />
      <p>
        <iframe
          width="650"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/397827981&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <br />
        <iframe
          width="650"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399916632&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </p>
    </div>
  );
}

export default Sound;
