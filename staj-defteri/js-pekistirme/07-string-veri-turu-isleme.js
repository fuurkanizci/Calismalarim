let email = "fuurkanizci.10@gmail.com";
let firstName = "Furkan";
let lastName = "Izci";
console.log(email);

console.log(firstName.charAt(3));

let nameSlice = firstName.slice(0, 4);
console.log(nameSlice);
firstName = firstName.toUpperCase();
console.log(firstName);

console.log(email.search("@"));
console.log(email[14]);

let sEarch = email.search("olmayan");
console.log(sEarch);

let Eslice = email.slice(0);
console.log(Eslice);

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf("@")));

// bilgiyi degistir -> replace :
var ReMail = email.replace("gmail.com", "socialthinks.com");
console.log(ReMail);

// istedigim bilgi var mi ? -> includes :
email.includes("dkfhsd"); // false
email.includes("@"); // true

console.log(email.startsWith("fuurkan")); // true, e-posta 'example' ile başlıyor mu?
console.log(email.endsWith("socialthinks.com")); // true, e-posta 'kodluyoruz.org' ile bitiyor mu?

let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
console.log(fullName);
toLocalLowerCase;
roLocalUpperCase;
let metin = "İSTANBUL";
console.log(metin.toLowerCase());
