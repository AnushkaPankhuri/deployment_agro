// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';
//
// const MiddlemanTransactionPage = () => {
//     const { username } = useParams();
//     const api = useApi();
//     const [transactions, setTransactions] = useState([]);
//     const [selectedProfile, setSelectedProfile] = useState(null);
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         api.get(`/api/transactions/middleman/`)
//             .then((response) => {
//                 setTransactions(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError("Error fetching transactions");
//                 setLoading(false);
//                 console.error("Error fetching transactions:", error);
//             });
//     }, [username, api]);
//
//     const handleViewProfile = (farmerUsername) => {
//         api.get(`/api/transactions/profile/${farmerUsername}`)
//             .then((response) => {
//                 setSelectedProfile(response.data);
//                 setShowProfileModal(true);
//             })
//             .catch((error) => {
//                 console.error("Error fetching profile:", error);
//             });
//     };
//
//     if (loading) return <div className="p-6 text-center">Loading...</div>;
//     if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
//
//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Fulfilled Transactions for {username}</h2>
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {transactions.length === 0 ? (
//                     <p className="text-center col-span-full">No fulfilled transactions found.</p>
//                 ) : (
//                     transactions.map((tx) => (
//                         <div key={tx.id} className="bg-white shadow rounded-xl p-4">
//                             <p><strong>Farmer:</strong> {tx.farmerUsername}</p>
//                             <p><strong>Middleman:</strong> {tx.middlemanUsername}</p>
//                             <p><strong>Crop:</strong> {tx.cropType}</p>
//                             <p><strong>Quantity:</strong> {tx.quantity} kg</p>
//                             <p><strong>Price:</strong> ₹{tx.price}</p>
//                             <p><strong>Request Date:</strong> {new Date(tx.requestDate).toLocaleDateString()}</p>
//                             <p><strong>Needed Date:</strong> {new Date(tx.neededDate).toLocaleDateString()}</p>
//                             <p><strong>Status:</strong> {tx.status}</p>
//                             <button
//                                 onClick={() => handleViewProfile(tx.farmerUsername)}
//                                 className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                             >
//                                 View Farmer Profile
//                             </button>
//                         </div>
//                     ))
//                 )}
//             </div>
//
//             {showProfileModal && selectedProfile && (
//                 <UserProfileModal
//                     user={selectedProfile}
//                     onClose={() => setShowProfileModal(false)}
//                 />
//             )}
//         </div>
//     );
// };
//
// export default MiddlemanTransactionPage;

// import React, { useEffect, useState } from "react";
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';

// const MiddlemanTransactionPage = () => {
//     const api = useApi();
//     const [transactions, setTransactions] = useState([]);
//     const [selectedProfile, setSelectedProfile] = useState(null);
//     const [showProfileModal, setShowProfileModal] = useState(false);

//     useEffect(() => {
//         api.get("/api/transactions/middleman")
//             .then((response) => {
//                 setTransactions(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching transactions:", error);
//             });
//     }, []);

//     const handleViewProfile = (farmerUsername) => {
//         api.get(`/api/transactions/profile/${farmerUsername}`)
//             .then((response) => {
//                 setSelectedProfile(response.data);
//                 setShowProfileModal(true);
//             })
//             .catch((error) => {
//                 console.error("Error fetching profile:", error);
//             });
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Fulfilled Transactions</h2>
//             <div className="grid gap-4 md:grid-cols-2">
//                 {transactions.map((tx) => (
//                     <div key={tx.id} className="bg-white shadow rounded-xl p-4">
//                         <p><strong>Farmer:</strong> {tx.farmerUsername}</p>
//                         <p><strong>Middleman:</strong> {tx.middlemanUsername}</p>
//                         <p><strong>Crop:</strong> {tx.cropType}</p>
//                         <p><strong>Quantity:</strong> {tx.quantity} kg</p>
//                         <p><strong>Price:</strong> ₹{tx.price}</p>
//                         <p><strong>Status:</strong> {tx.status}</p>
//                         <button
//                             onClick={() => handleViewProfile(tx.middlemanUsername)}
//                             className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                         >
//                             View Profile
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {showProfileModal && selectedProfile && (
//                 <UserProfileModal
//                     user={selectedProfile}
//                     onClose={() => setShowProfileModal(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default MiddlemanTransactionPage;





// import React, { useEffect, useState } from "react";
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';
// import './MiddlemanTransactionPage.css';

// const MiddlemanTransactionPage = () => {
//     const api = useApi();
//     const [transactions, setTransactions] = useState([]);
//     const [selectedProfile, setSelectedProfile] = useState(null);
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         api.get("/api/transactions/middleman")
//             .then((response) => {
//                 setTransactions(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching transactions:", error);
//                 setIsLoading(false);
//             });
//     }, []);

//     const handleViewProfile = (farmerUsername) => {
//         api.get(`/api/transactions/profile/${farmerUsername}`)
//             .then((response) => {
//                 setSelectedProfile(response.data);
//                 setShowProfileModal(true);
//             })
//             .catch((error) => {
//                 console.error("Error fetching profile:", error);
//             });
//     };

//     const getStatusBadge = (status) => {
//         switch(status.toLowerCase()) {
//             case 'completed':
//                 return 'success';
//             case 'pending':
//                 return 'warning';
//             case 'failed':
//                 return 'danger';
//             default:
//                 return 'primary';
//         }
//     };

//     return (
//         <div className="transaction-page-container">
//             <div className="page-header text-center py-5">
//                 <h1 className="display-4 font-weight-bold text-white">Agricultural Transactions</h1>
//                 <p className="lead text-light">Your fulfilled transaction records</p>
//                 <div className="header-decoration"></div>
//             </div>

//             <div className="container-fluid py-4">
//                 {isLoading ? (
//                     <div className="text-center py-5">
//                         <div className="spinner-border text-primary" role="status">
//                             <span className="sr-only">Loading...</span>
//                         </div>
//                         <p className="mt-3">Loading transactions...</p>
//                     </div>
//                 ) : transactions.length === 0 ? (
//                     <div className="text-center py-5 empty-state">
//                         <i className="fas fa-seedling fa-4x mb-3 text-muted"></i>
//                         <h3>No Transactions Found</h3>
//                         <p className="text-muted">You don't have any fulfilled transactions yet.</p>
//                     </div>
//                 ) : (
//                     <div className="row">
//                         {transactions.map((tx) => (
//                             <div key={tx.id} className="col-lg-4 col-md-6 mb-4">
//                                 <div className="card transaction-card h-100">
//                                     <div className="card-header bg-success text-white">
//                                         <h5 className="card-title mb-0">{tx.cropType}</h5>
//                                     </div>
//                                     <div className="card-body">
//                                         <div className="transaction-detail">
//                                             <i className="fas fa-user farmer-icon"></i>
//                                             <div>
//                                                 <h6>Farmer</h6>
//                                                 <p>{tx.farmerUsername}</p>
//                                             </div>
//                                         </div>
//                                         <div className="transaction-detail">
//                                             <i className="fas fa-user-tie middleman-icon"></i>
//                                             <div>
//                                                 <h6>Middleman</h6>
//                                                 <p>{tx.middlemanUsername}</p>
//                                             </div>
//                                         </div>
//                                         <hr className="divider" />
//                                         <div className="row">
//                                             <div className="col-6">
//                                                 <div className="transaction-metric">
//                                                     <i className="fas fa-weight-hanging"></i>
//                                                     <div>
//                                                         <small>Quantity</small>
//                                                         <p><strong>{tx.quantity} kg</strong></p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-6">
//                                                 <div className="transaction-metric">
//                                                     <i className="fas fa-rupee-sign"></i>
//                                                     <div>
//                                                         <small>Price</small>
//                                                         <p><strong>₹{tx.price}</strong></p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card-footer bg-transparent">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <span className={`badge badge-${getStatusBadge(tx.status)} px-3 py-2`}>
//                                                 {tx.status}
//                                             </span>
//                                             <button
//                                                 onClick={() => handleViewProfile(tx.middlemanUsername)}
//                                                 className="btn btn-outline-primary btn-sm profile-btn"
//                                             >
//                                                 <i className="fas fa-eye mr-2"></i>View Profile
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {showProfileModal && selectedProfile && (
//                 <UserProfileModal
//                     user={selectedProfile}
//                     onClose={() => setShowProfileModal(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default MiddlemanTransactionPage;



// import React, { useEffect, useState } from "react";
// import { useApi } from '../services/api';
// import UserProfileModal from './UserProfileModal';
// import './MiddlemanTransactionPage.css';

// const MiddlemanTransactionPage = () => {
//     const api = useApi();
//     const [transactions, setTransactions] = useState([]);
//     const [selectedProfile, setSelectedProfile] = useState(null);
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [activeFilter, setActiveFilter] = useState('all');

//     useEffect(() => {
//         api.get("/api/transactions/middleman")
//             .then((response) => {
//                 setTransactions(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching transactions:", error);
//                 setIsLoading(false);
//             });
//     }, []);

//     const handleViewProfile = (farmerUsername) => {
//         api.get(`/api/transactions/profile/${farmerUsername}`)
//             .then((response) => {
//                 setSelectedProfile(response.data);
//                 setShowProfileModal(true);
//             })
//             .catch((error) => {
//                 console.error("Error fetching profile:", error);
//             });
//     };

//     const filteredTransactions = transactions.filter(tx => {
//         if (activeFilter === 'all') return true;
//         return tx.status.toLowerCase() === activeFilter;
//     });

//     const getStatusBadge = (status) => {
//         switch(status.toLowerCase()) {
//             case 'completed':
//                 return 'success';
//             case 'pending':
//                 return 'warning';
//             case 'failed':
//                 return 'danger';
//             default:
//                 return 'primary';
//         }
//     };

//     const getCropImage = (cropType) => {
//         const cropImages = {
//             'wheat': '🌾',
//             'rice': '🌾',
//             'corn': '🌽',
//             'vegetables': '🥬',
//             'fruits': '🍎',
//             'coffee': '☕',
//             'tea': '🍃',
//             'cotton': '🧵',
//             'sugarcane': '🎋'
//         };
//         return cropImages[cropType.toLowerCase()] || '🌱';
//     };

//     return (
//         <div className="agri-transaction-app">
//             {/* Animated Background Elements */}
//             <div className="leaf-decor leaf-1"></div>
//             <div className="leaf-decor leaf-2"></div>
//             <div className="leaf-decor leaf-3"></div>
            
//             <div className="page-header-container">
//                 <div className="page-header text-center">
//                     <h1 className="display-4 font-weight-bold text-white">
//                         <span className="header-icon">🌱</span> Harvest Transactions
//                     </h1>
//                     <p className="lead text-light">Your agricultural business records</p>
//                     <div className="header-decoration">
//                         <div className="decoration-line"></div>
//                         <div className="decoration-icon"><i className="fas fa-leaf"></i></div>
//                         <div className="decoration-line"></div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container-fluid py-5 main-content">
//                 {/* Filter Controls */}
//                 <div className="filter-controls mb-5">
//                     <div className="btn-group" role="group">
//                         <button 
//                             type="button" 
//                             className={`btn filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('all')}
//                         >
//                             All Transactions
//                         </button>
//                         <button 
//                             type="button" 
//                             className={`btn filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('completed')}
//                         >
//                             Completed
//                         </button>
//                         <button 
//                             type="button" 
//                             className={`btn filter-btn ${activeFilter === 'pending' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('pending')}
//                         >
//                             Pending
//                         </button>
//                     </div>
//                 </div>

//                 {isLoading ? (
//                     <div className="text-center py-5 loading-state">
//                         <div className="spinner-grow text-success" role="status">
//                             <span className="sr-only">Loading...</span>
//                         </div>
//                         <h4 className="mt-4 text-muted">Growing your transaction data...</h4>
//                         <div className="loading-bar">
//                             <div className="loading-progress"></div>
//                         </div>
//                     </div>
//                 ) : filteredTransactions.length === 0 ? (
//                     <div className="text-center py-5 empty-state">
//                         <div className="empty-illustration">
//                             <div className="plant-pot">
//                                 <div className="plant"></div>
//                             </div>
//                         </div>
//                         <h3 className="mt-4">No Transactions Found</h3>
//                         <p className="text-muted">Your transaction garden is empty. New records will bloom soon!</p>
//                         <button className="btn btn-outline-success mt-3 refresh-btn">
//                             <i className="fas fa-redo mr-2"></i>Refresh
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="row">
//                         {filteredTransactions.map((tx, index) => (
//                             <div key={tx.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
//                                 <div 
//                                     className={`card transaction-card h-100 delay-${index % 4}`}
//                                     data-status={tx.status.toLowerCase()}
//                                 >
//                                     <div className="card-crop-icon">
//                                         {getCropImage(tx.cropType)}
//                                     </div>
//                                     <div className="card-body">
//                                         <div className="transaction-header">
//                                             <h5 className="card-title">{tx.cropType}</h5>
//                                             <span className={`status-badge badge-${getStatusBadge(tx.status)}`}>
//                                                 {tx.status}
//                                             </span>
//                                         </div>
                                        
//                                         <div className="transaction-detail farmer-detail">
//                                             <div className="detail-icon">
//                                                 <i className="fas fa-user"></i>
//                                             </div>
//                                             <div className="detail-content">
//                                                 <small>Farmer</small>
//                                                 <p>{tx.farmerUsername}</p>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="transaction-detail middleman-detail">
//                                             <div className="detail-icon">
//                                                 <i className="fas fa-user-tie"></i>
//                                             </div>
//                                             <div className="detail-content">
//                                                 <small>Middleman</small>
//                                                 <p>{tx.middlemanUsername}</p>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="transaction-metrics">
//                                             <div className="metric-item">
//                                                 <div className="metric-icon">
//                                                     <i className="fas fa-weight-hanging"></i>
//                                                 </div>
//                                                 <div>
//                                                     <small>Quantity</small>
//                                                     <h6>{tx.quantity} kg</h6>
//                                                 </div>
//                                             </div>
//                                             <div className="metric-item">
//                                                 <div className="metric-icon">
//                                                     <i className="fas fa-rupee-sign"></i>
//                                                 </div>
//                                                 <div>
//                                                     <small>Price</small>
//                                                     <h6>₹{tx.price}</h6>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card-footer">
//                                         <button
//                                             onClick={() => handleViewProfile(tx.middlemanUsername)}
//                                             className="btn profile-btn"
//                                         >
//                                             <i className="fas fa-user-circle mr-2"></i>View Profile
//                                         </button>
//                                         <div className="transaction-date">
//                                             <i className="far fa-calendar-alt mr-2"></i>
//                                             {new Date().toLocaleDateString()}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {showProfileModal && selectedProfile && (
//                 <UserProfileModal
//                     user={selectedProfile}
//                     onClose={() => setShowProfileModal(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default MiddlemanTransactionPage;



import React, { useEffect, useState } from "react";
import { useApi } from '../services/api';
import UserProfileModal from './UserProfileModal';
import './MiddlemanTransactionPage.css';

const MiddlemanTransactionPage = () => {
    const api = useApi();
    const [transactions, setTransactions] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchTransactions = () => {
        setIsRefreshing(true);
        api.get("/api/transactions/middleman")
            .then((response) => {
                setTransactions(response.data);
                setIsLoading(false);
                setIsRefreshing(false);
            })
            .catch((error) => {
                console.error("Error fetching transactions:", error);
                setIsLoading(false);
                setIsRefreshing(false);
            });
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleViewProfile = (farmerUsername) => {
        api.get(`/api/transactions/profile/${farmerUsername}`)
            .then((response) => {
                setSelectedProfile(response.data);
                setShowProfileModal(true);
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });
    };

    const getStatusBadge = (status) => {
        switch(status.toLowerCase()) {
            case 'completed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'failed':
                return 'danger';
            default:
                return 'primary';
        }
    };

    const getCropImage = (cropType) => {
        const cropImages = {
            'wheat': '🌾',
            'rice': '🌾',
            'corn': '🌽',
            'vegetables': '🥬',
            'fruits': '🍎',
            'coffee': '☕',
            'tea': '🍃',
            'cotton': '🧵',
            'sugarcane': '🎋'
        };
        return cropImages[cropType.toLowerCase()] || '🌱';
    };

    return (
        <div className="agri-transaction-app">
            {/* Animated Background Elements */}
            <div className="leaf-decor leaf-1"></div>
            <div className="leaf-decor leaf-2"></div>
            <div className="leaf-decor leaf-3"></div>
            
            <div className="page-header-container">
                <div className="page-header text-center">
                    <h1 className="display-4 font-weight-bold text-white">
                        <span className="header-icon">🌱</span> Harvest Transactions
                    </h1>
                    <p className="lead text-light">Your agricultural business records</p>
                    <div className="header-decoration">
                        <div className="decoration-line"></div>
                        <div className="decoration-icon"><i className="fas fa-leaf"></i></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 main-content">
                {/* Refresh Button */}
                <div className="text-center mb-4">
                    <button 
                        onClick={fetchTransactions}
                        className="refresh-button"
                        disabled={isRefreshing}
                    >
                        <i className={`fas fa-sync-alt ${isRefreshing ? 'fa-spin' : ''}`}></i>
                        {isRefreshing ? ' Refreshing...' : ' Refresh Data'}
                    </button>
                </div>

                {isLoading ? (
                    <div className="text-center py-5 loading-state">
                        <div className="spinner-grow text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h4 className="mt-4 text-muted">Growing your transaction data...</h4>
                        <div className="loading-bar">
                            <div className="loading-progress"></div>
                        </div>
                    </div>
                ) : transactions.length === 0 ? (
                    <div className="text-center py-5 empty-state">
                        <div className="empty-illustration">
                            <div className="plant-pot">
                                <div className="plant"></div>
                            </div>
                        </div>
                        <h3 className="mt-4">No Transactions Found</h3>
                        <p className="text-muted">Your transaction garden is empty. New records will bloom soon!</p>
                        <button 
                            onClick={fetchTransactions}
                            className="refresh-button mt-3"
                        >
                            <i className="fas fa-sync-alt"></i> Try Refreshing
                        </button>
                    </div>
                ) : (
                    <div className="row">
                        {transactions.map((tx, index) => (
                            <div key={tx.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div 
                                    className={`card transaction-card h-100 delay-${index % 4}`}
                                    data-status={tx.status.toLowerCase()}
                                >
                                    <div className="card-crop-icon">
                                        {getCropImage(tx.cropType)}
                                    </div>
                                    <div className="card-body">
                                        <div className="transaction-header">
                                            <h5 className="card-title">{tx.cropType}</h5>
                                            <span className={`status-badge badge-${getStatusBadge(tx.status)}`}>
                                                {tx.status}
                                            </span>
                                        </div>
                                        
                                        <div className="transaction-detail farmer-detail">
                                            <div className="detail-icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="detail-content">
                                                <small>Farmer</small>
                                                <p>{tx.farmerUsername}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="transaction-detail middleman-detail">
                                            <div className="detail-icon">
                                                <i className="fas fa-user-tie"></i>
                                            </div>
                                            <div className="detail-content">
                                                <small>Middleman</small>
                                                <p>{tx.middlemanUsername}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="transaction-metrics">
                                            <div className="metric-item">
                                                <div className="metric-icon">
                                                    <i className="fas fa-weight-hanging"></i>
                                                </div>
                                                <div>
                                                    <small>Quantity</small>
                                                    <h6>{tx.quantity} kg</h6>
                                                </div>
                                            </div>
                                            <div className="metric-item">
                                                <div className="metric-icon">
                                                    <i className="fas fa-rupee-sign"></i>
                                                </div>
                                                <div>
                                                    <small>Price</small>
                                                    <h6>₹{tx.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            onClick={() => handleViewProfile(tx.middlemanUsername)}
                                            className="btn profile-btn"
                                        >
                                            <i className="fas fa-user-circle mr-2"></i>View Profile
                                        </button>
                                        <div className="transaction-date">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {new Date().toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {showProfileModal && selectedProfile && (
                <UserProfileModal
                    user={selectedProfile}
                    onClose={() => setShowProfileModal(false)}
                />
            )}
        </div>
    );
};

export default MiddlemanTransactionPage;