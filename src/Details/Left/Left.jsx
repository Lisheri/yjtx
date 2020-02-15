import React from 'react';

const Left = () => {
    const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581787774002&di=3b4c894af233ab9f56cb3a1a250b5454&imgtype=0&src=http%3A%2F%2Ffile.elecfans.com%2Fweb1%2FM00%2F6C%2F9A%2Fo4YBAFvquVGAG3-sAA2mkaA0Yws59.JPEG';
    return (
        <div className="col-md-8 left">
            <img src={ url } alt="" />
            <div className="thumb-nails-container">
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
                <div className="thumb-nail"><img src={ url } alt="" /></div>
            </div>
        </div>
    );
}

export default Left;
