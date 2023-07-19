import React, { useState } from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";


function Home() {
  const [image, setImage] = useState("")


   const handleOnchange = () => {
    console.log(image)
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'flseurfa')
    fetch('https://api.cloudinary.com/v1_1/skypicture/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if(response.ok){
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
    })
   }

   const cld = new Cloudinary({cloud: {cloudName: 'skypicture'}});
   const myImage = cld.image('m37pp10o47dfxstkr0ve'); 
   myImage.resize(fill().width(250).height(250));


   const sayRender = () => {
    console.log('render')
   }

  return (
    <div>
      Home
       <AdvancedImage cldImg={myImage} />
       <input type="file" 
        onChange={(e) => setImage(e.target.files[0])}
       />
       <button onClick={() => handleOnchange()}>Send image</button>





    </div>
  )
}

export default Home