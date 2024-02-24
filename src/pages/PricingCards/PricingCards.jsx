import './PricingCards.css'

export default function PricingCards() {
    return (
        <div className="container mt-5" style={{ maxWidth: '800px' }}>
            <div className="row">
                <div className="col-12 col-sm-6 mb-4">
                    <div className='rounded-4 shadow-lg p-3'>
                        <h4 className='fw-bold'>Free</h4>
                        <h6 className='fw-medium text-muted'>For Freelancers</h6>

                        <h1 className='fw-bolder mt-3 mb-5'>$0</h1>

                        <div className='d-flex flex-column ms-2 mb-5'>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> Single User</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> 10 Downloads Per Month</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> Faster Files</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> 25 Custom Packs</h6>
                        </div>

                        <button className="btn btn-dark fw-medium rounded-4 w-100 py-1">Subscribe</button>
                    </div>
                </div>

                <div className="col-12 col-sm-6 text-light">
                    <div className='rounded-4 shadow-lg p-3 bg-dark'>
                        <h4 className='fw-bold'>Pro</h4>
                        <h6 className='fw-normal'>For Agencies</h6>
                        <h1 className='fw-bolder mt-3 mb-5'>$100</h1>

                        <div className='d-flex flex-column ms-2 mb-5'>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> Unlimited Users</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> Unlimited Downloads</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> Fully-Editable Files</h6>
                            <h6 className='fw-medium mb-3'><i className="bi bi-check"></i> 200+ Custom Packs</h6>
                        </div>

                        <button className="btn btn-light fw-medium rounded-4 w-100 py-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}