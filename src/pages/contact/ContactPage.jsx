/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./contactStyles.scss";
import { slideIn } from "../../utils/motion";
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import email from "../../assets/email.png";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EmailID,
        import.meta.env.VITE_APP_EmailTemplate,
        {
          from_name: form.name,
          to_name: "Lokesh Pereiro",
          from_email: form.email,
          to_email: "lokeshpereiromf@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_PublicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact unselectable">
      <motion.div
        className="contact__form"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className="subtitle">Get in touch</p>
        <h2 className="title">Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
            />
          </label>
          <label>
            <span>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
            />
          </label>
          <label>
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
            />
          </label>

          <motion.button
            whileTap={{ scale: 0.9 }}
            animate={{ transition: 2 }}
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact__emailImg"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <motion.div
          whileHover={{ scale: 0.97 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
        >
          <img src={email} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "contact");
