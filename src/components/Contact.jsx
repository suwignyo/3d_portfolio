import { motion } from "framer-motion";

import { styles } from "../styles";
import { contacts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ReactParallaxTilt from "react-parallax-tilt";

const ContactCard = ({ index, title, icon, link }) => {
  return (
    <ReactParallaxTilt className="xs:w-[150px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <a href={link} target="_blank">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </a>
      </motion.div>
    </ReactParallaxTilt>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Contact</p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10 justify-start">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.title} index={index} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
