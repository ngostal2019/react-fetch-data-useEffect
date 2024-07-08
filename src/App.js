import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([])

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(user.results)
  return Object.keys(user).length > 0 ? (
    <div className="App-header">
      <h1>Data returned</h1>
      <h2>First name: {user.results[0].name.first}</h2>
      <h2>Last name: {user.results[0].name.last}</h2>
      <p>{user.results[0].name.first} is a {user.results[0].gender}</p>
      <p>As of today, {user.results[0].name.first} is {user.results[0].dob.age}</p>
      <p>{user.results[0].name.first} is from {user.results[0].location.country}</p>
      <img
        alt={user.info.seed}
        src={user.results[0].picture.large}
      />
      <small>Username: {user.results[0].login.username}</small>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
