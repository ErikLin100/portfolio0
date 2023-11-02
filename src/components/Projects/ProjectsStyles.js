import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define a CSS for the body when the popup is open
const bodyStyles = css`
  position: fixed;
  overflow: hidden; /* Disable scrolling on the body */
  width: 100%; /* Fix the body width to prevent shifting */
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in;
`;

// Styled component for the popup content
// Styled component for the popup content
export const PopupContent = styled.div`
  background: #333; /* Darker background color */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 40%; /* Fixed width for the content box */
  max-height: 80%;
  overflow-y: auto; /* Enable scrolling within the popup if needed */
  text-align: left; /* Left-align the text */
  color: #fff; /* Text color */
  word-wrap: break-word; /* Allow text to wrap onto new lines */
`;


// Styled component for the close button
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #fff; /* Adjust the color as needed */
`;

// Style the body when the popup is open
export const PopupOpenBody = css`
  ${bodyStyles}
`;

// Style the body when the popup is closed
export const PopupClosedBody = css`
  position: relative;
  overflow: auto; /* Re-enable scrolling on the body */
  width: auto;
`;
export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;    
  border-top-right-radius: 10px;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5rem;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4); /* Initial shadow with increased intensity */
  text-align: center;
  width: 400px;
  background: rgba(0, 0, 128, 0.3);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;


  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;


export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`