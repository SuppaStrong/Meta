import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GameModel from "../utils/GameModel";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiData from "../utils/ApiData";

const ContactUs = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    game: "",
    subject: "",
    message: "",
    privacyPolicy: false,
    ageConfirmation: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch game options
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await GameModel.getGames();
        setData(fetchedData);
      } catch (err) {
        setErrorMessage("Failed to load game options.");
      }
    };
    fetchData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.game) newErrors.game = "Please select a game or inquiry type.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.privacyPolicy)
      newErrors.privacyPolicy = "You must agree to the Privacy Policy.";
    if (!formData.ageConfirmation)
      newErrors.ageConfirmation = "You must confirm that you are over 18.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        ApiData.feedbackUrl,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ...`
          },
        }
      );
      if (response.data.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          game: "",
          subject: "",
          message: "",
          privacyPolicy: false,
          ageConfirmation: false,
        });
        setErrors({});
      }
    } catch (error) {
      setErrorMessage("Failed to send your message : " + error.message + ". Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
      <section className="tf-contact tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="flat-form">
                <h2 className="tf-title-heading ct style-2 mg-bt-12">Drop Us A Message</h2>
                <h5 className="sub-title ct style-1 pad-0-15">
                  For general inquiries, fill out the form below and we’ll get back with you shortly.
                </h5>
                <div className="form-inner">
                  <form id="contactform" onSubmit={handleSubmit} noValidate>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your Full Name *"
                    />
                    {errors.name && <p style={{ color: "red" }} className="error-message">{errors.name}</p>}
                    
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your Email Address *"
                    />
                    {errors.email && <p style={{ color: "red" }} className="error-message">{errors.email}</p>}
                    
                    <div className="row-form style-2">
                      <select
                        id="game"
                        name="game"
                        value={formData.game}
                        onChange={handleChange}
                      >
                        <option value="" disabled hidden>
                          - select an option -
                        </option>
                        <option value="General Inquiry">[ General Inquiry ]</option>
                        {data.map((item, index) => (
                          <option key={index} value={item.appName}>
                            {item.appName || "Unnamed Game"}
                          </option>
                        ))}
                      </select>
                      {errors.game && <p style={{ color: "red" }} className="error-message">{errors.game}</p>}
                    </div>
                    
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="Subject"
                    />
                    {errors.subject && <p style={{ color: "red" }} className="error-message">{errors.subject}</p>}
                    
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                    ></textarea>
                    {errors.message && <p style={{ color: "red" }} className="error-message">{errors.message}</p>}
                    
                    <div className="row-form style-1">
                      <label>
                        I agree to the{" "}
                        <Link to="/privacy-policy" style={{ color: "blue" }}>
                          Privacy Policy
                        </Link>
                        .
                        <input
                          type="checkbox"
                          name="privacyPolicy"
                          checked={formData.privacyPolicy}
                          onChange={handleChange}
                        />
                        <span className="btn-checkbox"></span>
                      </label>
                      {errors.privacyPolicy && <p style={{ color: "red" }} className="error-message">{errors.privacyPolicy}</p>}
                    </div>
                    
                    <div className="row-form style-1">
                      <label>
                        I confirm that I am over 18 years old.
                        <input
                          type="checkbox"
                          name="ageConfirmation"
                          checked={formData.ageConfirmation}
                          onChange={handleChange}
                        />
                        <span className="btn-checkbox"></span>
                      </label>
                      {errors.ageConfirmation && <p style={{ color: "red" }} className="error-message">{errors.ageConfirmation}</p>}
                    </div>
                    
                    <button className="submit">Send message</button>
                  </form>
                  {successMessage && <p className="success-message">{successMessage}</p>}
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
