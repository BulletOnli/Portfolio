"use client";

import { Button } from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";

const ContactFormBtn = () => {
    return (
        <Button
            rightIcon={<IoArrowForward />}
            colorScheme="teal"
            mt={4}
            type="submit"
        >
            Send
        </Button>
    );
};

export default ContactFormBtn;
