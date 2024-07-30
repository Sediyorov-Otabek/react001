import "./main.css";
import serviceone from "../../assets/sr.png";
import servicesy from "../../assets/sd.png";

function main() {
  return (
    <section className="container">
      <div className="servise__wrap">
        <span>WHAT WE DO</span>
        <strong>Our Service</strong>
        <div className="servise__card__wrap">
          <div className="service__card">
            <div className="service__img">
              <img src={serviceone} alt="" />
            </div>
            <div className="service__text">
              <b className="ser__b">Interior Design</b>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__img">
              <img src={serviceone} alt="" />
            </div>
            <div className="service__text">
              <b className="ser__b">Interior Design</b>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__img">
              <img src={servicesy} alt="" />
            </div>
            <div className="service__text">
              <b className="ser__b">Interior Design</b>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default main;
