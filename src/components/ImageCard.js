import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef(); //sets up Ref to image DOM element
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //grab number of spans to use w/ grid-row-end to set height for image card, based on grid-auto-rows value set in CSS
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) + 1;

        this.setState({ spans });
    }

    render() {
        const { alt_description, urls } = this.props.image;

        return <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef} src={urls.small} alt={alt_description} />
        </div>
    };
}

export default ImageCard;