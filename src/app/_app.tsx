"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Toaster } from "sonner";

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <CacheProvider>
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
            <Toaster />
        </>
    );
};

export default App;
