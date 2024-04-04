"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/constants";
import { IconType } from "react-icons/lib";
import { SiGithub } from "react-icons/si";

export default function Projects () {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [7, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <section
      id = "projects"
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] z-[20]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        My Work <br /> My Projects
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Creating user-friendly digital solutions that combine sleek design with powerful features. 
      My focus on detail ensures intuitive experiences that captivate and delight users
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link?: string;
    thumbnail?: string;
    github? :string;
    tech? : IconType[];
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {product.thumbnail &&
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover absolute h-full w-full inset-0"
          alt={product.title}
          unoptimized
        />
      }
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      
        <div className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100'>
        <Link href={product.link ? product.link : "#projects"}> <h1 className='text-2xl font-bold pb-5'>{product.title}</h1></Link>
        <div className="flex items-center gap-5">
        {
          product.tech?.map((Icon, index) => {
          return <Icon key={index} className='w-8 h-8' />;
          })
        }
        </div>
        </div>
      
      {
        product.github &&
        <h2 className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          <Link href={product.github ? product.github : "#projects"} target="_blank"><SiGithub className="w-5 h-5 hover:scale-125 transition-all"/></Link>
        </h2>
      }
    </motion.div>
  );
};
