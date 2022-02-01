import React from "react";
import "./Mission.css";
import image from "../assists/images/image3.png";

function Mission() {
  return (
    <>
      <div className="mission">
        <div className="mission-left">
          <div className="img"></div>

          <div className="statements">
            <div className="mission-statement">
              <h3> Mission </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                soluta cupiditate tempore voluptates commodi quam provident
                eligendi ipsa? Inventore quisquam dolore harum dolorum hic fugit
                ad suscipit iure ea soluta? Explicabo hic commodi consectetur
                ab, alias illum repellendus est nobis.
              </p>
            </div>

            <div className="objective-statement">
              <h3>Objective</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                in debitis at, atque quaerat iste ipsam fugiat accusantium
                similique nemo eaque animi omnis eius ipsa quae magnam
                reprehenderit cupiditate nihil sapiente porro sit deleniti
                consequuntur libero? Voluptas nostrum amet odit!
              </p>
            </div>
          </div>
        </div>

        <div className="mission-right">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Mission;
