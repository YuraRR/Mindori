import emailjs from "emailjs-com";

export default function sendPromoCodeEmail(promoCode, certificateAmount, contactInformation) {
  const serviceID = "service_vvcrvlp";
  const templateID = "template_tki5blv";
  const userID = "OGqQhYmSDyxHkgSZx";

  const templateParams = {
    customer_name: contactInformation.firstName,
    customer_email: contactInformation.email,
    promo_code: promoCode,
    certificate_amount: certificateAmount,
    expiration_date: "12/31/2024",
  };

  return emailjs
    .send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      return response;
    })
    .catch((error) => {
      console.error("FAILED...", error);
      throw error;
    });
}
