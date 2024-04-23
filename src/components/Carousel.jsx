import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";

export default function Carousel() {
    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1000&h=440&q=60',
        },
        {
            label: 'Bird',
            imgPath:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1000&h=440&q=60',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&h=440',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1000&h=440&q=60',
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {images.map((step, index) => (
                <div key={step.label}>
                    <Box
                        component="img"
                        sx={{
                            display: 'block',
                            width: '100%',
                            overflow: 'hidden',
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                </div>
            ))}
        </Slider>
    );
}