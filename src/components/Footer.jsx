import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Footer() {
  const logoRef = useRef();
  const menuRef = useRef();
  const socialRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const footerRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      logoRef.current,
      {
        x: -25,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 85%",
        },
      },
      "nav"
    );
    tl.from(
      menuRef.current,
      {
        y: -25,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 85%",
        },
      },
      "nav"
    );
    tl.from(
      socialRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 85%",
        },
      },
      "nav"
    );
    tl.from(
      leftRef.current,
      {
        x: -50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
        },
      },
      "nava"
    );
    tl.from(
      rightRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
        },
      },
      "nava"
    );
    tl.from(footerRef.current, {
      y: -15,
      opacity: 0,
      duration: 0.4,
    });
  });
  return (
    <footer className="container mx-auto bg-secondary text-primary  pt-2 px-4 rounded-t-xl ">
      <section className="w-full flex justify-between items-center gap-60">
        <nav ref={logoRef} className="flex items-center p-4  gap-2">
          <i class="ri-gemini-fill text-2xl rotate-60"></i>
          <h1 className="font-secondary text-2xl font-bold">WizardZ</h1>
        </nav>
        <ul
          ref={menuRef}
          className="font-primary container mx-auto flex items-center justify-between gap-4 p-2"
        >
          <li>About Us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>

        <ul ref={socialRef} className=" lg:flex lg:justify-between gap-2 ">
          <li>
            <i class="ri-linkedin-fill text-2xl "></i>
          </li>
          <li>
            <i class="ri-github-fill text-2xl"></i>
          </li>
        </ul>
      </section>
      <section className="container mx-auto flex justify-between items-center py-8 px-5">
        <h1
          ref={leftRef}
          className="text-primary font-secondary text-4xl container"
        >
          Want to connect with us?
        </h1>
        <div
          ref={rightRef}
          className="container flex justify-between gap-3 rounded-xl py-8 px-5 bg-gray"
        >
          <input
            type="text"
            placeholder="Email"
            className="container border rounded-xl py-3 px-5"
          />
          <button className="container text-secondary font-secondary bg-lime border-2 rounded-xl py-3 px-5">
            Subscribe to news
          </button>
        </div>
      </section>
      <hr />
      <p
        ref={footerRef}
        className="container mx-auto  py-3 px-5 text-center text-primary opacity-80 font-primary text-tiny"
      >
        Copyright © 2025 WizardZ Digital Marketing. Read{" "}
        <a href="http://" target="_blank" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
