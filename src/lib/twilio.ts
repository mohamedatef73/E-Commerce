import twilio from "twilio";

const accountSid = import.meta.env.VITE_TWILIO_ACCOUNT_SID;
const authToken = import.meta.env.VITE_TWILIO_AUTH_TOKEN;
const twilioWhatsappNumber = import.meta.env.VITE_TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

export const sendWhatsAppMessage = async (to: string, message: string) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioWhatsappNumber,
      to: `whatsapp:${to}`,
    });

    console.log("Message sent successfully:", response.sid);
    return true;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return false;
  }
};

export const formatOrderMessage = (
  formData: any,
  items: any[],
  total: number,
  paymentMethod: string,
) => {
  const itemsList = items
    .map(
      (item) =>
        `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n");

  return (
    `New Order Details:\n\n` +
    `Customer Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Address: ${formData.address}\n` +
    `Phone: ${formData.phone}\n` +
    `Payment Method: ${paymentMethod}\n` +
    (paymentMethod === "vodafone"
      ? `Vodafone Number: ${formData.vodafoneNumber}\n`
      : "") +
    `\nItems:\n${itemsList}\n` +
    `\nTotal: $${total.toFixed(2)}`
  );
};
