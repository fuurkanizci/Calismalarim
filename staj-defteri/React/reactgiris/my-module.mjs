const hello = (name) =>{
  console.log(`hello ${name}`);
};

const topla = (a,b) => a + b;
const cikar = (a, b)=> a - b;
const carp = (a, b)=> a * b;
const user = {
  name: "Furkan",
  surname: "İzci",
};
const users = [
  {
  name: "Ahmet",
  surname: "Tarık",
  },
  {
    name: "Uğur",
    surname: "Dayı",
    },
];
export { hello, topla, cikar, carp, user, users};
 