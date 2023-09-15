"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex felx-col`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| The World" textStyles="text-center"/>  
      <TitleText title={<>The World of Metaversus</>} textStyles='text-center' />
    </motion.div>
  </section>
);

export default World;
