import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        //key gets added to root element being returned, which would be a div if this was wrapped in one
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;