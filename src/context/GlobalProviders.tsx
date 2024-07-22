"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
      <Toaster />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default GlobalProviders;
