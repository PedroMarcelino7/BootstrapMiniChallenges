export default function PricingCards() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <div className='rounded-4 shadow-lg p-3'>
                        <h2 className='h4 fw-bold'>Free</h2>
                        <h3 className='h6 fw-medium'>For Freelancers</h3>
                        <h1 className='h1 fw-bolder mt-3 mb-5'>$0</h1>

                        <div className='d-flex flex-column ms-2 mb-5'>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> Single User</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> 10 Downloads Per Month</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> Faster Files</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> 25 Custom Packs</h4>
                        </div>

                        <button className="btn btn-dark fw-medium rounded-4 w-100 py-1">Subscribe</button>
                    </div>
                </div>

                <div className="col-12 col-md-6 text-light">
                    <div className='rounded-4 shadow-lg p-3 bg-dark'>
                        <h2 className='h4 fw-bold'>Pro</h2>
                        <h3 className='h6 fw-medium'>For Agencies</h3>
                        <h1 className='h1 fw-bolder mt-3 mb-5'>$100</h1>

                        <div className='d-flex flex-column ms-2 mb-5'>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> Unlimited Users</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> Unlimited Downloads</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> Fully-Editable Files</h4>
                            <h4 className='h6 fw-medium mb-3'><i className="bi bi-check"></i> 200+ Custom Packs</h4>
                        </div>

                        <button className="btn btn-light fw-medium rounded-4 w-100 py-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}