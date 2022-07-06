import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '777b20b1c7msh0ded2ae3b59a769p162035jsneb192719e98d',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
    };

    fetch(
      `https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
    console.log(data.tracks);
  };

  return (
    <div className='app'>
      <div className='app_main'>
        <div>
          <h1>Find Your Favorite Song</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' value={search} onChange={handleChange} />
            <button type='submit'>Search</button>
          </form>
          <div>{data}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
