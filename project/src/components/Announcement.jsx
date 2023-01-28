import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #2e2e2e;
  color: #8f8f8f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 500;
  padding: 3px;
  border-bottom: 2px solid #3d3d3d;
  letter-spacing: 0.2rem;
`;

const Announcement = () => {
  return (
    <Container className="font-style">
      Top 9 Allergen free bakery *VEGAN*
      <hr />
    </Container>
  );
};

export default Announcement;
