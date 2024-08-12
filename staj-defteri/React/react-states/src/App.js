import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("furkan");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["ahmet", "mehmet"]);
  const [address, setAddress] = useState({ title: "ankara", zip: 12312 });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}!</h2>

      <button onClick={() => setName("Kemal")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <br></br>
      <h2>Friends</h2>
      <hr />
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Mustafa"])}>
        New Friend
      </button>
      <hr />
      <br></br>
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ ...address, title: "balkes", zip: 1231 })}>
        New Address
      </button>
    </div>
  );
}

export default App;
