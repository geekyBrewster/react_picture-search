import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({id, urls, alt_description}) => {
        //key gets added to root element being returned, which would be a div if this was wrapped in one
        return <img key={id} src={urls.small} alt={alt_description}/>
    });
    return <div>{images}</div>
};

export default ImageList;