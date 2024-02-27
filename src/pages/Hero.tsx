import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  return (
    // z-index -20
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
            duration: 4,
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
          // variants={imageVariants}
          // transition={{
          //   delay: 0.5,
          //   duration: 4,
          //   type: "spring",
          //   opacity: {
          //     duration: 0.7,
          //     ease: "easeInOut",
          //   },
          // }}
          // initial="hidden"
          // animate="visible"
          // exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Hero;
