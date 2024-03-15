import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center text-center mt-6 lg:mt-0">
      <h1 className="text-3xl font-semibold mb-2 mt-[4rem]">Contact me</h1>
      <p className="text-[#9197A4]">Want to order a project?</p>
      <p className="text-[#9197A4]">Or do you just want to stay in touch?</p>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
