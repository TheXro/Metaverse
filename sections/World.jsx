"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variant={fadeIn("left", "tween", 0.2, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img
            src='/people-01.png'
            alt='people'
            className='w-full h-full object-cover'
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
