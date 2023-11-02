import React, { useState, useEffect } from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  PopupContent,
  PopupOverlay,
  CloseButton
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [scrolledPastProjects, setScrolledPastProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const rect = projectsSection.getBoundingClientRect();
      const isScrolledPast = rect.top < window.innerHeight / 4 && rect.bottom >= 0;
      setScrolledPastProjects(isScrolledPast);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.transition = 'background-position 5s ease';

    if (scrolledPastProjects) {
      bodyElement.style.background = 'linear-gradient(315deg, #001f3f 0%, #003f7f 50%, #000d3b 74%)';
      bodyElement.style.backgroundSize = '400% 400%';
      bodyElement.style.backgroundPosition = '100% 100%';
    } else {
      bodyElement.style.background = 'linear-gradient(315deg, #001f3f 0%, #003f7f 50%, #000d3b 74%)';
      bodyElement.style.backgroundSize = '400% 400%';
      bodyElement.style.backgroundPosition = '0% 0%';
    }

    return () => {
      bodyElement.style.transition = '';
    };
  }, [scrolledPastProjects]);

  // Function to handle clicking the "Details" button
 

  return (
    <Section nopadding id="projects">
  <SectionDivider />
  <SectionTitle main>My Favorite Projects</SectionTitle>
  <GridContainer>
    {projects.map((p, i) => {
      return (
        <BlogCard
          key={i}
          style={{
            transition: 'box-shadow 2s ease 1s',
            boxShadow: scrolledPastProjects
              ? (window.innerWidth <= 768
                  ? '15px -15px 5px rgba(0, 0, 0, 0.8)' // For smaller screens
                  : '15px -15px 10px rgba(0, 0, 0, 0.8)') // For larger screens and scrolledPastProjects
              : '5px 5px 5px rgba(0, 0, 0, 0.4)',
          }}
        > 
          <Img src={p.image} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.code} target="blank">
              Code
            </ExternalLinks>
            {p.visit && ( // Conditionally render the "Visit" button if the 'visit' property exists
              <ExternalLinks href={p.visit} target="blank">
                Visit
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      );
    })}
  </GridContainer>
</Section>
  );
};

export default Projects;
