let username = "furkan";
const DOMAIN = "socialthinks.com";

let email = username + "@" + DOMAIN;
console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email);

let info = ` Merhaba ${username} sitemize hoşgeldin.. mail adresin: ${email}
kısa isminiz: ${username[0]}

mail adresinin uzunluğu: ${email.length}
günün saat bilgisi : ${new Date().getHours()}:${new Date().getMinutes()}
`;
console.log(info);
