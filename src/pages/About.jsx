import "./About.css";
import profPic from "../assets/images/pixel_profile_pic.png";

function About() {
  return (
    <>
      <div className="fullbody">
        <div className="aboutus-first-column">
          <p>alsarria-dev</p>
          <img className="profile-pic" src={profPic} alt="" />
        </div>
        <div className="aboutus-second-column">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            inventore dolorum omnis voluptates a blanditiis accusantium eius,
            quod suscipit minima veritatis delectus labore, eaque iusto minus
            sequi ullam necessitatibus perspiciatis!
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            repellat omnis nihil at aliquid sit laborum accusantium assumenda
            temporibus corporis debitis quos mollitia architecto neque voluptas
            dolor adipisci ad ullam.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
