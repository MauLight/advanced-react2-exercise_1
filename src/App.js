import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([]);
  const [anime, setAnime] = useState(null);

  const fetchAnime = async () => {
    try {
      let result = await fetch("https://api.jikan.moe/v4/anime");
      let { data } = await result.json();
      setAnime(data);
      console.log(data);
      console.log(data[0]);
    }
    catch (error) {
      console.log(error);
    }
  }

  const fetchPerson = async () => {
    try {
      let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
      let { results } = await res.json();
      //console.log(results[0].name);
      setData(results[0].name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPerson();
    fetchAnime();
  }, [])



  return (
    <div className="App">
    
      <ul className='list'>
        {
          !!anime && anime.map((elem) => {
            return (
              <li key={elem.id}>
                <img src={elem.images.jpg.image_url} />
                <h4>
                  {elem.title}
                </h4>
              </li>
            )
          })
        }
      </ul>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

const insideFn = logger => {
  logger("Some long statement!");
}

insideFn(message => console.log(message));
/*
const createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + "!!!");
  }
}

*/

const createScream = logger => message => { logger(message.toUpperCase() + "!!!") }

const scream = createScream(message => console.log(message));

//scream("Hey there motherfuckers");

const string = "the awesome bookman attacks again";
let urlFriendly = "";
for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

const urlFriendly2 = string.replace(/ /g, '-');
console.log(urlFriendly);
console.log(urlFriendly2);

let color_lawn = {
  title: "lawn",
  color: "#00F00",
  rating: 0
}

//it replaces the third param in the second one, meaning if second one has a rating field, it replaces it in the copy
//probably replaces fields that have the same name for the seond ocurrance.
const rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
}

console.log(rateColor(color_lawn, 5));

const rateColor2 = (color, rating) => ({
  ...color, rating
});

console.log(rateColor2(color_lawn, 5));

let list = [{ title: "Mau" }, { title: "Elv" }];

const addTitle = (title, array) => array.concat({ title });

const addTitle2 = (title, array) => [...array, { title }];

console.log(addTitle("Sayantan", list));
console.log(addTitle2("Sayantan", list));

const Dude = {
  name: "Peter",
  canRead: false
}

const educate = person => ({
  ...person,
  canRead: true
});

console.log(educate(Dude));
console.log(Dude);

const names = ["Seiya", "Saitama", "Serena", "Son Goku", "Shyryu", "Naruto", "Sasuke", "Orochimaru", ""]
