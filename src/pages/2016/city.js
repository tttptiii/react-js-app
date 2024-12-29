import img1 from "../../assets/images/2016/city/1.png";
import img2 from "../../assets/images/2016/city/2.jpg";
import img3 from "../../assets/images/2016/city/3.jpg";
import img4 from "../../assets/images/2016/city/4.jpg";

function City(props) {
  return (
    <div className="App">
      <img src={img1} className="image-style-1" alt="1" />
      <img src={img2} className="image-style-1" alt="2" />
      <img src={img3} className="image-style-1" alt="3" />
      <img src={img4} className="image-style-1" alt="4" />
    </div>
  );
}

export default City;
