import { useState } from 'react'
import './UserList.css'

export default function UserList() {
    const [theme, setTheme] = useState('dark')

    return (
        <div className={`container-fluid bg-${theme} py-5`} data-bs-theme={theme}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <div className="btn-group">
                                <button className="btn btn-secondary" onClick={() => setTheme('dark')}>Dark</button>
                                <button className="btn btn-light" onClick={() => setTheme('light')}>Light</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h1 className='text-muted'>Users</h1>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12 col-md-4">
                            <form>
                                <input type="text" className="form-control shadow-none" placeholder='Search Users' />
                            </form>
                        </div>

                        <div className="col-12 col-md-8 mt-3 mt-md-0 d-flex justify-content-end align-items-center user-list">
                            <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link">Reputation</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-bg-primary rounded-2">New Users</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Editors</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Moderators</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex gap-3">
                                    <div className="user-img">
                                        <img className='rounded-circle img-fluid' src="https://picsum.photos/200/200" alt="" />
                                    </div>

                                    <div className="user-info">
                                        <h4>John Doe</h4>
                                        <h6>Troy, MI</h6>
                                        <span className="badge bg-primary">Nature</span>
                                        <span className="badge bg-primary">Travel</span>
                                        <span className="badge bg-primary">Sports</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex gap-3">
                                    <div className="user-img">
                                        <img className='rounded-circle img-fluid' src="https://picsum.photos/200/200" alt="" />
                                    </div>

                                    <div className="user-info">
                                        <h4>John Doe</h4>
                                        <h6>Troy, MI</h6>
                                        <span className="badge bg-primary">Nature</span>
                                        <span className="badge bg-primary">Travel</span>
                                        <span className="badge bg-primary">Sports</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex gap-3">
                                    <div className="user-img">
                                        <img className='rounded-circle img-fluid' src="https://picsum.photos/200/200" alt="" />
                                    </div>

                                    <div className="user-info">
                                        <h4>John Doe</h4>
                                        <h6>Troy, MI</h6>
                                        <span className="badge bg-primary">Nature</span>
                                        <span className="badge bg-primary">Travel</span>
                                        <span className="badge bg-primary">Sports</span>
                                    </div>
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
        </div>
    )
}