"use client"
import React, { useCallback, useEffect, useState } from "react";
import contactHeading from "../../assets/contact/contact.svg";
import grid from "../../assets/contact/grid.svg";
import "./Contact.css";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ellipse1 from "../../assets/contact/Ellipse 17.png";
import Ellipse2 from "../../assets/contact/Ellipse 18.png";
import Ellipse from "../../assets/contact/Group 203.png";
import box2 from "../../assets/contact/bg box 2.svg";
import box1 from "../../assets/contact/bg box.svg";
import button from "../../assets/contact/button.svg";
import call from "../../assets/contact/call.svg";
import map from "../../assets/contact/india.png";
import location from "../../assets/contact/location.svg";
import MobileNavbar from "../Home/MobileNavbar";
import NavBar from "../Home/NavBar";
import orangeplanet from "../../assets/Asset 6@30 1.png"
import blueplanet from "../../assets/Asset 4@3002 28.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import StarBlinkingPortal from "../Shared/StarBlinkingPortal";
import { motion } from "motion/react";



const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const imageVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function Contact() {

  const [shakeTrigger, setShakeTrigger] = useState(false);

  const goToMap = (latitude, longitude, text) => {
    // window.open(
    //   `https://www.google.com/maps?q=${latitude},${longitude}`,
    //   "_blank"
    // );
    window.open(`https://goo.gl/maps/${text}`, "_blank");
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Please enter a valid name')
      .required('Name is required'),
    company: Yup.string().required('Company is required'),
    position: Yup.string().required('Position is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone is required'),
    service: Yup.string().required('Service is required'),
    message: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        toast.info("Submitting form...");
        const formData = new URLSearchParams({
          Name: values.name,
          Company: values.company,
          Position: values.position,
          Email: values.email,
          Phone: values.phone,
          Service: values.service,
          Message: values.message || "No message provided",
          Url: window.location.href
        }).toString();

        await fetch(
          "https://script.google.com/macros/s/AKfycby9QcgSjFVVIIBLSjSmeCEXnvbGL5GCuzZ672pHR6Sm444nMoL5LciAWFwFKuidrFjL/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
          }
        );

        // Wait a moment to simulate submission
        setTimeout(() => {
          toast.success("Thanks for submitting the form!");
          setShakeTrigger(true);
          setTimeout(() => setShakeTrigger(false), 600);
          formik.resetForm();
        }, 1000);

      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to submit form. Please try again.");
      }
    }
  });

  const notify = () => {
    formik.handleSubmit();
  };

  return (
    <StarBlinkingPortal>
      <div style={{ width: "100%" }}>
        <NavBar />
        <MobileNavbar />
        <div className="header">
          <div className="logoSection">
            {/* <img src={logoText} alt="logoText" /> */}
          </div>

        </div>
        <div className="contactSection relative px-4 sm:px-6 lg:px-8">
          <Image
            src={contactHeading}
            alt=""
            className="contactImage !w-[80%] sm:!w-[60%] md:!w-[40%] lg:!w-[30%] mx-auto py-10 sm:py-16 md:py-20"
          />
          <Image src={orangeplanet} className="hidden md:block absolute top-[10%] left-[10%] moving_2" alt="orangeplanet" />
          <Image src={blueplanet} className="hidden md:block absolute top-0 right-[10%] moving_1" alt="blueplanet" />

        </div>
        <motion.div
          className=" flex items-center justify-center relative min-hscreen overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <div className="w-full max-w-screen-2xl  relative">
            <motion.div
              className="w-full md:w-[90%] lg:w-[87%] mx-auto p-6 md:px-12 lg:px-20"
              variants={containerVariant}
            >
              <motion.form
                className="space-y-8 md:space-y-10 lg:space-y-14 font-serif"
                variants={containerVariant}
                onSubmit={formik.handleSubmit}
              >
                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">Hello! I&apos;m</p>
                  <div className="relative flex-1 min-w-[200px]">
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      YOUR NAME
                    </span>
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-400 text-xs">{formik.errors.name}</div>
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">And I&apos;m Contacting You</p>
                </motion.div>

                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">From</p>
                  <div className="relative flex-1 min-w-[200px]">
                    <input
                      type="text"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      TYPE COMPANY NAME
                    </span>
                    {formik.touched.company && formik.errors.company && (
                      <div className="text-red-400 text-xs">{formik.errors.company}</div>
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">As The</p>
                  <div className="relative flex-1 min-w-[150px]">
                    <input  
                      type="text"
                      name="position"
                      value={formik.values.position}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      POSITION
                    </span>
                    {formik.touched.position && formik.errors.position && (
                      <div className="text-red-400 text-xs">{formik.errors.position}</div>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">My Phone Number Is</p>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      PHONE
                    </span>
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-400 text-xs">{formik.errors.phone}</div>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">And Email</p>
                  <div className="relative flex-1 min-w-[150px]">
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      EMAIL
                    </span>
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-400 text-xs">{formik.errors.email}</div>
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">
                    I&apos;m Looking To Get Your
                  </p>
                </motion.div>

                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">Help With</p>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      name="service"
                      value={formik.values.service}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-2/3 border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                    />
                    <span className="absolute -top-2 md:-top-3 lg:-top-5 left-0 text-xs text-gray-500 font-poppins">
                      REQUEST
                    </span>
                    {formik.touched.service && formik.errors.service && (
                      <div className="text-red-400 text-xs">{formik.errors.service}</div>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-baseline">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300">Message</p>
                  <div className="relative flex-1">
                    <textarea
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full border-b border-gray-400 pb-1 bg-transparent focus:outline-none focus:border-gray-800"
                      rows={2}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-400 text-xs">{formik.errors.message}</div>
                    )}
                  </div>
                </motion.div>

                <div
                  className={`${shakeTrigger ? "sendButton sendShakeBtn" : "sendButton"} flex items-center justify-center cursor-pointer mx-auto !mt-20 mb-8`}
                  onClick={notify}
                >
                  <Image src={button} alt="button" className="w-32  sm:w-40 md:w-48 lg:w-80" />
                </div>
              </motion.form>
            </motion.div>

          </div>
        </motion.div>

        <div className="detailSection py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
          <div
            className="bg-image-2 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12"
          >
            <Image src={Ellipse1} className="Ellipse1" alt="Ellipse1" />
            <Image src={Ellipse2} className="Ellipse2" alt="Ellipse2" />
            <Image src={Ellipse} className="Ellipse" alt="Ellipse" />
            <div className="address1 w-full max-w-sm mx-auto">
              <Image
                className="w-[20%] sm:w-[18%] md:w-[20%] lg:w-[25%] z-10"
                src={location}
                alt=""
              />
              <Image
                src={box1}
                alt=""
                className="w-[80%] sm:w-[82%] md:w-[80%] 2xl:w-[75%] mt-[-30%]"
              />
              <p className="address-1 text-lg sm:text-xl md:text-2xl">KOCHI</p>
              <p className="address-2 text-sm sm:text-base md:text-lg">
                HOUSE NO:32/2517,
                <br /> AADWAITHAM <br />
                PJ ANTONY ROAD,
                <br /> PALARIVATTOM <br /> 682025, ERNAKULAM
              </p>
              <span
                className="cursor-pointer text-sm sm:text-xl font-poppins !text-[#726667] hover:text-[#AEEF24] transition-colors mt-2 font-semibold"
                onClick={() =>
                  goToMap(
                    10.005839291899525,
                    76.30648918170482,
                    "UCWB2aL39fWa5puk7"
                  )
                }
              >
                VIEW ON MAP
              </span>
            </div>
            <div className="address1 w-full max-w-sm mx-auto">
              <Image
                className="w-[20%] sm:w-[18%] md:w-[20%] lg:w-[25%] z-[1]"
                src={location}
                alt=""
              />
              <Image
                className="w-[80%] sm:w-[82%] md:w-[80%] 2xl:w-[75%] mt-[-30%]"
                src={box1}
                alt=""
              />
              <p className="address-1 text-lg sm:text-xl md:text-2xl">CALICUT</p>
              <p className="address-2 text-sm sm:text-base md:text-lg">
                FORTUNE
                <br /> BUSINESS PARK <br></br> 2ND FLOORCHEROOTY <br /> NAGAR
                ASOKAPURAM <br></br>CALICUT-673006
              </p>

              <span
                className="cursor-pointer text-sm sm:text-xl font-poppins !text-[#726667] hover:text-[#AEEF24] transition-colors mt-2 font-semibold"
                onClick={() =>
                  goToMap(
                    11.266042178544302,
                    75.78725737218082,
                    "C182cwgQbpVUp5SA9"
                  )
                }
              >
                VIEW ON MAP
              </span>
            </div>
          </div>

          <div className="phone-contact flex items-center justify-center">
            <div className="address1 contact-width w-full max-w-4xl mx-auto relative">
              <Image className="w-[25%] sm:w-[22%] md:w-[20%] lg:w-[18%] xl:w-[20%] z-[3] relative top-7 md:static" src={call} alt="call" />
              <Image
                className="w-full md:mt-[-23%] lg:mt-[-18%] 2xl:w-[80%]"
                src={box2}
                alt=""
              />

              <p className="address-1 mt-[3rem] md:mt-5 2xl:mt-10 text-lg sm:text-xl md:text-2xl">CONTACT</p>

              <div className="absolute text-xs sm:text-sm md:text-lg lg:text-xl text-center font-[500] bottom-0 left-0 md:left-[5%] 2xl:left-[10%] flex flex-col justify-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-[2rem]">
                <p className="font-semibold">KOCHI:</p>
                <a href="tel:+919037833933" className="hover:text-[#AEEF24] transition-colors">+91 9037&nbsp; 833 &nbsp; 933</a>
                <a href="tel:+919020442445" className="hover:text-[#AEEF24] transition-colors">+91 9020&nbsp; 442&nbsp; 445</a>
              </div>
              <div className="absolute text-xs sm:text-sm md:text-lg lg:text-xl text-center font-[500] bottom-0 right-0 md:right-[5%] 2xl:right-[10%] flex flex-col justify-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-[2rem]">
                <a href="tel:+914354353435" className="hover:text-[#AEEF24] transition-colors">
                  {" "}
                  CALICUT:
                  <br /> 0495&nbsp; 460&nbsp; 5549 <br></br> +91 9037&nbsp;
                  833&nbsp; 933 <br />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
        <div className="knowMoreLayer"></div>
      </div>

    </StarBlinkingPortal>
  );
}

export default Contact;
