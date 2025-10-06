import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - kalpteruTextile"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Factory2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Kalpataru Textile, we're more than just fabric manufacturers, we're passionate storytellers weaving threads of tradition, innovation, and quality into everything we do. With 20 years of experience and a team of dedicated employees, we take pride in crafting fabrics that are not only beautiful and functional.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
