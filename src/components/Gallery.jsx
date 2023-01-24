import React, {useState} from 'react'
import "./Gallery.scss"
const Gallery = ({ title, img, country}) => {

    const [bgColor, setBgColor] = useState("green");

    const colorChange = () => {

        if (bgColor === "green"){
            setBgColor("grey");
        }else{
            setBgColor("green");
        }
    }
  return (
    
    <div style = {{backgroundColor: bgColor}} onClick={colorChange}>

        
        <h2 className='canvas_title' > {title}</h2>
        <img src={img} alt=""/>

    </div>
  )
}

export default Gallery
