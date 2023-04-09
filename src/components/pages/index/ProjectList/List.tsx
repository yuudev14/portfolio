import React from "react";
import { Variants, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface ListProps {
  proj: Record<string, any>;
  index: number;
}

const List: React.FC<ListProps> = ({ proj, index }) => {
  const isOdd = index % 2 !== 0;
  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isOdd ? -1000 : 1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * index,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.li
        variants={initialVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", duration: 0.1 }}
        className={`flex w-full card ${
          isOdd ? "justify-start" : "justify-end"
        }`}>
        <motion.div className="h-full">
          <motion.figure className="h-full">
            <motion.img
              className="card-image object-cover min-h-full"
              src={proj.images}
              alt=""
              initial={false}
            />
          </motion.figure>
        </motion.div>
      </motion.li>
    </AnimatePresence>
  );
};

export default List;
