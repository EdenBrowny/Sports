import React from "react";
import "./Academy.css";
import logo from "../assists/images/logo.png";
import image from "../assists/images/image 4.png";

function Academy() {
  return (
    <>
      <div className="header-aca">
        <div className="About">
          <h2>About Leon Football</h2>
          <h3>Academy</h3>
        </div>

        <div className="About-img">
          <img src={logo} alt="" />
        </div>

        <div className="About-content">
          <p>
            Leon Football Academy Is A Nigerian-Owned Football Academy
            Established To Provide A Conducive Environment For The Growth And
            Development Of The Young Players, As Well As Rendering Financal
            Assistance To Every Young Footballer Who Aspires To Play At The
            Professional Level In Nigeria And Beyond.
          </p>
        </div>
      </div>

      <div className="academy">
        <div className="empty-div"></div>

        <div className="academy-hero-section">
          <div className="academy-left">
            <img src={image} alt="" />
          </div>

          <div className="academy-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              autem asperiores error in illo temporibus est ex, tenetur corrupti
              tempora inventore animi nulla dolore, enim suscipit cum rem
              praesentium illum itaque. Vitae fuga repudiandae rerum pariatur
              non delectus quisquam facilis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Academy;
