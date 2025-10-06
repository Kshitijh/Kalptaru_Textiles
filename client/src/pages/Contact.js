import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {

  const handClick = ()=>{
    window.location.href = 'https://kshitijh.github.io/bot/';
  };

  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Factory.jpg"
            alt="Ready to help!!"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info about products can call anytime we 24X7
            vaialible.
          <body>  Office timings : 9:00am to 6:00pm </body> 
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.kalpatarutext@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9922008673
          </p>
        </div>
        <p className="mt-3">
        <button className="btn btn-danger" onClick={handClick}>
              Chatbot
              </button>
        </p>
        
      </div>
    </Layout>
  );
};

export default Contact;
