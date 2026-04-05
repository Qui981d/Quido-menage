import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      zipCode, 
      city, 
      serviceType, 
      date,
      rooms,
      areaSize,
      bathrooms,
      message 
    } = data;

    // Configuration SMTP Hostinger 
    // Par défaut le port SMTP est 465 (SSL) ou 587 (TLS)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_PORT !== "587", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptionsAdmin = {
      from: `"Quido Réservations" <${process.env.SMTP_USER}>`, 
      to: process.env.SMTP_TARGET_EMAIL || process.env.SMTP_USER, // Où envoyer le mail
      replyTo: email,
      subject: `[Nouvelle Demande] ${serviceType} pour ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #ffffff; color: #111; padding: 30px; text-align: center; border-bottom: 1px solid #eaeaea;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">Quido.</h1>
            <p style="margin: 10px 0 0; color: #111; font-size: 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Nouvelle <span style="border-bottom: 4px solid #00cdb4; padding-bottom: 2px;">demande</span> d'intervention</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="font-size: 16px; margin: 0 0 15px; color: #555; text-transform: uppercase; letter-spacing: 1px;">Prestation</h2>
              <p style="margin: 5px 0;"><strong>Type:</strong> ${serviceType}</p>
              <p style="margin: 5px 0;"><strong>Date souhaitée:</strong> ${date}</p>
            </div>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="font-size: 16px; margin: 0 0 15px; color: #555; text-transform: uppercase; letter-spacing: 1px;">Logement</h2>
              <p style="margin: 5px 0;"><strong>Adresse:</strong> ${address}</p>
              <p style="margin: 5px 0;"><strong>Code postal & Ville:</strong> ${zipCode} ${city}</p>
              <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 15px 0;" />
              <p style="margin: 5px 0;"><strong>Surface:</strong> ${areaSize} m²</p>
              <p style="margin: 5px 0;"><strong>Pièces:</strong> ${rooms}</p>
              <p style="margin: 5px 0;"><strong>Salles de bain:</strong> ${bathrooms}</p>
            </div>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="font-size: 16px; margin: 0 0 15px; color: #555; text-transform: uppercase; letter-spacing: 1px;">Client</h2>
              <p style="margin: 5px 0;"><strong>Nom:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 5px 0;"><strong>Téléphone:</strong> <a href="tel:${phone}" style="color: #00cdb4; text-decoration: none;">${phone}</a></p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #00cdb4; text-decoration: none;">${email}</a></p>
            </div>

            ${message ? `
            <div style="background-color: #fce8cd; padding: 20px; border-radius: 8px; border-left: 4px solid #fae150;">
              <h2 style="font-size: 16px; margin: 0 0 10px; color: #555; text-transform: uppercase; letter-spacing: 1px;">Détails supplémentaires</h2>
              <p style="margin: 0; line-height: 1.5; font-style: italic;">"${message}"</p>
            </div>
            ` : ''}

          </div>
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eaeaea; font-size: 12px; color: #888;">
            Ce message a été envoyé automatiquement depuis quido.fr
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsAdmin);

    // Envoi de l'email de confirmation au client
    const mailOptionsClient = {
      from: `"Quido" <${process.env.SMTP_USER}>`, 
      to: email,
      subject: `Quido - Confirmation de votre demande de réservation`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #ffffff; color: #111; padding: 40px 30px; text-align: center; border-bottom: 1px solid #eaeaea;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">Quido.</h1>
            <p style="margin: 10px 0 0; color: #111; font-size: 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Demande <span style="border-bottom: 4px solid #00cdb4; padding-bottom: 2px;">bien reçue</span></p>
          </div>
          
          <div style="padding: 40px 30px;">
            <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 15px;">Bonjour ${firstName},</h2>
            <p style="margin: 0 0 20px; line-height: 1.6; color: #555;">Nous vous confirmons la bonne réception de votre demande d'intervention pour un service de ménage premium au Pays de Gex.</p>
            
            <div style="background-color: #f5f5f5; padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #00cdb4;">
              <h3 style="font-size: 14px; margin: 0 0 15px; color: #111; text-transform: uppercase; letter-spacing: 1px;">Récapitulatif de votre demande :</h3>
              <p style="margin: 8px 0; color: #555;"><strong>Date souhaitée :</strong> ${date}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Prestation :</strong> ${serviceType}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Surface :</strong> ${areaSize} m²</p>
            </div>

            <p style="margin: 0 0 20px; line-height: 1.6; color: #555;"><strong>Votre réservation est confirmée</strong> pour le ${date} au ${address}, ${zipCode} ${city}. Si notre équipe technique a besoin de précisions supplémentaires pour préparer l'intervention, nous vous contacterons directement par téléphone.</p>
            <p style="margin: 0 0 20px; line-height: 1.6; color: #555;">Si vous avez la moindre question ou si vous souhaitez modifier votre réservation, n'hésitez pas à nous appeler de votre côté.</p>

            <p style="margin: 0; line-height: 1.6; color: #555; font-weight: bold;">L'équipe Quido.</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eaeaea; font-size: 12px; color: #888;">
            Veuillez ne pas répondre à cet email automatisé.<br>
            <a href="https://www.quido.fr" style="color: #00cdb4; text-decoration: none;">www.quido.fr</a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json(
      { message: "Demande envoyée avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
