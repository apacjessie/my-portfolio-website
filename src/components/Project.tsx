import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  pageBackgroundColor: string;
  projectName: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectImage: string;
}

type useCustomTransformType = {
  input: MotionValue<number>;
  inputRange: [number, number];
  outputRange: [number | string, number | string];
};

const useCustomTransform = ({
  input,
  inputRange,
  outputRange,
}: useCustomTransformType) => {
  return useTransform(input, inputRange, outputRange);
};

const Project = ({
  pageBackgroundColor,
  projectName,
  projectDescription,
  projectTechnologies,
  projectImage,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: pageBackgroundColor }}
      className={`h-screen w-full text-white  top-0 sticky
      justify-center px-5 pt-18 md:pt-20 lg:pt-0 md:px-20 
      gap-x-10 flex flex-col md:flex-row items-center`}
    >
      <div className="grid grid-col-1 grid-row-[1fr,2fr] lg:grid-cols-[1fr,2fr] gap-x-10 gap-y-5">
        <div className="flex flex-col">
          <div className="mb-5 overflow-hidden">
            <motion.h1
              style={{
                opacity: scrollYProgress,
                y: useCustomTransform({
                  input: scrollYProgress,
                  inputRange: [0, 1],
                  outputRange: [70, 0],
                }),
              }}
              className="text-5xl xl:text-7xl font-bold"
            >
              {projectName}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              style={{
                opacity: scrollYProgress,
                y: useCustomTransform({
                  input: scrollYProgress,
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              }}
              className="text-sm xl:text-base"
            >
              {projectDescription}
            </motion.p>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap overflow-y-hidden">
            {projectTechnologies &&
              projectTechnologies.map((technology, index) => (
                <motion.div
                  key={index}
                  className="translate-y-[70px]"
                  style={{
                    opacity: scrollYProgress,
                    y: useCustomTransform({
                      input: scrollYProgress,

                      inputRange: [0, 1],
                      outputRange: [70, 0],
                    }),
                  }}
                >
                  <p className="tech-text">{technology}</p>
                </motion.div>
              ))}
          </div>
        </div>
        <motion.img
          src={projectImage}
          style={{
            opacity: scrollYProgress,
            y: useCustomTransform({
              input: scrollYProgress,
              inputRange: [0, 1],
              outputRange: [200, 0],
            }),
            borderRadius: useCustomTransform({
              input: scrollYProgress,
              inputRange: [0, 1],
              outputRange: ["100%", "0%"],
            }),
          }}
          className="object-contain bg-blue-300/25 translate-y-[200px]"
        />
      </div>
    </section>
  );
};

export default Project;
