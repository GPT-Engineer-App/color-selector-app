import { useState, useEffect } from "react";
import { Container, Text, VStack, Button, Input } from "@chakra-ui/react";

const Index = () => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      setColor(savedColor);
      document.body.style.backgroundColor = savedColor;
    }
  }, []);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const applyColor = () => {
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Select a Background Color</Text>
        <Input type="color" value={color} onChange={handleColorChange} />
        <Button onClick={applyColor} colorScheme="blue">Apply Color</Button>
      </VStack>
    </Container>
  );
};

export default Index;