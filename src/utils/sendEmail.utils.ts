import { createTransport } from "nodemailer";
import * as i from "../interfaces";
import "dotenv/config";
import Mailgen from "mailgen";

export const sendEmail = async ({ to, subject, text }: i.SendEmailRequest) => {
	const transporter = createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	await transporter
		.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject,
			html: `
            <h1> ${subject} </h1>
            <p> ${text} </p>
        `,
		})
		.then(() => {
			console.log("Email sent");
		})
		.catch((err) => {
			console.log(err);
			throw new Error("Error sending email");
		});
};

export const resetPasswordTemplate = (
	userEmail: string,
	userName: string,
	protocol: string,
	host: string,
	resetToken: string
) => {
	const mailGenerator = new Mailgen({
		theme: "salted",
		product: {
			name: "Kenzie Motors",
			link: `${protocol}://${host}`,
		},
	});

	const email = {
		body: {
			name: userName,
			intro: "Você recebeu este email porque uma solicitação de redefinição de senha foi feita para sua conta.",
			action: {
				instructions:
					"Clique no botão abaixo para redefinir sua senha:",
				button: {
					color: "#22BC66",
					text: "Redefinir minha senha",
					link: `${protocol}://${host}/users/reset-password/${resetToken}`,
				},
			},
			outro: "Se você não solicitou uma redefinição de senha, ignore este email.",
		},
	};

	const emailBody = mailGenerator.generate(email);

	const emailTemplate = {
		to: userEmail,
		subject: "Redefinição de senha",
		text: emailBody,
	};

	return emailTemplate;
};
