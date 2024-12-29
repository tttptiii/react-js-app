function DesigningSound(props) {
  return (
    <div className="App">
      <p>
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed?listType=playlist&list=PLGikVjLZJLHjuK0f-Rs6cmqOa2JgnHE4i"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        <strong>
          <em>Designing Sound (w/ SuperCollider)</em>
        </strong>
        <br />
        Source code provided at: <a href="https://github.com/tttptiii/designing-sound" target="_blank">tttptiii/designing-sound</a>
      </p>
    </div>
  );
}

export default DesigningSound;
