import nodemailer from "nodemailer";

const transforter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
});

type SendEmailProps = {
    email: string;
    message: string;
    name: string;
};

export const sendEmail = async ({ email, message, name }: SendEmailProps) => {
    const info = await transforter.sendMail({
        from: email,
        to: "bulletlangto@gmail.com",
        subject: `Inquiry - ${name}`,
        html: `<div>${message}</div>`,
    });
};
