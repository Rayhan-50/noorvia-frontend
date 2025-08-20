// import React, { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const Profile = () => {
//     const { user } = useContext(AuthContext);

//     return (
//         <div>
//             {user ? (
//                 <h2>Welcome, {user.name || 'User'}</h2>
//             ) : (
//                 <p>No user is logged in</p>
//             )}
//         </div>
//     );
// };

// export default Profile;

import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            {user ? (
                <div>
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
                        />
                    )}
                    <h2>Welcome, {user.name || 'User'}</h2>
                    <p>Email: {user.email || 'No email provided'}</p>
                </div>
            ) : (
                <p>No user is logged in</p>
            )}
        </div>
    );
};

export default Profile;