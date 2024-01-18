"use client";

import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
import { IoArrowForward } from "react-icons/io5";

const ContactFormBtn = () => {
    const { pending } = useFormStatus();

    return (
        <Button
            rightIcon={<IoArrowForward />}
            colorScheme="teal"
            mt={4}
            type="submit"
            isLoading={pending}
            loadingText="Submitting"
        >
            Send
        </Button>
    );
};

export default ContactFormBtn;
