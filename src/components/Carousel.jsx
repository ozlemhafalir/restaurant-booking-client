import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

export default function Carousel({images}) {
    const placeholderImages = [
        {
            id: 'San Francisco – Oakland Bay Bridge, United States',
            image_url:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1000&h=440&q=60',
        },
        {
            id: 'Bird',
            image_url:
                'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1000&h=440&q=60',
        },
        {
            id: 'Bali, Indonesia',
            image_url:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&h=440',
        },
        {
            id: 'Goč, Serbia',
            image_url:
                'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1000&h=440&q=60',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderImage = (src, alt) => (
        <Box
            component="img"
            sx={{
                display: 'block',
                maxHeight: '70vh',
                width: '100%',
                overflow: 'hidden',
                objectFit: 'cover',
            }}
            src={src}
            alt={alt}
        />
    );

    return images.length == 1 ? (
        <div>
            {renderImage(images[0].image_url, images[0].id)}
        </div>
    ) : (
        <Slider {...settings}>
            {(images.length > 0 ? images : placeholderImages).map((item) => (
                <div key={item.id}>
                    {renderImage(item.image_url, item.id)}
                </div>
            ))}
        </Slider>
    );
}

Carousel.propTypes = {
    images: PropTypes.array,
};
