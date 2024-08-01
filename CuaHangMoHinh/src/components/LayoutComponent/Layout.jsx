
import React from 'react';
import Footer from '../FooterComponent/Footer';  // Adjust the import path if needed
//import Header from '../HeaderComponent/Header'; // Assuming you have a Header component
import { LayoutContainer, MainContent } from './style'; // Add necessary styles

const Layout = ({ children }) => {
  return (
    <LayoutContainer>

      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
