import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActive(link.title);
    setToggle(false);
    if (location.pathname !== "/") {
      navigate(`/#${link.id}`);
      return;
    }
    const el = document.getElementById(link.id);
    if (el) {
      const section = el.closest("section") || el;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const observers = [];
    navLinks.forEach(({ id, title }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(title);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      const target = el.closest("section") || el;
      obs.observe(target);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  return (
    <motion.nav
      animate={{ y: navVisible ? 0 : -80 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary/90 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="font-clash font-bold text-ink text-[20px] tracking-tight cursor-pointer">
            Theodore Xavier
          </p>
        </Link>

        <div className="hidden sm:flex items-center gap-10">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link)}
                  aria-current={active === link.title ? "page" : undefined}
                  className={`${
                    active === link.title ? "text-ink" : "text-cedar"
                  } font-satoshi font-medium text-[12px] uppercase tracking-[0.3em] cursor-pointer hover:text-ink transition-colors duration-300`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <button
            type="button"
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            aria-controls="mobile-nav"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              aria-hidden="true"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>
          <div
            id="mobile-nav"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 solid-card absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={active === link.title ? "page" : undefined}
                    className={`${
                      active === link.title ? "text-ink" : "text-cedar"
                    } font-satoshi font-medium text-[12px] uppercase tracking-[0.3em] cursor-pointer hover:text-ink transition-colors duration-300`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
