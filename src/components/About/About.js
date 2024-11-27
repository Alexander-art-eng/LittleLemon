import aboutImage from "../../images/chef.jpg";
import aboutImages from "../../images/chefs.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" aria-label="About Us" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 aria-label="Little Lemon">Little Lemon</h1>
          <p className="about-location">Chicago</p>
          <p>
            We are a family-owned Mediterranean restaurant dedicated to bringing
            the rich, vibrant tastes of the Mediterranean to your table. Our
            journey began with a simple goal: to share the warmth and
            authenticity of traditional recipes while adding our unique, modern
            twist. At Little Lemon, every dish tells a story. From our crisp,
            refreshing salads to our perfectly grilled meats and zesty desserts,
            we use only the freshest ingredients and time-honored cooking
            techniques to create meals that are both comforting and
            unforgettable.
          </p>
        </div>

        <div className="about-images">
          <img
            src={aboutImage}
            alt="Little lemon sous chef pic"
            aria-label="Little lemon sous chef pic"
          />
          <img
            src={aboutImages}
            alt="Little lemon chefs pic"
            aria-label="Little lemon chefs pic"
          />        
        </div>
      </div>
    </section>
  );
};

export default About;
