import React from 'react';

const Left = ({ img, name }) => {

    return (
        <div className="col-md-8 left">
            <a href={ img } data-lightbox="image-1" data-title={ name }>
                <img src={ img } alt="图片" />
            </a>
            {/* <div className="thumb-nails-container">
                 <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div> 
            </div> */}
        </div>
    );
}

export default Left;
