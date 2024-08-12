import "./App.css";
import User from "./components/User";


function App() {

  return (
    <>
      <User
        name="12"
        surname="65987"
        isLoggedIn={true}
        age={21}
        friends={["Uğur", "Demo", "Erol"]}
      />
    </>
  );
}

export default App;
