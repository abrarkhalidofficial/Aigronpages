import Header from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.scss";
import "react-phone-number-input/style.css";
import missionsection from "./assets/mission-section.png";
import aboutusbottom from "./assets/about-us-bottom.png";

function App() {
  return (
    <>
      <Header />
      <section className="aboutus__page">
      <div className="aboutus__page__left">
      <div className="aboutus__page__left_text">
        About Us
        </div>
      </div>
  
    
        <div className="aboutus__page__right">
          <div className="aboutus__page__right__info">
            Aigron is an AI and Data consultancy, development and recruitment
            company founded by experts who are actively involved in the AI and
            Data domain. We are experienced with helping companies' businesses
            to the next level through digitalisation.
          </div>
          <div className="aboutus__page__right__button">
            <button>Let us support you</button>
          </div>
        </div>
      </section>
      <section className="aboutusbottom">
        <img src={aboutusbottom} alt="aboutusbottom" />
      </section>
      <section className=" mission__section">
        <div className="mission__section__left">
          <div className="mission__section__left__img">
            <img src={missionsection} alt="mission" />
          </div>
        </div>
        <div className="mission__section__right">
          <div className="mission__section__right__heading">
            Mission & Vision
          </div>
          <div className="mission__section__right__info">
            Through Aigron we aim to be a dedicated partner for our customers to
            help them accelerate adoption of new technologies during the
            technical evolution, making it possible taking the next step in
            their businesses. We strongly believe AI and Data developments can
            contribute to a better and more sustainable world.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
