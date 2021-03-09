import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
//import ImageGrid from './comps/ImageGrid'; 
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);//Set different states so we can click between normal view and pic fullscreen view

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} 
    </div>
  );//Open up image only when it's clicked on and selectedImg has state set to picture instead of null
}

export default App;
