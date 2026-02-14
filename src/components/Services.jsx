import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="About Thirdeye"
          text="At Thirdeye, we believe that vision loss shouldn't limit anyone's ability to navigate the world with confidence and independence. Our mission is to bridge the gap between traditional mobility aids and modern technology."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] animate-fade-in-left hover:shadow-lg hover:shadow-color-1/10 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right hover:scale-105 transition-transform duration-500"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Our Mission</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                At Thirdeye, we believe that vision loss shouldn't limit anyone's ability to navigate the world with confidence and independence. Our mission is to bridge the gap between traditional mobility aids and modern technology.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden animate-fade-in-left hover:shadow-lg hover:shadow-color-1/10 transition-all duration-500">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                
                
              </div>

              
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] animate-fade-in-right hover:shadow-lg hover:shadow-color-1/10 transition-all duration-500">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Braille for True Accessibility</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                 The THIRDEYE Smart Stick manual is available in Braille to ensure complete independence for visually impaired users. Instead of relying on external help, users can read and understand the device’s features on their own.

By providing instructions in Braille, the product becomes truly accessible, inclusive, and user-centered. It empowers users to confidently operate essential functions such as navigation, SOS alerts, and obstacle detection without assistance.
                </p>

                
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                
                
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
