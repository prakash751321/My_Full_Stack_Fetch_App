import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    alert("In this project i have used axios to fetch data. Proxy used to overcome cross origin error.")
    axios
      .get("/api/jokes") //  proxy used here. >> to check go to vite.config.js file
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Here i have fetched jokes from own api to frontend !</h1>
      <p>In this project i have used axios to fetch data. Proxy used to overcome cross origin error.</p>
      <h3>Jokes count : {jokes.length}</h3>
      {
        //  type - 1
        // jokes.map((joke) => {
        //  return (
        //     <div key={joke.id}>
        //       <h3>{joke.title}</h3>
        //       <p>{joke.content}</p>
        //     </div>
        //   )}
        // )
        //  type - 2
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <h3>{joke.content}</h3>
          </div>
        ))
      }
    </>
  );
}

export default App;
