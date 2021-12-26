import SinglePageApp from "./components/navigation/SinglePageApp";
import { Container } from "@mui/material";
import NavBarComp from "./components/navComp/NavBarComp";

function App() {
  return (
    <div className='App'>
      <Container>
        <SinglePageApp />
      </Container>
    </div>
  );
}

export default App;
