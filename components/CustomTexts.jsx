'use client';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2, textContainer } from "../utils/motion";
import styles from "../styles";

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}
  className={`font-normal ${textStyles} text-secondary-white text-[32px] `}
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

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView='show'
  viewport={{once: false, amount: 0.25}}
  className={`font-bold ${textStyles} text-white text-[40px] mt-[8px] md:text-[64px] md:mt-[16px]`}
  >
    {title}
  </motion.h2>
);
