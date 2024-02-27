import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "../components/CursorBlinker";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg", "/hero/4.jpg"];
  const imageVariants = {
    hidden: { scale: 1, opacity: 0 },
    visible: { scale: [1, 1.2], opacity: 1 },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const textIndex = useMotionValue(0);
  const texts = ["encourage", "power", "streamline", "drive", "safeguard"];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 10, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, []);

  return (
    <>
      {/* // z-index -20 */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden -z-20">
        {/* z-index 0 */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage} // Add key to force re-render on image change
            src={images[currentImage]}
            alt="Placeholder"
            className="object-cover w-full h-screen transition-transform duration-[8000ms] ease-linear absolute"
            variants={imageVariants}
            transition={{
              delay: 0.3,
              duration: 5,
              type: "spring",
              opacity: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>

        {/* Preload next image before previous image?? */}
        {/* z-index -10 */}
        <AnimatePresence>
          <motion.img
            key={currentImage} // Add key to force re-render on image change
            src={images[currentImage]}
            alt="Placeholder"
            className="absolute object-cover w-full h-screen -z-10"
          />
        </AnimatePresence>
        <span className="absolute p-1 text-2xl transition-all text-amber-400 ">
          <motion.span className="inline">{displayText}</motion.span>
          <CursorBlinker />
        </span>
      </div>
    </>
  );
};

export default Hero;
