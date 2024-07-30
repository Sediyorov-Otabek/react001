import "./signup.css";
import chiziq from "../../assets/Line 1.png";
function signup() {
  return (
    <div className="container">
      <div className="signup__wrap">
        <b className="sign_title">DON’T FORGET TO SIGN UP</b>
        <div className="sign__img">
          <img src={chiziq} alt="" />
        </div>
        <p className="sign__text">
          Find out early about all upcoming promotions and new product releases
          with our newsletter.
        </p>
        <form className="sign__form" action="">
          <div className="sign__inp__div">
            <input
              className="sign__inp"
              placeholder="Enter your email address....."
              type="text"
            />
          </div>
          <button className="sign__btn">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}
export default signup;
