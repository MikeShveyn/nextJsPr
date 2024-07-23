'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'



export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageRef = useRef()

    function handlePickClick() {
        imageRef.current.click()
    }

    
    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            setPickedImage(null)
            return;
        }

        const fileReader =  new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>

            <div className={classes.preview}>
                {!pickedImage && <p>No Image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="The image picked by user" fill/>}
           
            </div>

            <input className={classes.input}
             type='file'
             ref={imageRef}
             onChange={handleImageChange}
             id={name} 
             accept='image/png, image/jpeg' 
             name={name}
             required/>
             <button className={classes.button} 
                type='button'
                onClick={handlePickClick}>
                Pick an Image
             </button>
        </div>
    </div>
}