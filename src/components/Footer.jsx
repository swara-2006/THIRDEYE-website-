import React from "react";
import Section from "./Section";
import { socials, teamMembers } from "../constants";
import { grid } from "../assets";

const Footer = () => {
  return (
    <>
      {/* Team Section */}
      <Section className="!px-0 !py-20">
        <div className="container">
          <h2 className="h2 text-center mb-12 md:mb-16 animate-fade-in">Meet Our Team</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="p-0.25 rounded-[2rem] bg-n-6 animate-fade-in-up hover:shadow-lg hover:shadow-color-1/20 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 bg-n-8 rounded-[1.9375rem] overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img
                      className="w-full h-full object-cover"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  
                  <div className="relative z-1">
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-n-7 rounded-full border border-n-6 flex items-center justify-center overflow-hidden">
                        {member.imageUrl ? (
                          <img 
                            src={member.imageUrl} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-3xl font-bold text-color-1">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h5 className="h5 mb-2 text-center">{member.name}</h5>
                    <p className="body-2 text-n-3 text-center mb-4 min-h-[3rem]">
                      {member.degree}
                    </p>
                    <div className="pt-4 border-t border-n-6">
                      <p className="caption text-n-4 text-center">
                        {member.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer Bar */}
      <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block animate-fade-in">
            © {new Date().getFullYear()}. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-all duration-300 hover:bg-n-6 hover:scale-110 animate-fade-in-up transform"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Footer;
