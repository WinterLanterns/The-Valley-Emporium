import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const About = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/Rz8ZJjm/302637386-1266617844142518-361165747875341902-n.jpg"
  );
  const [imageClass, setImageClass] = useState("");
  return (
    <div className="about-background">
      <section className="sec p-1 py-3 text-light" id="about">
        <div className="container col-sm-12 d-flex justify-content-around my-2">
          <div className="row">
            <div className="col-12">
              <h1 className="about-heading">History</h1>

              {/* <img className="mb-5 dividers img-fluid" src="" alt="" /> */}
              <div class="col-12">
                <p className="text-center fw-bold px-2 about-para">
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim
                </p>
                <p className="text-center fw-bold px-2 mb-5 about-para">
                  claritatem insitam; est usus legentis in iis qui facit eorum
                  claritatem. Investigationes
                </p>
                <p className="text-center fw-light px-2 mb-3 about-para">
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Typi claritatem
                </p>
                <p className="text-center fw-light px-2 mb-5 about-para">
                  insitam; est usus legentis in iis qui facit eorum claritatem.
                  Investigationes demonstraverunt lectores
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center mt-4 ">
          <div
            className="row shadow p-3 mb-5  rounded-top  mt-2 mb-5 px-3 pt-5"
            style={{ backgroundColor: "#2e2e2e" }}
          >
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className={`ms-auto w-100 border m border-warning ${imageClass}`}
                src={imageUrl}
                onMouseEnter={() => {
                  setImageUrl(
                    "https://i.ibb.co/NsXy0bN/304910057-1304460016961051-7540864903800996039-n.jpg"
                  );
                  setImageClass("image");
                }}
                onMouseLeave={() => {
                  setImageUrl(
                    "https://i.ibb.co/Rz8ZJjm/302637386-1266617844142518-361165747875341902-n.jpg"
                  );
                  setImageClass("image");
                }}
                alt="about-img"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className="mt-5 mb-3 display-5 text-uppercase text-center about-heading">
                About Us
              </h2>

              <br />
              <p className="p-1 border border-3 border-warning">
                The Valley Emporium, a community bakery, was born from the
                passion and friendship of Kuiama Gatz and Liz Vidrio. The two,
                who met in high school as members of a punk rock band, shared a
                dream of creating a vibrant community space that offered healthy
                and allergen-free food options. With Liz working on a business
                plan and Kuiama developing a menu free of the top 9 most common
                allergens, including wheat, gluten, dairy, soy, eggs, peanuts,
                tree nuts, sesame, fish, and shellfish, the bakery was able to
                bring their vision to life. The bakery is proud to offer baked
                goods that are both delicious and safe for people with allergies
                to enjoy.
              </p>
              <img className="teddy-rex ms-auto w-50" src="#" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
