import "./footer.css";
import navlogo from "../../assets/Screenshot_3 [Recovered] 1.png";
function footer() {
  return (
    <footer class="foo">
      <div class="footer container">
        <div class="footer__star">
          <div>
            <img src={navlogo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non.
          </p>
        </div>
        <div class="footer__section">
          <b>Pages</b>
          <ul class="footer__collection">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">service</a>
            </li>
            <li>
              <a href="">portifilio</a>
            </li>
            <li>
              <a href="blog"></a>blog
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <b>Services</b>
          <ul class="footer__collection">
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">App Design</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Illustration</a>
            </li>
            <li>
              <a href=""></a>Development
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <b>Contact</b>
          <ul class="footer__collection">
            <li>
              <a href="">+00 88 999 888 22</a>
            </li>
            <li>
              <a href="">example@gmail.com</a>
            </li>
            <li>
              <a href="">www.portfolio.com</a>
            </li>
            <li>
              <a href="">44, Housing State, 3200</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default footer;
