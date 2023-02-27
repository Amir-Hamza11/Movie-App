import React from 'react'
import { Carousel } from 'rsuite'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'

const Slides = () => {

    return (
        <div style={{width:'65%', }} >
            <Carousel autoplay
                placement='bottom'
                shape='dot' 
                className="custom-slider" >
                <img src={image1} style={{objectFit:'cover'}} height='400'  alt='img' />
                <img src={image2} style={{objectFit:'cover'}} height='400' alt='img' />
                <img src={image3} style={{objectFit:'cover'}} height='400' alt='img' />
                <img src={image4} style={{objectFit:'cover'}} height='400' alt='img' />
            </Carousel>

        </div>
    )
}

export default Slides