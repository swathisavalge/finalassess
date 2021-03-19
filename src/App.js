import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [photosInfo, setPhotosInfo] = useState([]);
  
  useEffect(() => {
    const data = async () => {
       await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response  => response.json())
        .then(data => setPhotosInfo([...data]))
    }
    data();
  },[]);

  const handlePhotoLoad = photosInfo.map((photoInfo)  => {
    const {id, title, url, thumbnailUrl} = photoInfo;
    return( 
        <div className="photo" value={title}  key={id}>
          <a href={url}>
            <img src={thumbnailUrl} alt={title}></img>
          </a>
          <p className="picTitles">{title}</p>
        </div>
    )
  });
  
  return (
    <div>
      <h1>:) I am Dev Ready :)</h1>
      <h2>Checkout wide variety of color blocks</h2>
      <div className="frame">
        {handlePhotoLoad}
      </div>
      

    </div>
  );
}

export default App;
