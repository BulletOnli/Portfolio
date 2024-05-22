"use client";
import { toast } from "sonner";
import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import ContactFormBtn from "./ContactFormBtn";
import { submitForm } from "../_actions/action";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await submitForm(formData);
        formRef?.current?.reset();
        toast.success("Message Sent!");
      }}
    >
      <div className="w-full lg:w-[40rem] flex flex-col items-center border p-6 mt-10 border-[#1F2937]  rounded-xl">
        <div className="w-full flex flex-col lg:flex-row gap-2 items-center">
          <Flex w="full" direction="column">
            <FormLabel>Name</FormLabel>
            <Input
              required
              type="text"
              name="name"
              placeholder="John Doe"
              borderColor={"#1F2937"}
              fontSize={"sm"}
              autoComplete="off"
            />
          </Flex>
          <Flex w="full" direction="column">
            <FormLabel>Email Address</FormLabel>
            <Input
              required
              type="email"
              name="email"
              placeholder="Johndoe@email.com"
              borderColor={"#1F2937"}
              fontSize={"sm"}
              autoComplete="off"
            />
          </Flex>
        </div>
        <Flex w="full" direction="column" mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            required
            placeholder="Hello!..."
            borderColor={"#1F2937"}
            fontSize={"sm"}
            name="message"
          />
        </Flex>
        <Flex w="full" justifyContent="end">
          <ContactFormBtn />
        </Flex>
      </div>
    </form>
  );
};

export default ContactForm;
