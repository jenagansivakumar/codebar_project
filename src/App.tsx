import "./index.css";
import Nmap from "./Components/Nmap";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Nmap />
      </ChakraProvider>
    </>
  );
}

export default App;
