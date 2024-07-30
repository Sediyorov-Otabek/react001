import "./news.css";
import newimgone from "../../assets/Mask Group (12).png";
import newimgsy from "../../assets/Mask Group (13).png";
function news() {
  return (
    <div className="container">
      <div className="new__wrap">
        <span className="new__span">LETEST NEWS</span>
        <b className="new__title">From Our Blog</b>
        <div className="new__card__wrap">
          <div className="new__card">
            <div className="new__cardimg">
              <img src={newimgone} alt="" />
            </div>
            <b className="new__card__title">2020 Interior Design Trends</b>
            <p className="new__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="new__btn">CONTINUE READING....</button>
          </div>
          <div className="new__card">
            <div className="new__cardimg">
              <img src={newimgsy} alt="" />
            </div>
            <b className="new__card__title">
              28 Notable Product at ARC Interior Design
            </b>
            <p className="new__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="new__btn">CONTINUE READING....</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default news;
