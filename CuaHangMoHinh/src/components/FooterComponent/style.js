import styled from 'styled-components';

// Container for the footer
export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: #ffffff;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

// Content within the footer
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
`;

// Each column in the footer
export const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px;
  margin: 10px;
`;

// Title for each column
export const FooterTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #f1f1f1;
`;

// Links in the footer
export const FooterLink = styled.a`
  display: block;
  color: #b0b0b0;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

// Container for social media icons
export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

// Social media icons
export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;
