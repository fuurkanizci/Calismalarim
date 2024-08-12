export async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log("users", users);
  return users;
}
