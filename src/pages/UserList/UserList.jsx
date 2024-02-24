import './UserList.css'

export default function UserList() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div className="d-flex justify-content-end">
                        <div className="btn-group">
                            <button className="btn btn-secondary">Dark</button>
                            <button className="btn btn-light">Light</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h1>Users</h1>
                </div>

                <div className="row mt-2">
                    <div className="col-4">
                        <form>
                            <input type="text" className="form-control shadow-none" placeholder='Search Users' />
                        </form>
                    </div>

                    <div className="col-8 d-flex justify-content-end gap-4">
                        <div className="nav-link"><a href="#">Reputation</a></div>
                        <div className="nav-link"><a href="#">New Users</a></div>
                        <div className="nav-link"><a href="#">Editors</a></div>
                        <div className="nav-link"><a href="#">Moderators</a></div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-4 card p-2">
                    <div className="row">
                        <div className="col-6">
                            <img className='rounded-circle' src="" alt="" />
                        </div>

                        <div className="col-6">
                            <h5>John Doe</h5>
                            <h6>Troy, MI</h6>

                            <div className="row">
                                <span className='badge bg-primary'>Nature</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <ul className="pagination">
                    <li className="page-item disabled"><a href="#" className="page-link shadow-none">Previous</a></li>
                    <li className="page-item active"><a href="#" className="page-link shadow-none">1</a></li>
                    <li className="page-item"><a href="#" className="page-link shadow-none">2</a></li>
                    <li className="page-item"><a href="#" className="page-link shadow-none">3</a></li>
                    <li className="page-item"><a href="#" className="page-link shadow-none">Next</a></li>
                </ul>
            </div>
        </div>
    )
}