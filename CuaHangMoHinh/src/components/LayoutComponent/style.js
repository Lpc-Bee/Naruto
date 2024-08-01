// src/components/Layout/style.js

import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;  // Allows the content area to take up available space
  padding: 20px;
  background-color: #efefef; // Same as background color for consistency
`;
