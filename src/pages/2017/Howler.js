function Howler(props) {
  return (
    <div className="App">
      <p>
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/zrWqL9NdTMw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        <strong>
          <em>howler</em>
        </strong>
        <br />
        2017
        <br />
        arduino + dist.sensor x 4, speaker x 2, laptop
        <br />
        30cm x 20cm x 10cm
        <br />
        59s
      </p>
    </div>
  );
}

export default Howler;
