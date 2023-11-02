import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  margin: 0 auto; 
`;

export const ProfileImage = styled.img`
  width: 300px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
  border-radius: 50%; /* Make it round */
  object-fit: cover; /* Fit the image inside the container */
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const NewHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const NewSectionText = styled.div`
  width: 50%; /* Adjust the width as needed */
`;
