import React from "react";
import "./AboutUs.css";
import Nav from "../../components/Nav/Nav";

function AboutUsPage() {
  return (
    <div className="page-wrapper">
      {/* <div id="Nav">
        <Nav />
      </div> */}
      <div className="aboutus">
        <br></br>
        <br></br>
        <h1 id="about" style={{ color: "#004aad" }}>
          Meet the Team!
        </h1>
        <div className="team">
          <div className="container">
            <img
              className="image"
              src={require("../../images/Cath.jpg")}
              alt="Catherine Leighton"
            />
            <div className="middle">
              <div className="text">Catherine Leighton</div>
            </div>
          </div>
          <div className="container">
            <img
              className="image"
              src={require("../../images/Ellen.jpg")}
              alt="Ellen Marinko"
            />
            <div className="middle">
              <div className="text">Ellen Marinko</div>
            </div>
          </div>
          <div className="container">
            <img
              className="image"
              src={require("../../images/Nick.jpg")}
              alt="Nicolette Heath"
            />
            <div className="middle">
              <div className="text">Nicolette Heath</div>
            </div>
          </div>
          <div className="container">
            <img
              className="image"
              src={require("../../images/Roshi.jpg")}
              alt="Roshi Ettehadi"
            />
            <div className="middle">
              <div className="text">Roshi Ettehadi</div>
            </div>
          </div>
          <div className="container">
            <img
              className="image"
              src={require("../../images/Vivi.jpg")}
              alt="Vivianne Vilar"
            />
            <div className="middle">
              <div className="text">Vivianne Vilar</div>
            </div>
            <br></br>
          </div>
          <br></br>
        </div>


        <div style={{ backgroundColor: "#e1e3d8" }}>
          <br></br>
          <h1 id="about" style={{ color: "#004aad" }}>
            We Love Comparing!
          </h1>
          <p className="aboutpagepagraph">
            At ComparaList, we understand that making everyday life decisions
            such as buying a fridge, car or furniture can be daunting. That's
            why we're here:)
          </p>
          <p className="aboutpagepagraph" >
            Our goal is to help people on the go to easily note and compare
            different options for the same item. The end goal is to help you
            make better decisions.
          </p>
          <br></br>
        </div>
        <div>
          <br></br>
          <h1 id="about" style={{ color: "#004aad" }}>
            How to use!
          </h1>
          <p className="aboutpagepagraph">
            Comparalist is a personal use app, which allows you to easily compare and
            contrast different options for the same item. First you
            need to create an account, then you will be able to create a
            list, name it and add your items.{" "}
          </p>
          <p className="aboutpagepagraph">
            You can add four attributes as well as uploading an image to the list,
            so you can narrow down what matters most to you.
          </p>
          <p className="aboutpagepagraph">
            The items are editable and after you have made your decision, you can
            archive your collections for future use or delete them.
          </p>
          <br></br>
          <br></br>
        </div>
        <div style={{ backgroundColor: "#e1e3d8" }}>
          <br></br>
          <h1 id="about" style={{ color: "#004aad" }}>
            We Love hearing from you!
          </h1>
          <p className="aboutpagepagraph">
            We hope you enjoy our website, as much as we enjoyed creating it for
            you. If you have any questions or comments, please don't hesitate to{" "}
            <a style={{ color: "#004aad" }} href="./ContactUs">
              contact us
            </a>
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
