import React from "react";
import Header from "./Components/header";
import { Button, Container } from "@mui/material";


function App() {
  return (
    <Container>
      <Header />
      <Button variant="contained" color="success">
        Oprime me
      </Button>
    </Container>
      
    
  );
}

export default App;
