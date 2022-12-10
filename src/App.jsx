import '@fontsource/metropolis'
import './sass/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import product_1 from '/img/products/crema_alpura.jpg'
import product_2 from '/img/products/crema_deslactosada.jpg'
import product_3 from '/img/products/leche_alpura.jpg'
import product_4 from '/img/products/queso_doblecrema.jpg'
import product_5 from '/img/products/queso_oaxaca_alpura.png'

export const App = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container-fluid">
            <div className="row py-5">
                <h1 className="fw-light py-3">Carousel made with Bootstrap</h1>
                <div className="col">
                    <div id="carouselExampleIndicators" className="bg-carousel carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner h-100 d-flex align-items-center">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_1} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_2} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_3} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_1} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_2} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_3} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_1} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_2} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <div className="custom-card card text-center">
                                            <div className="text-center">
                                                <img src={product_3} alt="..." width={100} height={100} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <h1 className="fw-light py-3">Carousel made with React Multi Carousel</h1>
                <div className="col">
                    <Carousel responsive={responsive}>
                        <div>
                            <div className="custom-card card text-center">
                                <div className="text-center">
                                    <img src={product_1} alt="..." width={100} height={100} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="custom-card card text-center">
                                <div className="text-center">
                                    <img src={product_1} alt="..." width={100} height={100} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="custom-card card text-center">
                                <div className="text-center">
                                    <img src={product_1} alt="..." width={100} height={100} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="custom-card card text-center">
                                <div className="text-center">
                                    <img src={product_1} alt="..." width={100} height={100} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
