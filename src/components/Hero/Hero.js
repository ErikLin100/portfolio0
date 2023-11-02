import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HeroContainer, ProfileImage, LeftSection } from './HeroStyles';
import { images } from '../../constants/constants';

const Hero = (props) => (
  <>
    <Section row nopadding id='hero'>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <HeroContainer>
          <SectionText>
            Hello! My name is Erik, and I'm a software dev. student at Haaga-Helia University of Applied Sciences. Currently, I'm looking for an internship-level position to complete my studies. Below are some of the projects I've worked on.
          </SectionText>
          
        </HeroContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;