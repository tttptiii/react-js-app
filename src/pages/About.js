import img from "../assets/images/tttptiii.png";

function About(props) {
  return (
    <div className="App">
      <img src={img} width="350" alt="profile" />
      <p>
        <strong>Han Young</strong> is media artist based in Seoul, Korea,
        working/experimenting on self initiated
        <br />
        projects which explore possibilities of real/virtual spaces created with
        sound, 3D and
        <br />
        interactive media.
      </p>
      <p>
        mailto : <u>ttt.pt.iii@gmail.com</u>
      </p>
    </div>
  );
}

export default About;
