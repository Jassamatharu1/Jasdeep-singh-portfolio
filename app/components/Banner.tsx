"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Software Engineer",
    "UI/UX Designer",
    "JavaScript Developer",
    "ReactJS Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrowblack.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-black text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-900">Jasdeep Singh</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/assets/profileimagepurple.png"
                alt="Jasdeep Singh - Software Engineer and Designer"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/profileimageglow.png"
                alt="Jasdeep Singh - Software Engineer and Designer"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrowblack.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{
                  left: "-100px",
                  top: "-50px",
                  width: "auto",
                  height: "auto",
                }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-black text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-900">Jasdeep Singh</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> A Designer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-black leading-tight">
                Judges a book
                <br /> by its{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circleblack.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />
                  <span
                    className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-950 
                  bg-clip-text text-transparent"
                  >
                    cover
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-black/80">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-black font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-black/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a UI/UX designer at</span>
            <span className="flex items-center gap-2">
              <Image
                src="/logo/promaticslogo.svg"
                alt="promaticslogo"
                width={20}
                height={20}
                className="w-36"
              />
              {/* <span className="text-blue-400 font-semibold">WebHR,</span> */}
            </span>
          </p>
          <p className="text-lg text-black/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            A self-taught UI/UX designer passionate about crafting meaningful
            and delightful digital experiences. I focus on balancing user needs
            with business goals through thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}
