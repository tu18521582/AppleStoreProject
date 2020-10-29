import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];


function ControlledCarousel() {
    return (
        <>
            <div className="Carousel">
                <Carousel breakPoints={breakPoints}>
                    <Item><img src="https://www.att.com/idpassets/global/devices/phones/apple/iphone-11-pro-max/carousel/midnightgreen/iPhone_11_Pro_Max_MG_5_carousel.png" alt="#" /></Item>
                    <Item><img src="https://www.techone.vn/wp-content/uploads/2019/10/11-pro-vang-37383.jpg" alt="#" /></Item>
                    <Item><img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/286885732.jpeg" alt="abc" /></Item>
                    <Item><img src="https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-64gb-chinh-hang_1.jpg" alt="#" /></Item>
                    <Item><img src="https://specials-images.forbesimg.com/imageserve/5eadf5d16750a900060047b2/960x0.jpg?fit=scale" alt="#" /></Item>
                </Carousel>
            </div>
        </>
    );
}

export default ControlledCarousel;