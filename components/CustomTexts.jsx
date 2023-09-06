'use client';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2, textContainer } from "../utils/motion";
import styles from "../styles";

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}
  className={`font-normal ${textStyles} text-secondary-white text-[42px]`}
  >
  {
    Array.from(title).map((letter, index) => (
      <motion.span
        key={index}
        variants={textVariant2}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  }
  </motion.p>
);

export const TitleText = (title, textStyles) => (
  <h2>Title Text</h2>
);
