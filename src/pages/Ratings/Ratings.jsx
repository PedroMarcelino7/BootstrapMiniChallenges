import './Ratings.css'

export default function Ratings() {
    return (
        <div className="container" style={{ maxWidth: '700px' }}>
            <div className="card border-0 shadow-lg rounded-4 py-5 px-3 p-md-5 mt-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-7">
                            <h2 className='fw-bold'>What others think about the product</h2>
                        </div>

                        <div className="col-12 col-sm-5">
                            <div className="card p-4">
                                <div className="d-flex align-items-center justify-content-center gap-3">
                                    <i class="bi bi-star-fill fs-1 text-warning"></i>
                                    <h2 className='fs-1'>4.8</h2>
                                </div>

                                <h5 className='text-center'>Average Rating</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div class="input-group input-group-lg">
                            <span class="input-group-text rounded-start-pill"><i className="bi bi-search"></i></span>
                            <input type="text" class="form-control rounded-end-pill shadow-none" placeholder="Search Reviews" />
                        </div>
                    </div>

                    <div className="row p-0 p-sm-2 p-md-4">
                        <div className="col-12">
                            <h5>Reviews</h5>

                            <div className="vstack gap-2">
                                <div className="d-flex align-items-center gap-4">
                                    <div className='d-flex gap-1'>
                                        <span>5</span> <i className="bi bi-star-fill text-warning"></i>
                                    </div>

                                    <div className="progress h-5 w-100" >
                                        <div className="progress-bar bg-warning" style={{ width: '100%' }}></div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4">
                                    <div className='d-flex gap-1'>
                                        <span>4</span> <i className="bi bi-star-fill text-warning"></i>
                                    </div>

                                    <div className="progress h-5 w-100" >
                                        <div className="progress-bar bg-warning" style={{ width: '80%' }}></div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4">
                                    <div className='d-flex gap-1'>
                                        <span>3</span> <i className="bi bi-star-fill text-warning"></i>
                                    </div>

                                    <div className="progress h-5 w-100" >
                                        <div className="progress-bar bg-warning" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4">
                                    <div className='d-flex gap-1'>
                                        <span>2</span> <i className="bi bi-star-fill text-warning"></i>
                                    </div>

                                    <div className="progress h-5 w-100" >
                                        <div className="progress-bar bg-warning" style={{ width: '40%' }}></div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-4">
                                    <div className='d-flex gap-1'>
                                        <span>1</span> <i className="bi bi-star-fill text-warning"></i>
                                    </div>

                                    <div className="progress h-5 w-100" >
                                        <div className="progress-bar bg-warning" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-12">
                            <button className="btn btn-success btn-lg rounded-5">Write Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}