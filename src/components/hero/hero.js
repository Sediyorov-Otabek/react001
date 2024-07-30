import "./hero.css";
import heroimg from "../../assets/Mask Group (10).png";
function hero() {
  return (
    <div className="container">
      <div className="creat__wrap">
        <div className="creat__discript">
          <i>MODERN INTERIOR</i>
          <b>Create Your Interior Design.</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button>CONTACT</button>
        </div>
        <div className="creat__img">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default hero;
