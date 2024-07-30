import "./about.css";
import aboutimg from "../../assets/Mask Group (11).png";
import succes from "../../assets/Group 78.png";
function about() {
  return (
    <div className="container">
      <div className="about__wrap">
        <div className="about__img">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about__descript">
          <span className="aboutUs">About Us</span>
          <b className="about__title">
            Interioris The Will of An Epoch Mextreo
          </b>
          <p className="aboutp">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.If you
            are going to use a passage of Lorem Ipsum, sure there isn't anything
            embarrassing hidden the middleof text. All the Lorem Ipsum
            generators on the Internettend to repeat predefined chunks as
            necessary,making this the first true generator on the Internet.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="succesfull__wrap">
        <div className="succ__descrpt">
          <b className="succ__num">20</b>
          <strong className="succ__title">
            Years Of Successful Working The Market
          </strong>
          <button>READ MORE</button>
        </div>
        <div className="succes__img">
          <img src={succes} alt="" />
        </div>
      </div>
    </div>
  );
}
export default about;
