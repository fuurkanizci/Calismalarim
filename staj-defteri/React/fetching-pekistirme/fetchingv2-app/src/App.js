import "./App.css";
import { useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };
  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
   console.log(response.data);
   
  };
  useEffect(() => {
    getUserById(3);
  }, []);
  return <div className="App">asdadadsad </div>;
}

export default App;
