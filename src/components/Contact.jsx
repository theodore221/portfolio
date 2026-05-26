import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = "theodore.xavier@hotmail.com";

const inputClass =
  "w-full bg-transparent border-0 border-b border-paper-border py-3 font-satoshi font-normal text-[16px] text-ink placeholder-cedar/50 focus:outline-none focus:border-cedar transition-colors duration-500";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Theodore",
          from_email: form.email,
          to_email: CONTACT_EMAIL,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <hr className="section-rule" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.75)}
          className="flex flex-col gap-8"
        >
          <p className="font-clash font-semibold text-ink text-[26px] leading-[1.25] italic tracking-[-0.01em] text-balance max-w-[28ch]">
            Whether you have a project in mind, a role to discuss, or simply
            want to say hello — I'd be glad to hear from you.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.3em] border-b border-cedar/40 pb-1 w-fit hover:text-ink hover:border-ink transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/theodorexavier"
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.3em] border-b border-cedar/40 pb-1 w-fit hover:text-ink hover:border-ink transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/theodore221"
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.3em] border-b border-cedar/40 pb-1 w-fit hover:text-ink hover:border-ink transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-paper-border/60 flex flex-col gap-2">
            <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]">
              Based in
            </p>
            <p className="font-satoshi font-normal text-ink text-[15px]">
              Melbourne, Australia
            </p>
            <p className="font-satoshi font-normal text-secondary text-[13px] leading-[1.6]">
              Typical reply within 24 hours · Available for remote
              engagements worldwide
            </p>
          </div>
        </motion.div>

        {/* Right column — form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn("left", "tween", 0.2, 0.75)}
          className="flex flex-col gap-8"
        >
          <div>
            <label className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] block mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or enquiry"
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <button
              type="submit"
              disabled={loading}
              className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.3em] border-b border-ink pb-0.5 hover:text-cedar hover:border-cedar transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Sending…" : "Send Message →"}
            </button>

            {status === "sent" && (
              <p className="font-satoshi font-normal text-flame text-[14px]">
                Message sent. Thank you.
              </p>
            )}
            {status === "error" && (
              <p className="font-satoshi font-normal text-[#c0392b] text-[14px]">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
