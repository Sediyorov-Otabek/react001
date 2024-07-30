import "./clients.css";

function clients() {
  return (
    <div className="container">
      <div className="clients__wrap">
        <span>TESTIMONIALS</span>
        <b className="clentbb">Client says about us</b>
        <div className="clients__cards">
          <div className="clients__card">
            <div className="clients__card__title">
              <b className="clentb">Louis Saville /</b>
              <span>CEO at Google inc</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="clients__card">
            <div className="clients__card__title">
              <b className="clentb">Louis Saville /</b>
              <span>CEO at Google inc</span>
            </div>
            <p className="clentp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default clients;
