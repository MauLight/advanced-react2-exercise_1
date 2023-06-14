import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([]);

  const { name: { first, last } } = data[0];

  useEffect(() => {
    fetch("https://api.randomuser.me/?nat=US&results=1")
      .then(response => response.json())
      .then(json => {
        setData(json.results)
        console.log(data);
      })

      .catch(console.error);

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`${first ? first : "Firstname"} ${last ? last : "Lastname"}` } 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function Name(name, land) {
  if (!name) {
    throw new Error("Name required!");
  }
  if (!land) {
    throw new Error("Land required!");
  }

  console.log(`Good morning ${name} from ${land}!`);
}

Name("Mau", "Nowhere");

const tahoe = {
  mountains: ["Freel", "Rose", "Talloc", "Rubicon"],
  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
}

tahoe.print();

const nums = [2, 3, 4, 5];
const [last] = [...nums].reverse();

console.log(last);

const [lastone, ...others] = [...nums].reverse();
console.log(others);
console.log(lastone);

function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
