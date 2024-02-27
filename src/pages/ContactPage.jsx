import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin } from "react-icons/fi";

const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Reach out directly",
    phone: "(610) 348-4448",
    description: "tjodhomeimprovement@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    subtitle: "Bucks County, Pennsylvania",
    description: "Serving clients throughout Bucks and Montgomery County.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.phone ||
      !formData.message
    ) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      await emailjs.send(
        "service_v5c8iy8", // replace with your service ID
        "template_z6yv3d7", // replace with your template ID
        formData,
        { publicKey: "gXnCJ306Ekx2TISpY" }
      );

      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <section className="section bg-secondary">
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Information
          </h2>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row pt-10">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 mx-auto lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, phone, description } = item;
              return (
                <div
                  className="flex flex-col lg:flex-row gap-x-4 sm:flex-row"
                  key={index}
                >
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{phone}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={handleSubmit}
          >
            <div className="block md:flex gap-8">
              <input
                className="input bg-tertiary rounded mb-8 md:mb-0"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className="input bg-tertiary rounded"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="block md:flex gap-8">
              <input
                className="input bg-tertiary rounded mb-8 md:mb-0"
                type="text"
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                className="input bg-tertiary rounded"
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <textarea
              className="textarea bg-tertiary rounded"
              name="message"
              placeholder="Please provide a detailed description of what your looking to get done here..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="btn btn-lg bg-buttons text-black hover:bg-tertiary hover:border-white hover:text-paragraph rounded">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
