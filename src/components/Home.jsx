import Card from "./assets/Card.jsx";
import Sponsors from "./assets/Sponsors.jsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardBlack from "./assets/CardBlack.jsx";

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const heroLeftRefs = useRef([]);
  const heroRightRef = useRef();
  const sponsorsRef = useRef();
  const sponRef = useRef();
  const cardRef = useRef();

  useGSAP(() => {
    const tl1 = gsap.timeline();
    tl1.from(heroLeftRefs.current, {
      x: -100,
      stagger: 0.2,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(heroRightRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
    });

    const q = gsap.utils.selector(sponsorsRef);
    gsap.from(q(".sponsors"), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    });
    const spon = gsap.utils.selector(sponRef);
    gsap.from(spon(".sponRefe"), {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      scrollTrigger: {
        trigger: sponRef.current,
        start: "top 90%",
      },
    });

    const cardSelector = gsap.utils.selector(cardRef);
    gsap.from(cardSelector(".left"), {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        markers: true
      }
    });
    gsap.from(cardSelector(".right"), {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        markers: true
      }
    });
  });

  return (
    <home className="flex flex-col gap-8 px-4 mb-10">
      {/* Hero Section */}
      <section className="container mx-auto flex justify-between items-center">
        <div className="max-w-1/2 flex flex-col gap-4 ">
          <h1
            ref={(el) => (heroLeftRefs.current[0] = el)}
            className="text-secondary font-secondary text-md lg:text-xl"
          >
            Navigating the digital landscape for success
          </h1>
          <p
            ref={(el) => (heroLeftRefs.current[1] = el)}
            className="font-subtitle text-base max-w-4/5"
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing. and content creation.
          </p>
          <button
            ref={(el) => (heroLeftRefs.current[2] = el)}
            className="max-w-2/5 text-primary font-primary bg-secondary border-2 rounded-xl lg:py-3 lg:px-5 cursor-pointer"
          >
            Book a consultation
          </button>
        </div>
        <img
          ref={heroRightRef}
          src="https://img.freepik.com/premium-vector/marketing-illustration_878233-772.jpg"
          alt=""
          className="max-w-1/2"
        />
      </section>

      <section
        ref={sponsorsRef}
        className="container mx-auto flex justify-around items-center gap-2"
      >
        <Sponsors />
        <Sponsors img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" />
        <Sponsors img_url="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
        <Sponsors img_url="https://logo.svgcdn.com/l/notion-8x.png" />
        <Sponsors img_url="https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom-Logo.png" />
      </section>

      <section
        ref={sponRef}
        className="container mx-auto flex gap-8 justify-start items-center py-20"
      >
        <h1 className="sponRefe bg-lime text-secondary font-secondary text-lg w-fit px-2">
          Services
        </h1>
        <p className="sponRefe font-subtitle content-normal w-1/3">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
        <img src="../../assets/svgs/search.svg" alt="" />
      </section>

      <section ref={cardRef} className="container mx-auto flex flex-wrap gap-6">
        <Card />
        <CardBlack
          line_one="Pay per click"
          line_two="advertising"
          isBlack={true}
        />
        <Card
          line_one="Social media"
          line_two="marketing"
          isBlack={true}
          img_url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtw4EfxNV1y81muED3aDsFo1vlEqodogmwgQdqTfbohPHxbVXc"
        />
        <CardBlack
          line_one="E-mail"
          line_two="marketing"
          img_url="https://md-rejoyan-islam.github.io/positivus/assets/images/services/email-markiing.svg"
        />
      </section>

      <section className="container mx-auto flex justify-around items-center bg-light-gray rounded-3xl p-8">
        <div className="max-w-3/5 flex flex-col gap-8">
          <h1 className="text-secondary font-secondary text-md">
            Let's make things happen
          </h1>
          <p className="font-subtitle text-base max-w-4/5">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online:
          </p>
          <button className="max-w-2/5 text-primary font-primary bg-secondary border-2 rounded-xl py-3 px-5 cursor-pointer  ">
            Get your free proposal
          </button>
        </div>
        <img
          src="https://cdn.prod.website-files.com/6597153156f633c7e9fdc742/6597153156f633c7e9fdc78b_IllustrationCTA.svg"
          alt=""
          className="w-1/4"
        />
      </section>
    </home>
  );
}

export default Home;
