import React from "react";
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">Sobre mi</h2>
            <h3 className="h3 mb-4">Soy un desarrollador Freelancer con poca experiencia pero con muchas ganas de aprender.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corporis corrupti reprehenderit laborum ex tenetur ipsum enim nesciunt hic esse.</p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={13} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2pz]">Años de <br />Experiencia</div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={15} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2pz]">Proyectos <br />Completados</div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={10} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2pz]">Clientes <br />Satisfechos</div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contacto</button>
              <a href="https://onedrive.live.com/?cid=7143E29F2F66C927&id=7143E29F2F66C927%2147256&parId=root&o=OneUp" className="text-gradient btn-link">
                Mi Portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
