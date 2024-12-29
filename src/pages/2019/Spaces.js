import img10 from "../../assets/images/2019/spaces/10.png";
import img11 from "../../assets/images/2019/spaces/11.png";
import img12 from "../../assets/images/2019/spaces/12.png";
import img13 from "../../assets/images/2019/spaces/13.jpg";
import img14 from "../../assets/images/2019/spaces/14.png";
import img15 from "../../assets/images/2019/spaces/15.png";

function Spaces(props) {
  return (
    <div className="App">
      <img src={img10} className="image-style-1" alt="10" />
      <img src={img11} className="image-style-1" alt="11" />
      <img src={img12} className="image-style-1" alt="12" />
      <img src={img13} className="image-style-1" alt="13" />
      <img src={img14} className="image-style-1" alt="14" />
      <img src={img15} className="image-style-1" alt="15" />
    </div>
  );
}

export default Spaces;
