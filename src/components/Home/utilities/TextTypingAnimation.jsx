import React, { useEffect, useState } from "react";

const TextTypingAnimation = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Welcome to My Website!",
    "I am a Web Developer.",
    "Let's build something amazing!",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      let updatedText = phrases[currentPhraseIndex].slice(0, currentCharIndex);
      if (!isDeleting) {
        setText(updatedText);
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        setText(updatedText);
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="flex text-black dark:text-white">
      <h1 className=" text-lg">{text}|</h1>
    </div>
  );
};

export default TextTypingAnimation;
