import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { logClockTime } from './components/clock';

function App() {

  const [data, setData] = useState([]);
  const [anime, setAnime] = useState(null);
  const [letter, setLetter] = useState("");

  //console.log(letter);

  const fetchAnime = async () => {
    try {
      let result = await fetch("https://api.jikan.moe/v4/anime");
      let { data } = await result.json();
      setAnime(data);
      //console.log(data);
      //console.log(data[0]);
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

  const animeFilter = letter !== "" ? anime.filter(elem => elem.title[0] === letter.toUpperCase()) : anime;



  return (
    <div className="App">

      <ul className='list'>
        {
          !!animeFilter && animeFilter.map((elem) => {
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
      <input type='text' maxLength={1} value={letter.toUpperCase()} onChange={(e) => setLetter(e.target.value)}></input>
    </div>
  );
}

export default App;

const insideFn = logger => {
  logger("Some long statement!");
}

//insideFn(message => console.log(message));
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
//console.log(urlFriendly);
//console.log(urlFriendly2);

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

//console.log(rateColor(color_lawn, 5));

const rateColor2 = (color, rating) => ({
  ...color, rating
});

//console.log(rateColor2(color_lawn, 5));

let list = [{ title: "Mau" }, { title: "Elv" }];

const addTitle = (title, array) => array.concat({ title });

const addTitle2 = (title, array) => [...array, { title }];

//console.log(addTitle("Sayantan", list));
//console.log(addTitle2("Sayantan", list));

const Dude = {
  name: "Peter",
  canRead: false
}

const educate = person => ({
  ...person,
  canRead: true
});

//console.log(educate(Dude));
//console.log(Dude);

const names = ["Seiya", "Saitama", "Serena", "Son Goku", "Shyryu", "Naruto", "Sasuke", "Orochimaru", ""]

let schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" }
];

const editName = (oldName, name, arr) => arr.map(item => item.name === oldName ? { ...item, name } : item);

//console.log(Object.keys(schools));


let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

//console.log(updatedSchools[1]);

const schoolsII = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5
};

const schoolWins = Object.keys(schoolsII).map(key => ({ name: key, wins: schoolsII[key] })); // [{name: schoolname, wins: number}]

//console.log(schoolWins);

const changeWins = (schoolName, wins, arr) => arr.map(elem => elem.name === schoolName ? { ...elem, wins } : elem);

// console.log(changeWins("Yorktown", 20, schoolWins));
// console.log(changeWins("Washington & Liberty", 50, schoolWins));
// console.log(changeWins("Wakefield", 50, schoolWins));

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  // console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

//console.log(maxAge);

const max = ages.reduce((max, age) => (age > max ? age : max), 0);
//console.log(max);

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1
  }
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

//console.log(hashColors);

const moreColors = ["black", "turquoise", "cyan", "yellow", "orange", "black", "cyan"];

const uniqueColors = moreColors.reduce((unique, color) => unique.indexOf(color) !== -1 ? unique : [...unique, color], []);

//console.log(uniqueColors);

const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!");
const showUnauthorized = () => console.log("Denied access!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);
//grandpa23  //Fuck!
const userLogs = username => message => console.log(`${username} -> ${message}`);

const log = userLogs("grandpa23");
log("Attempted to load 20 fake members.");
log("Fuck!");

const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
}

countdown(10, value => console.log(value));

const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  console.log(remaining);
  return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first];
}

console.log(deepPick("data.info.fullname.first", dan));

const template = "hh:mm:ss tt";
const clocktime = template
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "03")
  .replace("tt", "PM")

console.log(clocktime);

logClockTime();