import React from 'react';

const Display = () => {
    const containerStyle = { margin: '20px 0' };
    return (
        <div style={ containerStyle } id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582463839980&di=d2f5923955c6af4466c073822645e643&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010588583c063da801219c77b14fe8.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582463839980&di=d2f5923955c6af4466c073822645e643&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010588583c063da801219c77b14fe8.jpg" className="d-block w-100" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>



    );
}

export default Display;
