// create your App component here
import React, { useState, useEffect } from 'react';

function App() {

  const [dogImg, setDogImg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      setDogImg(data.message);
      setIsLoaded((prevLoaded) => !prevLoaded);
    })
  }, [])

  return (
    <div>
      {isLoaded ? <img src={dogImg} alt='A Random Dog'></img> : <p>Loading...</p>}
    </div>
  )
}

export default App;