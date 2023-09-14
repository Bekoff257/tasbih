import React from 'react'
import "./BlogBanner.scss"
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function BlogBanner() {
    const [ banner, setBanner ] = useState([])

    useEffect(() => {
        const bannerObject = [
            {
                id: 1,
                title: 'Juma Muborak',
                imageURL: 'https://i.pinimg.com/736x/7f/c4/52/7fc4523a85140dd9a516dc0327245e16.jpg'
            },
            {
                id: 2,
                title: 'Borliq',
                imageURL: 'https://i.pinimg.com/736x/57/f6/05/57f6057c22d01e8c2372d0f927c0aad2.jpg'
            }
        ]
        setBanner(bannerObject)
    }, [])

  return (
    <div className='blog_banner'>
            <div className="blog_content">
            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"

                autoplay
                loop={true}
                spaceBetween={10}
            >
            {
                banner.map(bannerInfo => 
                    <>
                       <SwiperSlide> 
                            <img src={bannerInfo.imageURL} alt="" />
                            <div className="title">
                                <p>{bannerInfo.title}</p>
                            </div>
                        </SwiperSlide>
                    </>
                )
            }
            </Swiper>
            </div>
    </div>
  )
}

export default BlogBanner