import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const getInitial = (direction) => {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -50 };
    case "right":
      return { opacity: 0, x: 50 };
    case "top":
      return { opacity: 0, y: -30 };
    case "bottom":
    default:
      return { opacity: 0, y: 30 };
  }
};

const ScrollRevealSection = ({ children, direction = "bottom" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const initial = getInitial(direction);
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;
