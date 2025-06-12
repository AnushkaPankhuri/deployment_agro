import React from 'react';

function UserProfileModal({ user, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start p-4 overflow-auto">
            <div className="bg-white p-6 rounded shadow max-w-md w-full">
                <button className="float-right text-lg" onClick={onClose}>✕</button>
                <div className="text-center">
                    <img
                        src={user.profilePicUrl || '/default-profile.png'}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold">{user.username}</h3>
                    <p>{user.email} · {user.phoneNumber}</p>
                    <p>{user.address}</p>
                    <p><strong>Bio:</strong> {user.bio}</p>
                    <p><strong>Company:</strong> {user.companyName}</p>
                    <p><strong>Business type:</strong> {user.businessType}</p>
                    <p><strong>Regions:</strong> {user.marketRegions}</p>
                    <p><strong>License No:</strong> {user.businessLicenseNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfileModal;
