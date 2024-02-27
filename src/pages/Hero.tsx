import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg", "/hero/4.jpg"];

  const imageVariants = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.2] },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage} // Add key to force re-render on image change
          src={images[currentImage]}
          alt="Placeholder"
          className="object-cover w-full h-screen transition-transform duration-[8000ms] ease-linear absolute"
          variants={imageVariants}
          transition={{
            duration: 4,
            opacity: {
              duration: 1,
              ease: "easeIn",
            },
          }}
          initial="hidden"
          animate="visible"
          // exit={{ opacity: 0 }}
        />

        {/* Preload next image before previous image?? */}
        {/* <motion.img
          key={currentImage} 
          src={images[(currentImage + 1) % images.length]}
          alt="Placeholder"
          className="object-cover w-full h-screen transition-transform duration-[8000ms] ease-linear absolute"
          variants={imageVariants}
          transition={{
            duration: 4,
            opacity: {
              duration: 1,
              ease: "easeIn",
            },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        /> */}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
