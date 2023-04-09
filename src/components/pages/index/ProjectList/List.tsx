import React from "react";
import { Variants, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Card from "@/components/common/Card";
import { useRouter } from "next/router";

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

  const router = useRouter();

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
        <Card
          info={proj}
          onClick={() =>
            router.push(
              {
                pathname: "/",
                query: {
                  project: index,
                },
              },
              undefined,
              { scroll: false }
            )
          }
        />
      </motion.li>
    </AnimatePresence>
  );
};

export default List;
