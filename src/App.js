import React from 'react';
import axios from 'axios';

function App() {
  let [posts, setPosts] = React.useState(null);
  let [city, setCities] = React.useState(true);
  function selectBox(event){
    setCities(event.target.value);
    setCities = event.target.value
    var hello = document.getElementById('hello');
    hello.innerText = setCities ;
    }
  React.useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
      .then(res => {
        const newPosts = res.data;
        setPosts(newPosts);
      });
  }, [city]);
  return (
    <div className="App">
     <h1>Weather App</h1>
     <h3 id="hello"></h3>
      {posts ? <p>Weather : {JSON.stringify(posts.weather[0].main)}</p> : 'loading'}
      {posts ? <p>Temperature: {JSON.stringify(posts.main.temp)}</p> : 'loading'}
      {posts ? <p>Humidity: {JSON.stringify(posts.main.humidity)}</p> : 'loading'}
      <select onChange={selectBox}>
        <option>Karachi</option>
        <option>Peshawar</option>
        <option>Islamabad</option>
        <option>Abbottabad</option>
        <option>Faisalabad</option>
        <option>Rawalpindi</option>
        <option>Gujranwala</option>
        <option>Multan</option>
        <option>Hyderabad</option>
        <option>Quetta</option>
        <option>Bahawalpur</option>
        <option>Sargodha</option>
      </select>
    </div>
  );
}

export default App;