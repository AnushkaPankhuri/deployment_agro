// import React, { useState, useEffect } from 'react';
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';
//
// function MiddlemanRequestsPage() {
//     const api = useApi();
//     const [requests, setRequests] = useState([]);
//     const [viewingUser, setViewingUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     const fetchRequests = async () => {
//         try {
//             setLoading(true);
//             const res = await api.get('/api/purchase-requests/all-pending');
//             setRequests(res.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Failed to fetch requests. Please try again.');
//             setLoading(false);
//             console.error('Fetch error:', err);
//         }
//     };
//
//     useEffect(() => {
//         fetchRequests();
//     }, []); // Empty dependency array for fetching once on mount
//
//     const toggleStatus = async (id, currentStatus) => {
//         try {
//             const newStatus = currentStatus.toLowerCase() === 'pending' ? 'fulfilled' : 'pending';
//             await api.put(`/api/purchase-requests/${id}/status?status=${newStatus}`);
//             // Refresh requests
//             await fetchRequests();
//         } catch (err) {
//             setError(`Failed to update status for request ${id}.`);
//             console.error('Status update error:', err);
//         }
//     };
//
//     const viewProfile = async (username) => {
//         try {
//             const res = await api.get(`/api/user/${username}`);
//             setViewingUser(res.data);
//         } catch (err) {
//             setError(`Failed to fetch profile for ${username}.`);
//             console.error('Profile fetch error:', err);
//         }
//     };
//
//     if (loading) {
//         return <div className="p-6 text-center text-gray-600">Loading...</div>;
//     }
//
//     if (error) {
//         return (
//             <div className="p-6 text-red-600 text-center">
//                 {error}
//                 <button
//                     className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                     onClick={() => {
//                         setError(null);
//                         setLoading(true);
//                         fetchRequests();
//                     }}
//                 >
//                     Retry
//                 </button>
//             </div>
//         );
//     }
//
//     return (
//         <div className="p-6 max-w-4xl mx-auto">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Farmer Requests</h2>
//             {requests.length === 0 ? (
//                 <p className="text-gray-600">No pending requests found.</p>
//             ) : (
//                 <div className="grid gap-4">
//                     {requests.map((r) => (
//                         <div
//                             key={r.id}
//                             className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                         >
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                                 <p>
//                                     <strong className="text-gray-700">Farmer:</strong>{' '}
//                                     {r.farmerUsername}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Crop:</strong> {r.cropType} /{' '}
//                                     {r.quantity} kg @ ₹{r.price}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Date:</strong>{' '}
//                                     {r.requestDate}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Status:</strong> {r.status}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Middleman:</strong>{' '}
//                                     {r.middlemanUsername || 'None'}
//                                 </p>
//                             </div>
//                             <div className="mt-4 flex gap-2">
//                                 <button
//                                     className={`px-4 py-2 rounded-lg text-white transition-colors ${
//                                         r.status.toLowerCase() === 'pending'
//                                             ? 'bg-blue-600 hover:bg-blue-700'
//                                             : 'bg-yellow-600 hover:bg-yellow-700'
//                                     }`}
//                                     onClick={() => toggleStatus(r.id, r.status)}
//                                 >
//                                     {r.status.toLowerCase() === 'pending' ? 'Accept' : 'Unaccept'}
//                                 </button>
//                                 <button
//                                     className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
//                                     onClick={() => viewProfile(r.farmerUsername)}
//                                 >
//                                     View Profile
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//
//             {viewingUser && (
//                 <UserProfileModal user={viewingUser} onClose={() => setViewingUser(null)} />
//             )}
//         </div>
//     );
// }
//
// export default MiddlemanRequestsPage;

// import React, { useState, useEffect } from 'react';
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';

// function MiddlemanRequestsPage() {
//     const api = useApi();
//     const [requests, setRequests] = useState([]);
//     const [viewingUser, setViewingUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchRequests = async () => {
//         try {
//             setLoading(true);
//             const res = await api.get('/api/purchase-requests/all-pending');
//             setRequests(res.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Failed to fetch requests. Please try again.');
//             setLoading(false);
//             console.error('Fetch error:', err);
//         }
//     };

//     useEffect(() => {
//         fetchRequests();
//     }, []); // Empty dependency array for fetching once on mount

//     const toggleStatus = async (id, currentStatus) => {
//         try {
//             const newStatus = currentStatus.toLowerCase() === 'pending' ? 'fulfilled' : 'pending';
//             await api.put(`/api/purchase-requests/${id}/status?status=${newStatus}`);
//             // Refresh requests
//             await fetchRequests();
//         } catch (err) {
//             setError(`Failed to update status for request ${id}.`);
//             console.error('Status update error:', err);
//         }
//     };

//     const viewProfile = async (username) => {
//         try {
//             const res = await api.get(`/api/user/${username}`); // Fixed endpoint
//             setViewingUser(res.data);
//         } catch (err) {
//             setError(`Failed to fetch profile for ${username}.`);
//             console.error('Profile fetch error:', err);
//         }
//     };

//     if (loading) {
//         return <div className="p-6 text-center text-gray-600">Loading...</div>;
//     }

//     if (error) {
//         return (
//             <div className="p-6 text-red-600 text-center">
//                 {error}
//                 <button
//                     className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                     onClick={() => {
//                         setError(null);
//                         setLoading(true);
//                         fetchRequests();
//                     }}
//                 >
//                     Retry
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="p-6 max-w-4xl mx-auto">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Farmer Requests</h2>
//             {requests.length === 0 ? (
//                 <p className="text-gray-600">No pending requests found.</p>
//             ) : (
//                 <div className="grid gap-4">
//                     {requests.map((r) => (
//                         <div
//                             key={r.id}
//                             className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                         >
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                                 <p>
//                                     <strong className="text-gray-700">Farmer:</strong>{' '}
//                                     {r.farmerUsername}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Crop:</strong> {r.cropType} /{' '}
//                                     {r.quantity} kg @ ₹{r.price}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Date:</strong>{' '}
//                                     {r.requestDate}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Status:</strong> {r.status}
//                                 </p>
//                                 <p>
//                                     <strong className="text-gray-700">Middleman:</strong>{' '}
//                                     {r.middlemanUsername || 'None'}
//                                 </p>
//                             </div>
//                             <div className="mt-4 flex gap-2">
//                                 <button
//                                     className={`px-4 py-2 rounded-lg text-white transition-colors ${
//                                         r.status.toLowerCase() === 'pending'
//                                             ? 'bg-blue-600 hover:bg-blue-700'
//                                             : 'bg-yellow-600 hover:bg-yellow-700'
//                                     }`}
//                                     onClick={() => toggleStatus(r.id, r.status)}
//                                 >
//                                     {r.status.toLowerCase() === 'pending' ? 'Accept' : 'Unaccept'}
//                                 </button>
//                                 <button
//                                     className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
//                                     onClick={() => viewProfile(r.farmerUsername)}
//                                 >
//                                     View Profile
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {viewingUser && (
//                 <UserProfileModal user={viewingUser} onClose={() => setViewingUser(null)} />
//             )}
//         </div>
//     );
// }

// export default MiddlemanRequestsPage;




import React, { useState, useEffect } from 'react';
import { useApi } from '../services/api';
import UserProfileModal from './UserProfileModal';
import './MiddlemanRequestPage.css';

function MiddlemanRequestsPage() {
    const api = useApi();
    const [requests, setRequests] = useState([]);
    const [viewingUser, setViewingUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all', 'pending', 'fulfilled'

    const fetchRequests = async () => {
        try {
            setLoading(true);
            const res = await api.get('/api/purchase-requests/all-pending');
            setRequests(res.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch requests. Please try again.');
            setLoading(false);
            console.error('Fetch error:', err);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const toggleStatus = async (id, currentStatus) => {
        try {
            const newStatus = currentStatus.toLowerCase() === 'pending' ? 'fulfilled' : 'pending';
            await api.put(`/api/purchase-requests/${id}/status?status=${newStatus}`);
            await fetchRequests();
        } catch (err) {
            setError(`Failed to update status for request ${id}.`);
            console.error('Status update error:', err);
        }
    };

    const viewProfile = async (username) => {
        try {
            const res = await api.get(`/api/user/${username}`);
            setViewingUser(res.data);
        } catch (err) {
            setError(`Failed to fetch profile for ${username}.`);
            console.error('Profile fetch error:', err);
        }
    };

    const filteredRequests = requests.filter(request => {
        if (filter === 'all') return true;
        return request.status.toLowerCase() === filter;
    });

    if (loading) {
        return (
            <div className="middleman-requests-container d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="middleman-requests-container">
                <div className="alert alert-danger text-center">
                    {error}
                    <button
                        className="btn btn-primary ms-3"
                        onClick={() => {
                            setError(null);
                            setLoading(true);
                            fetchRequests();
                        }}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="middleman-requests-container">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-header text-center mb-5">
                            <h1 className="display-5 fw-bold text-success">
                                <i className="bi bi-people-fill me-2"></i>
                                Farmer Purchase Requests
                            </h1>
                            <p className="lead text-muted">Manage and fulfill farmer crop purchase requests</p>
                        </div>

                        <div className="filter-controls mb-4">
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className={`btn ${filter === 'all' ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setFilter('all')}
                                >
                                    All Requests
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${filter === 'pending' ? 'btn-warning' : 'btn-outline-warning'}`}
                                    onClick={() => setFilter('pending')}
                                >
                                    Pending
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${filter === 'fulfilled' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setFilter('fulfilled')}
                                >
                                    Fulfilled
                                </button>
                            </div>
                        </div>

                        {filteredRequests.length === 0 ? (
                            <div className="empty-state text-center py-5">
                                <i className="bi bi-inbox text-muted" style={{ fontSize: '3rem' }}></i>
                                <h4 className="mt-3">No requests found</h4>
                                <p className="text-muted">There are currently no {filter === 'all' ? '' : filter} requests available</p>
                            </div>
                        ) : (
                            <div className="requests-list">
                                {filteredRequests.map((request) => (
                                    <div key={request.id} className="request-card card mb-4 border-0 shadow-sm">
                                        <div className="card-header bg-light d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="badge bg-primary me-2">
                                                    <i className="bi bi-tag-fill me-1"></i>
                                                    {request.cropType}
                                                </span>
                                                <span className="badge bg-secondary">
                                                    <i className="bi bi-speedometer2 me-1"></i>
                                                    {request.quantity} kg
                                                </span>
                                            </div>
                                            <div>
                                                <span className={`badge ${request.status.toLowerCase() === 'pending' ? 'bg-warning' : 'bg-success'}`}>
                                                    {request.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="user-avatar me-3">
                                                            <i className="bi bi-person-circle text-primary" style={{ fontSize: '2rem' }}></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">{request.farmerUsername}</h5>
                                                            <small className="text-muted">Farmer</small>
                                                        </div>
                                                    </div>
                                                    <div className="mb-2">
                                                        <i className="bi bi-calendar-check text-muted me-2"></i>
                                                        <span className="text-muted">Requested:</span> {request.requestDate}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="price-display mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="price-icon me-2">
                                                                <i className="bi bi-currency-rupee text-success"></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="mb-0">₹{request.price}</h4>
                                                                <small className="text-muted">per kg</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {request.middlemanUsername && (
                                                        <div className="mb-2">
                                                            <i className="bi bi-person-check text-muted me-2"></i>
                                                            <span className="text-muted">Middleman:</span> {request.middlemanUsername}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-white border-0 d-flex justify-content-between">
                                            <button
                                                className={`btn ${request.status.toLowerCase() === 'pending' ? 'btn-success' : 'btn-warning'} btn-lg`}
                                                onClick={() => toggleStatus(request.id, request.status)}
                                            >
                                                <i className={`bi ${request.status.toLowerCase() === 'pending' ? 'bi-check-circle' : 'bi-arrow-counterclockwise'} me-2`}></i>
                                                {request.status.toLowerCase() === 'pending' ? 'Accept Request' : 'Mark as Pending'}
                                            </button>
                                            <button
                                                className="btn btn-outline-primary btn-lg"
                                                onClick={() => viewProfile(request.farmerUsername)}
                                            >
                                                <i className="bi bi-person-lines-fill me-2"></i>
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {viewingUser && (
                <UserProfileModal user={viewingUser} onClose={() => setViewingUser(null)} />
            )}
        </div>
    );
}

export default MiddlemanRequestsPage;