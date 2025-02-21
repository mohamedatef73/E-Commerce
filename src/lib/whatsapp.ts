const WHATSAPP_API_URL =
  "https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages";
const WHATSAPP_TOKEN = "YOUR_ACCESS_TOKEN";

export const sendWhatsAppMessage = async (phone: string, message: string) => {
  try {
    const response = await fetch(WHATSAPP_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message },
      }),
    });
    return response.ok;
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
