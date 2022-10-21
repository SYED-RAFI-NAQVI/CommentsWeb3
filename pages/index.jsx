import { useEffect, useState } from "react";
import { ChakraProvider, Box, Heading, Textarea } from "@chakra-ui/react";
import { Toaster, toast } from "react-hot-toast";
import theme from "../theme";
// import { Provider as WagmiProvider } from "wagmi";
import { ethers } from "ethers";

import AddComments from "../components/AddComments";
import Comments from "../components/Comments";

const App = () => {
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setProvider(provider);
    setSigner(signer);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box p={8} maxW="600px" minW="320px" m="0 auto">
        <Comments signer={signer} />
        <AddComments signer={signer} />
        <Toaster position="bottom-right" />
      </Box>
    </ChakraProvider>
  );
};

export default App;
