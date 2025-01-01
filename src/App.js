import React from "react";
import Header from "./Components/header";
import { Button, Container } from "@mui/material";
import Form from "./Components/form"


function App() {
  return (
    <Container>
      <Header />
      <Button variant="contained" color="success">
        Oprime me
      </Button>
      <Form /> 
    </Container>
      
    
  );
}

export default App;
