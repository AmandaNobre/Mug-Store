import React from "react";
import { Container } from "react-bootstrap";

import TheContent from "./TheContent";
import TheHeader from "./TheHeader";

const TheLayout = () => {
  return (
    <>
      <TheHeader />
      <Container>
        <TheContent />
      </Container>
    </>
  );
};

export default TheLayout;
