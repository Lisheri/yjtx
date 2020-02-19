import React from 'react';

const Left = ({ img }) => {

    return (
        <div className="col-md-8 left">
            <img src={ img } alt="图片" />
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
