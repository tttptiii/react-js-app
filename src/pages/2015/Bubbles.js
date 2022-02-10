import img1 from '../../assets/images/2015/bubbles/1.jpg';
import img2 from '../../assets/images/2015/bubbles/2.jpg';

function Bubbles(props) {
  return (
    <div className="App">
      <p><iframe width="720" height="405" src="https://www.youtube.com/embed/JuwBPXEaiGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
      <p><strong><em>bubbles</em></strong><br />
        2015<br />
        a glass of dr.pepper, projected on a wall<br />
        1m48s</p>
      <img src={img1} className="image-style-align-top" alt="1" />
      <img src={img2} className="image-style-align-top" alt="2" />
    </div>
  );
}

export default Bubbles;