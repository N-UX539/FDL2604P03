import React, { Children, useState } from "react";
import webLogo from "./assets/webLogo.png";
import NavLink from "./components/NavLink";
import Button from "./components/Button";
import menuIcon from "./assets/menuIcon.svg";
import heroImage from "./assets/hero-image.png";
import Service from "./components/Service";
import ServiceImg01 from "./assets/ServiceImg01.png";
import ServiceImg02 from "./assets/ServiceImg02.png";
import ServiceImg03 from "./assets/ServiceImg03.png";
import DotIllustration from "./assets/DotIllustration.png";
import Testimonimonial from "./components/Testimonial";
import TestimonialAvatar from "./assets/testimonial-avatar.png";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="header-section" className="header-section mb-(--navheight)">
        <section
          id="Navigation_Bar"
          className="w-full h-(--navheight) bg-[rgb(244,247,250)] fixed top-0 inset-x-0 z-50"
        >
          <div className="relative navbar lg:container mx-auto px-2 h-full flex items-center justify-between">
            <div className="flex gap-[clamp(31px,3vw,50px)] items-center justify-center">
              <div className="nav-logo text-(--black) tracking-[-0.01em]">
                <a
                  href="./index.html"
                  className="font-rubik font-bold text-[24px]"
                >
                  {/* <img src={webLogo} alt="Brainwave" className="h-full" /> */}
                  <span>Brainwave.io</span>
                </a>
              </div>
              <div
                className={`nav-menu flex max-lg:flex-col gap-[clamp(5px,1.5vw,26px)] font-family max-lg:fixed max-lg:bg-(--white) max-lg:shadow-(--box-shadow) max-lg:inset-y-0 max-lg:left-0 max-lg:w-70 max-lg:rounded-2xl max-lg:px-1.5 max-lg:overflow-y-auto transition-transform duration-400 z-5 ${isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}
              >
                <a
                  id="sidebarLogo"
                  href="./index.html"
                  className="sidebar-logo lg:hidden m-4 mt-10 font-rubik font-bold text-[30px] text-(--black) tracking-[-0.01em]"
                >
                  {/* <img src={webLogo} alt="Brainwave" className="w-45 h-auto" /> */}
                  Brainwave.io
                </a>
                <NavLink href="#">Demos</NavLink>
                <NavLink href="#">Pages</NavLink>
                <NavLink href="#">Support</NavLink>
                <NavLink href="#">Contact</NavLink>
              </div>
            </div>
            <Button
              href="#"
              className="text-[clamp(11px,1.175vw,15px)] max-lg:hidden"
            >
              Get started a project
            </Button>
            <div
              id="toggleBtn"
              className="cursor-pointer lg:hidden mr-2"
              tabIndex={0}
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setIsOpen(false)}
            >
              <img src={menuIcon} alt="" />
            </div>
          </div>
        </section>
      </header>
      <main>
        <section
          id="hero-section"
          className="hero-section bg-[rgb(244,247,250)] py-[clamp(25px,5vw,95px)]"
        >
          <div className="lg:container mx-auto px-2 flex flex-wrap-reverse justify-between max-sm:justify-center items-center">
            <div className="hero-text font-family w-[55%] max-sm:w-full max-sm:mt-10 max-sm:text-center">
              <strong className="font-bold uppercase text-[clamp(10px,1vw,13px)] tracking-[0.13em] text-(--red)">
                Let’s shift your business
              </strong>
              <h1 className="font-bold text-[clamp(34px,4vw,60px)] leading-[108%] tracking-[-0.03em] text-(--black) my-[clamp(15px,2vw,25px)]">
                Shift your business <br /> fast with Shade Pro.
              </h1>
              <p className="font-normal text-[clamp(14px,1.5vw,19px)] leading-[168%] tracking-[-0.01em] text-[rgba(22,28,45,0.7)] mb-[clamp(25px,2vw,35px)] w-full">
                With lots of unique blocks, you can easily build a page{" "}
                <br className="max-md:hidden" />
                without coding. Build your next consultancy website within{" "}
                <br className="max-md:hidden" />
                few minutes.
              </p>
              <Button href="#">Get started a project</Button>
            </div>
            <div className="hero-image w-[45%] max-w-[clamp(300px,35vw,460px)] max-sm:w-full flex justify-end">
              <img src={heroImage} alt="" className="max-w-full h-auto" />
            </div>
          </div>
        </section>
        <section
          id="service-section"
          className="service-section lg:container mx-auto px-2 font-family text-center mt-[clamp(57px,5vw,117px)] w-full"
        >
          <strong className="uppercase font-bold text-[clamp(10px,1vw,13px)] tracking-[0.13em] text-(--red)">
            Our Services
          </strong>
          <h2 className="font-bold text-[clamp(20.5px,3.25vw,36px)] leading-[133%] tracking-[-0.03em] text-(--black) mt-[clamp(15px,2vw,25px)] mb-[clamp(48px,2vw,80px)]">
            We provide great services for our <br /> customers based on needs
          </h2>
          <div className="service-list flex flex-wrap items-center justify-center gap-[clamp(14px,1.5vw,24px)]">
            <Service
              href="#"
              bgColor="bg-[#68D585]"
              ImgSrc={ServiceImg01}
              title="Graphic Design"
              description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            />
            <Service
              href="#"
              bgColor="bg-[#473BF0]"
              ImgSrc={ServiceImg02}
              title="Web Development"
              description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            />
            <Service
              href="#"
              bgColor="bg-[#F64B4B]"
              ImgSrc={ServiceImg03}
              title="Content Writing"
              description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            />
          </div>
        </section>
        <section
          id="Testimonial"
          className="testimonial mx-auto px-3 mt-30"
        >
          <Testimonimonial
            ImgSrc={TestimonialAvatar}
            Feedback="“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”"
            UserName="Franklin Hicks"
            UserTitle="Web Developer"
          />
        </section>
      </main>
    </>
  );
}

export default App;
