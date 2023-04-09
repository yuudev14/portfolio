import React from "react";
import { Variants, motion } from "framer-motion";

interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  info: Record<string, any>;
}
const Card: React.FC<CardProps> = ({ info, ...props }) => {
  return (
    <motion.div
      className="h-full rounded-[20px] overflow-hidden cursor-pointer"
      role="button"
      onClick={props.onClick}>
      <motion.figure className="h-full relative w-full">
        <motion.img
          className="card-image object-cover min-h-full"
          src={info.images}
          alt=""
          initial={false}
        />
      </motion.figure>
    </motion.div>
  );
};

export default Card;
