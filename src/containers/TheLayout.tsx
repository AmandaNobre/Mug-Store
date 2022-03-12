import { Container } from "react-bootstrap";
import TheContent from "./TheContent";

const TheLayout = () => {
  return (
    <div>
      <Container>
        <TheContent />
      </Container>
    </div>
  );
};

export default TheLayout;
