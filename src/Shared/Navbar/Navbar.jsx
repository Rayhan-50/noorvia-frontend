




// import React, { useState, useContext, useEffect } from 'react';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';
// import { MessageCircle } from 'lucide-react';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'Company Profile', path: '/company-profile' },
//   { name: 'Products & Services', path: '/products-services' },
//   { name: 'Investor Connect', path: '/investor-connect' },
//   { name: 'Performers\' Club', path: '/performers-club' },
//   { name: 'Contact', path: '/contact' },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);
//   const [userData, setUserData] = useState({});
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (user) {
//       setUserData({
//         displayName: user.displayName || 'User',
//         email: user.email || '',
//         photoURL: user.photoURL || '',
//       });
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => navigate('/'))
//       .catch((err) => console.error(err));
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
//       <nav className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
          
//           {/* Logo */}
//           <NavLink to="/" className="flex items-center space-x-2 group">
//             <img 
//               src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" 
//               alt="NoorVia BD Logo" 
//               className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
//             />
//             <span className="text-xl font-bold text-gray-900 hidden sm:block">NoorVia BD</span>
//           </NavLink>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             {navLinks.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative hover:scale-105 ${
//                   isActive(item.path)
//                     ? 'text-blue-700'
//                     : 'text-gray-700 hover:text-blue-700'
//                 }`}
//               >
//                 {item.name}
//                 {isActive(item.path) && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full animate-pulse" />
//                 )}
//               </NavLink>
//             ))}

//             {/* Auth Buttons */}
//             {user ? (
//               <>
//                 <NavLink
//                   to="/dashboard"
//                   className="px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-900"
//                 >
//                   Dashboard
//                 </NavLink>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-[#DA3A60] hover:bg-[#DA3A60]/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="px-4 py-2 rounded-lg text-blue-700 hover:text-blue-900 transition"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   className="bg-[#DA3A60] text-white px-4 py-2 rounded-lg hover:bg-[#DA3A60]/90 transition"
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             )}

//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/8801234567890?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl flex items-center space-x-2 group animate-pulse hover:animate-none"
//             >
//               <MessageCircle className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
//               <span>Contact Us</span>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
//             >
//               {menuOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div className="lg:hidden py-4 border-t bg-white shadow-lg rounded-b-lg">
//             <div className="flex flex-col space-y-2">
//               {navLinks.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={`px-3 py-3 text-sm font-medium rounded-md transition-all duration-300 transform hover:scale-105 ${
//                     isActive(item.path)
//                       ? 'text-blue-700 bg-blue-50'
//                       : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}

//               {user ? (
//                 <>
//                   <NavLink
//                     to="/dashboard"
//                     onClick={() => setMenuOpen(false)}
//                     className="px-3 py-3 text-sm font-medium text-blue-700 hover:text-blue-900"
//                   >
//                     Dashboard
//                   </NavLink>
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       setMenuOpen(false);
//                     }}
//                     className="px-3 py-3 text-sm font-medium text-red-600 hover:text-red-800"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <NavLink
//                     to="/login"
//                     onClick={() => setMenuOpen(false)}
//                     className="px-3 py-3 text-sm font-medium text-blue-700 hover:text-blue-900"
//                   >
//                     Login
//                   </NavLink>
//                   <NavLink
//                     to="/signup"
//                     onClick={() => setMenuOpen(false)}
//                     className="px-3 py-3 text-sm font-medium text-white bg-[#DA3A60] hover:bg-[#DA3A60]/90 rounded-lg mx-3 mt-2"
//                   >
//                     Sign Up
//                   </NavLink>
//                 </>
//               )}

//               {/* WhatsApp Contact Button (Mobile) */}
//               <a
//                 href="https://wa.me/8801234567890?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={() => setMenuOpen(false)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group mx-3 mt-2 shadow-lg"
//               >
//                 <MessageCircle className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
//                 <span>Contact Us on WhatsApp</span>
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };


// export default Navbar;









import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { MessageCircle } from 'lucide-react';

const navLinks = [
  { name: 'Company Profile', path: '/company-profile' },
  { name: 'Products & Services', path: '/products-services' },
  { name: 'Investor Connect', path: '/investor-connect' },
  { name: 'Performer\'s Club', path: '/performers-club' },
  { name: 'Get in Touch', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setUserData({
        displayName: user.displayName || 'User',
        email: user.email || '',
        photoURL: user.photoURL || '',
      });
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  const isActive = (path) => location.pathname === path;

  return (
        <header className="bg-transparent sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-2xl border border-gray-600/30 my-4">
          <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex justify-between items-center h-20 w-full">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1756129371/logofalnnoor_v7rdzp.png" 
              alt="NoorVia BD Logo" 
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`px-2 py-2 text-sm font-medium transition-all duration-300 relative hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-[#D0A96A] font-semibold'
                    : 'text-white hover:text-[#D0A96A]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D0A96A] rounded-full" />
                )}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] transition-all duration-300 hover:bg-gray-700/50 rounded-md"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  Sign Up
                </NavLink>
              </>
            )}

            {/* Contact Button */}
            <a
              href="https://wa.me/8801234567890?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gray-800 hover:shadow-2xl hover:shadow-black/50 border-2 border-black hover:border-gray-700"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-[#111827] hover:text-[#0A3D91] hover:bg-[#F9FAFB] transition-all duration-300"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden py-4 bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl sm:rounded-4xl border border-gray-600/30 mt-2 mx-4 sm:mx-6 lg:mx-8 xl:mx-10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#D0A96A] bg-gray-700/50 font-semibold'
                      : 'text-white hover:text-[#D0A96A] hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}

              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] hover:bg-gray-700/50 rounded-md"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-medium text-[#B91C1C] hover:text-[#991B1B] hover:bg-[#FEF2F2] rounded-md text-left w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 text-sm font-medium bg-[#FAF3E0] text-[#111827] border border-[#111827] rounded-full mx-4 mt-2 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}

              {/* Contact Button (Mobile) */}
              <a
                href="https://wa.me/8801234567890?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white px-6 py-3 rounded-full font-bold transition-all duration-300 mx-4 mt-2 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/30 border-2 border-black hover:border-gray-700"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;