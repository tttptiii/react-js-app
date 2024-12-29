function ColorWheel(props) {
  return (
    <div className="App">
      <p>
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/tv0Ay3DbZlo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        <strong>
          <em>color wheel</em>
        </strong>
        <br />
        2014
        <br />
        arduino + dist.sensor, foam board, cellophane film
        <br />
        30cm x 25cm x 15cm
        <br />
        49s
      </p>
    </div>
  );
}

export default ColorWheel;
