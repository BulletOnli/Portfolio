"use server";
import { sendEmail } from "@/utils/nodemailer";

export const submitForm = async (formData: FormData) => {
  const { name, email, message } = Object.fromEntries(formData);

  const mappedData = {
    name: name.toString(),
    email: email.toString(),
    message: message.toString(),
  };

  await sendEmail(mappedData);
};
