import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  //   const texts = [
  //     "Hello, world!",
  //     "Welcome to our website!",
  //     "Discover something amazing!",
  //     "Stay connected with us!",
  //     "Join our community!",
  //   ];
  //   const [currentText, setCurrentText] = useState("");
  //   const [textIndex, setTextIndex] = useState(0);

  //   useEffect(() => {
  //     let timer;
  //     const typingDelay = 100;
  //     const erasingDelay = 50;
  //     const waitingDelay = 1500;

  //     const typeText = () => {
  //       if (currentText === texts[textIndex]) {
  //         clearTimeout(timer);
  //         setTimeout(eraseText, waitingDelay);
  //       } else {
  //         setCurrentText((prevText) =>
  //           texts[textIndex].substring(0, prevText.length + 1)
  //         );
  //         timer = setTimeout(typeText, typingDelay);
  //       }
  //     };

  //     const eraseText = () => {
  //       if (currentText === "") {
  //         setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //         timer = setTimeout(clearText, waitingDelay);
  //       } else {
  //         setCurrentText((prevText) =>
  //           prevText.substring(0, prevText.length - 1)
  //         );
  //         timer = setTimeout(eraseText, erasingDelay);
  //       }
  //     };

  //     const clearText = () => {
  //       setCurrentText("");
  //       timer = setTimeout(typeText, typingDelay);
  //     };

  //     timer = setTimeout(typeText, typingDelay);

  //     return () => clearTimeout(timer);
  //   }, [currentText, textIndex, texts]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl text-center">
        {/* <span>{currentText}</span> */}
      </h1>
    </div>
  );
};

export default TypingAnimation;
