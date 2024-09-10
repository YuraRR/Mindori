export default function generatePromoCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 4;
  const blocks = 3;

  const getRandomString = (len) => {
    let result = "";
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  let promoCode = "";
  for (let i = 0; i < blocks; i++) {
    promoCode += getRandomString(length);
    if (i < blocks - 1) {
      promoCode += "-";
    }
  }

  return promoCode.toUpperCase();
}
