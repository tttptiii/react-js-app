import img1 from '../../assets/images/2014/rainy-cube/1.jpg';
import img2 from '../../assets/images/2014/rainy-cube/2.jpg';
import img3 from '../../assets/images/2014/rainy-cube/3.jpg';

import '../../assets/styles/images.css';

function RainyCube(props) {
  return (
    <div className="App">
      <img src={img1} className="image-style-1" alt="1" />
      <img src={img2} className="image-style-1" alt="2" />
      <img src={img3} className="image-style-1" alt="3" />
      <p><strong><em>rainy cube</em></strong><br />
        2014<br />
        polypropylene sheet, blue cellophane sheet, mp3 player, earphone<br />
        60cm x 60cm x 60cm</p>
    </div>
  );
}

export default RainyCube;