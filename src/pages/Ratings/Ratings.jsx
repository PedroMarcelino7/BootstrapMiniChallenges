import './Ratings.css'

export default function Ratings() {
    return (
        <div className="container">
            <div className="card border-0 shadow-lg rounded-4 p-5 mt-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 className='fw-bold'>What others think about the product</h2>
                        </div>

                        <div className="col-5">
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
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i className="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search Reviews" />
                        </div>
                    </div>

                    <div className="card border-0 bg-transparent">
                        <h5 className='fw-bold'>Reviews</h5>

                        <div className="d-flex text-align-center justify-content-center gap-1">
                            <h6>5</h6>
                            <i className="bi bi-star-fill text-warning"></i>
                        </div>

                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" style={{ width: '25%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}