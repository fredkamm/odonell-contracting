import React, { useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";

const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Reach out to me directly",
    description: "email@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    subtitle: "Bucks County, Pennsylvania",
    description: "Serving clients througbout the Mid-Atlantic region.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      const response = await fetch(
        "getformlinkhere",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row pt-10">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
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
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-secondary-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
