"use client";
 import { cn } from "../../lib/utils.js";
import {  motion} from "framer-motion";
import React from "react";



export const Highlight = ({
  children,
  className
}) => {
  return (
    (<motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-800 dark:from-indigo-500 dark:to-purple-600`,
        className
      )}>
      {children}
    </motion.span>)
  );
};
