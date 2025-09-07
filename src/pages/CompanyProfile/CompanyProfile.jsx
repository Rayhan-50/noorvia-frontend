


// import React, { useEffect, useState } from 'react';
// import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield, Loader2 } from 'lucide-react';
// import useAxiosPublic from '../../hooks/useAxiosPublic';

// const colorClasses = {
//   blue:   'bg-blue-100 text-blue-700',
//   teal:   'bg-teal-100 text-teal-700',
//   green:  'bg-green-100 text-green-700',
//   orange: 'bg-orange-100 text-orange-700',
// };

// const CompanyProfile = () => {
//   const axiosPublic = useAxiosPublic();
//   const [members, setMembers] = useState([]);
//   const [teamLoading, setTeamLoading] = useState(true);
//   const [teamError, setTeamError] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         const { data } = await axiosPublic.get('/team'); // expects array from backend
//         if (mounted) setMembers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         if (mounted) setTeamError(err?.response?.data?.message || 'Failed to load team');
//       } finally {
//         if (mounted) setTeamLoading(false);
//       }
//     })();
//     return () => { mounted = false; };
//   }, [axiosPublic]);

//   return (
//     <div className="">
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <img
//             src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png"
//             alt="NoorVia BD Logo"
//             className="h-20 w-auto mx-auto mb-6"
//           />
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Profile</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
//           </p>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
//               </p>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-2xl font-bold text-blue-700">500+</div>
//                   <div className="text-sm text-blue-600">Businesses Supported</div>
//                 </div>
//                 <div className="text-center p-4 bg-teal-50 rounded-lg">
//                   <div className="text-2xl font-bold text-teal-700">50+</div>
//                   <div className="text-sm text-teal-600">Countries Reached</div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
//                   <Award className="h-8 w-8 text-blue-700 mb-3" />
//                   <h3 className="font-semibold text-blue-900 mb-2">Excellence</h3>
//                   <p className="text-sm text-blue-700">Committed to delivering exceptional business solutions</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-xl">
//                   <Shield className="h-8 w-8 text-teal-700 mb-3" />
//                   <h3 className="font-semibold text-teal-900 mb-2">Trust</h3>
//                   <p className="text-sm text-teal-700">Building lasting relationships through integrity</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
//                   <Users className="h-8 w-8 text-green-700 mb-3" />
//                   <h3 className="font-semibold text-green-900 mb-2">Collaboration</h3>
//                   <p className="text-sm text-green-700">Fostering partnerships for mutual growth</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl">
//                   <TrendingUp className="h-8 w-8 text-orange-700 mb-3" />
//                   <h3 className="font-semibold text-orange-900 mb-2">Innovation</h3>
//                   <p className="text-sm text-orange-700">Embracing new ideas and technologies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <Target className="h-12 w-12 text-blue-700 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Empowering businesses through comprehensive solutions and strategic partnerships
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: 'Business Consultation & Network Support', description: 'Providing expert guidance and building strong professional networks for sustainable growth', icon: Users, color: 'blue' },
//               { title: 'Indenting', description: 'Facilitating seamless procurement processes and supplier connections for businesses', icon: Building2, color: 'teal' },
//               { title: 'Sourcing', description: 'Connecting businesses with quality suppliers and resources globally', icon: Globe, color: 'green' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg ${colorClasses[item.color]} mb-4`}>
//                   <item.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <Eye className="h-12 w-12 text-teal-700 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
//             </p>
//           </div>
//           <div className="space-y-8">
//             {[
//               { title: 'Provide Legal Platform for New Entrepreneurs', description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks', icon: Shield },
//               { title: 'Develop Business Network', description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers', icon: Users },
//               { title: 'Global Import and Export Solution', description: 'Facilitating international trade through comprehensive import and export support services', icon: Globe },
//               { title: 'Connect Local Business with International Platform', description: 'Bridging local enterprises with global opportunities and international market access', icon: TrendingUp },
//               { title: 'Legal Documentation Support', description: 'Providing comprehensive legal documentation assistance for business operations and compliance', icon: Building2 },
//               { title: 'Strategic Business Consulting & Partnership', description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success', icon: Target },
//             ].map((item, index) => (
//               <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                 <div className="flex-shrink-0">
//                   <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700">
//                     <item.icon className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-700 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section (Dynamic) */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
//             </p>
//           </div>

//           {teamLoading ? (
//             <div className="text-center py-12">
//               <Loader2 className="h-8 w-8 mx-auto animate-spin text-blue-600" />
//               <p className="text-gray-600 mt-3">Loading team…</p>
//             </div>
//           ) : teamError ? (
//             <div className="text-center py-12">
//               <p className="text-red-600 font-medium">{teamError}</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {members.map((member) => (
//                 <div key={member._id || member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                   <div className="w-full h-64 overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                     <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
//                     {member.bio && <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>}
//                     {Array.isArray(member.expertise) && member.expertise.length > 0 && (
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {member.expertise.map((skill, i) => (
//                             <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Company Values Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-lg text-gray-600">
//               The principles that guide our decisions and shape our culture
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards', icon: Shield, color: 'blue' },
//               { title: 'Excellence', description: 'We strive for the highest quality in everything we do', icon: Award, color: 'teal' },
//               { title: 'Innovation', description: 'We embrace new ideas and technologies to better serve our clients', icon: TrendingUp, color: 'green' },
//               { title: 'Partnership', description: 'We build lasting relationships based on mutual trust and respect', icon: Users, color: 'orange' },
//             ].map((value, index) => (
//               <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg ${colorClasses[value.color]} mb-4`}>
//                   <value.icon className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-700">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Partner With Us
//             </a>
//             <a
//               href="/products-services"
//               className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
//             >
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CompanyProfile;


// import React, { useEffect, useState } from 'react';
// import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield, Loader2, CheckCircle, MessageCircle, ArrowRight, X, Mail, Phone } from 'lucide-react';
// import useAxiosPublic from '../../hooks/UseAxiosPublic';

// const colorClasses = {
//   royalBlue: 'bg-[#0A3D91]/10 text-[#0A3D91]',
//   goldSand: 'bg-[#D0A96A]/10 text-[#D0A96A]',
//   success: 'bg-[#2E7D32]/10 text-[#2E7D32]',
//   info: 'bg-[#0284C7]/10 text-[#0284C7]',
// };

// const CompanyProfile = () => {
//   const axiosPublic = useAxiosPublic();
//   const [members, setMembers] = useState([]);
//   const [teamLoading, setTeamLoading] = useState(true);
//   const [teamError, setTeamError] = useState(null);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         const { data } = await axiosPublic.get('/team'); // expects array from backend
//         if (mounted) setMembers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error('Team loading error:', err);
//         if (mounted) setTeamError(err?.response?.data?.message || 'Failed to load team');
//       } finally {
//         if (mounted) setTeamLoading(false);
//       }
//     })();
//     return () => { mounted = false; };
//   }, [axiosPublic]);

//   const handleViewDetails = (member) => {
//     setSelectedMember(member);
//     setShowDetailsModal(true);
//   };

//   const closeDetailsModal = () => {
//     setShowDetailsModal(false);
//     setSelectedMember(null);
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
//           <div className="inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-4 sm:mb-6">
//             <Building2 className="h-16 w-16 sm:h-20 sm:w-20" />
//           </div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Company Profile</h1>
//           <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto px-4">
//             Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
//           </p>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">About Us</h2>
//               <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
//                 NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
//               </p>
//               <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
//                 Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
//               </p>
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div className="text-center p-3 sm:p-4 bg-[#0A3D91]/10 rounded-lg">
//                   <div className="text-xl sm:text-2xl font-bold text-[#0A3D91]">500+</div>
//                   <div className="text-xs sm:text-sm text-[#0A3D91]">Businesses Supported</div>
//                 </div>
//                 <div className="text-center p-3 sm:p-4 bg-[#D0A96A]/10 rounded-lg">
//                   <div className="text-xl sm:text-2xl font-bold text-[#D0A96A]">50+</div>
//                   <div className="text-xs sm:text-sm text-[#D0A96A]">Countries Reached</div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 sm:mt-10 lg:mt-0">
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
//                   <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Excellence</h3>
//                   <p className="text-xs sm:text-sm text-[#0A3D91]">Committed to delivering exceptional business solutions</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
//                   <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Trust</h3>
//                   <p className="text-xs sm:text-sm text-[#D0A96A]">Building lasting relationships through integrity</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#2E7D32]/20 to-[#2E7D32]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#2E7D32]/20">
//                   <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#2E7D32] mb-1 sm:mb-2">Collaboration</h3>
//                   <p className="text-xs sm:text-sm text-[#2E7D32]">Fostering partnerships for mutual growth</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
//                   <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Innovation</h3>
//                   <p className="text-xs sm:text-sm text-[#D0A96A]">Embracing new ideas and technologies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-12 sm:py-16 bg-[#F9FAFB]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <Target className="h-10 w-10 sm:h-12 sm:w-12 text-[#0A3D91] mx-auto mb-3 sm:mb-4" />
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Mission</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Empowering businesses through comprehensive solutions and strategic partnerships
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               { title: 'Business Consultation & Network Support', description: 'Providing expert guidance and building strong professional networks for sustainable growth', icon: Users, color: 'royalBlue' },
//               { title: 'Indenting', description: 'Facilitating seamless procurement processes and supplier connections for businesses', icon: Building2, color: 'goldSand' },
//               { title: 'Sourcing', description: 'Connecting businesses with quality suppliers and resources globally', icon: Globe, color: 'success' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
//                 <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[item.color]} mb-3 sm:mb-4`}>
//                   <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{item.title}</h3>
//                 <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#D0A96A] mx-auto mb-3 sm:mb-4" />
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Vision</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
//             </p>
//           </div>
//           <div className="space-y-6 sm:space-y-8">
//             {[
//               { title: 'Provide Legal Platform for New Entrepreneurs', description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks', icon: Shield },
//               { title: 'Develop Business Network', description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers', icon: Users },
//               { title: 'Global Import and Export Solution', description: 'Facilitating international trade through comprehensive import and export support services', icon: Globe },
//               { title: 'Connect Local Business with International Platform', description: 'Bridging local enterprises with global opportunities and international market access', icon: TrendingUp },
//               { title: 'Legal Documentation Support', description: 'Providing comprehensive legal documentation assistance for business operations and compliance', icon: Building2 },
//               { title: 'Strategic Business Consulting & Partnership', description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success', icon: Target },
//             ].map((item, index) => (
//               <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#F9FAFB] rounded-lg sm:rounded-xl hover:bg-[#F3F4F6] transition-colors border border-[#E5E7EB]">
//                 <div className="flex-shrink-0">
//                   <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
//                     <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
//                   <p className="text-sm sm:text-base text-[#111827] leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section (Dynamic) */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Leadership Team</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
//             </p>
//           </div>

//           {teamLoading ? (
//             <div className="text-center py-12">
//               <Loader2 className="h-8 w-8 mx-auto animate-spin text-[#0A3D91]" />
//               <p className="text-[#6B7280] mt-3">Loading team…</p>
//             </div>
//           ) : teamError ? (
//             <div className="text-center py-12">
//               <p className="text-[#B91C1C] font-medium">{teamError}</p>
//             </div>
//           ) : members.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               {members.map((member) => (
//                 <div key={member._id || member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
//                   {/* Profile Image Section - 60% of card height */}
//                   <div className="w-full h-60 sm:h-72 bg-gray-100 p-3 flex items-center justify-center">
//                     <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200">
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full object-cover rounded-xl"
//                         loading="lazy"
//                         onError={(e) => {
//                           e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* Information Section */}
//                   <div className="p-4 sm:p-6 flex flex-col flex-1">
//                     {/* Name with Verification Badge */}
//                     <div className="flex items-center justify-center mb-3">
//                       <h3 className="text-lg sm:text-xl font-bold text-[#111827] mr-2">{member.name}</h3>
//                       <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2E7D32] rounded-full flex items-center justify-center">
//                         <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                       </div>
//                     </div>

//                     {/* Designation */}
//                     <p className="text-sm sm:text-base text-[#6B7280] text-center mb-4">
//                       {member.position}
//                     </p>

//                     {/* Bio */}
//                     {member.bio && (
//                       <p className="text-sm text-[#6B7280] text-center mb-4 leading-relaxed line-clamp-3">
//                         {member.bio}
//                       </p>
//                     )}

//                     {/* Statistics Row */}
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center space-x-2">
//                         <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
//                         <span className="text-sm sm:text-base text-[#111827] font-medium">15+</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
//                         <span className="text-sm sm:text-base text-[#111827] font-medium">8</span>
//                       </div>
//                     </div>

//                     {/* View Details Button - Positioned at bottom */}
//                     <div className="mt-auto">
//                       <button 
//                         onClick={() => handleViewDetails(member)}
//                         className="w-full bg-gray-100 hover:bg-gray-200 text-[#111827] px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
//                       >
//                         <span>View Details</span>
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-[#6B7280] font-medium">No team members available at the moment.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Company Values Section */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Core Values</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] px-4">
//               The principles that guide our decisions and shape our culture
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {[
//               { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards', icon: Shield, color: 'royalBlue' },
//               { title: 'Excellence', description: 'We strive for the highest quality in everything we do', icon: Award, color: 'goldSand' },
//               { title: 'Innovation', description: 'We embrace new ideas and technologies to better serve our clients', icon: TrendingUp, color: 'success' },
//               { title: 'Partnership', description: 'We build lasting relationships based on mutual trust and respect', icon: Users, color: 'info' },
//             ].map((value, index) => (
//               <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
//                 <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[value.color]} mb-3 sm:mb-4`}>
//                   <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{value.title}</h3>
//                 <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
//         <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission</h2>
//           <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
//             Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
//             >
//               Partner With Us
//             </a>
//             <a
//               href="/products-services"
//               className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
//             >
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Member Details Modal */}
//       {showDetailsModal && selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <h3 className="text-xl font-bold text-[#111827]">Team Member Details</h3>
//               <button
//                 onClick={closeDetailsModal}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6">
//               {/* Profile Image and Basic Info */}
//               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
//                   <img
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
//                     }}
//                   />
//                 </div>
//                 <div className="text-center sm:text-left flex-1">
//                   <div className="flex items-center justify-center sm:justify-start mb-3">
//                     <h2 className="text-2xl font-bold text-[#111827] mr-3">{selectedMember.name}</h2>
//                     <div className="w-6 h-6 bg-[#2E7D32] rounded-full flex items-center justify-center">
//                       <CheckCircle className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                   <p className="text-lg text-[#0A3D91] font-semibold mb-2">{selectedMember.position}</p>
//                   {selectedMember.bio && (
//                     <p className="text-[#6B7280] leading-relaxed">{selectedMember.bio}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Expertise Section */}
//               {Array.isArray(selectedMember.expertise) && selectedMember.expertise.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-[#111827] mb-3">Areas of Expertise</h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {selectedMember.expertise.map((skill, index) => (
//                       <div key={index} className="flex items-center space-x-2">
//                         <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
//                         <span className="text-[#111827]">{skill}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Contact Information */}
//               <div className="bg-[#FAF3E0] p-4 rounded-lg border border-[#D0A96A]/20">
//                 <h4 className="text-lg font-semibold text-[#111827] mb-3">Contact Information</h4>
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-3">
//                     <Mail className="w-5 h-5 text-[#0A3D91]" />
//                     <span className="text-[#111827]">contact@noorviabd.com</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Phone className="w-5 h-5 text-[#0A3D91]" />
//                     <span className="text-[#111827]">+880 1849 995 274</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
//               <button
//                 onClick={closeDetailsModal}
//                 className="px-6 py-2 text-[#6B7280] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Close
//               </button>
//               <button className="px-6 py-2 bg-[#0A3D91] text-white rounded-lg hover:bg-[#08306B] transition-colors">
//                 Contact Member
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyProfile;

// import React, { useEffect, useState } from 'react';
// import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield, Loader2, CheckCircle, MessageCircle, ArrowRight, X, Mail, Phone } from 'lucide-react';
// import useAxiosPublic from '../../hooks/UseAxiosPublic';

// const colorClasses = {
//   royalBlue: 'bg-[#0A3D91]/10 text-[#0A3D91]',
//   goldSand: 'bg-[#D0A96A]/10 text-[#D0A96A]',
//   success: 'bg-[#2E7D32]/10 text-[#2E7D32]',
//   info: 'bg-[#0284C7]/10 text-[#0284C7]',
// };

// const CompanyProfile = () => {
//   const axiosPublic = useAxiosPublic();
//   const [members, setMembers] = useState([]);
//   const [teamLoading, setTeamLoading] = useState(true);
//   const [teamError, setTeamError] = useState(null);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         const { data } = await axiosPublic.get('/team'); // expects array from backend
//         if (mounted) setMembers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error('Team loading error:', err);
//         if (mounted) setTeamError(err?.response?.data?.message || 'Failed to load team');
//       } finally {
//         if (mounted) setTeamLoading(false);
//       }
//     })();
//     return () => { mounted = false; };
//   }, [axiosPublic]);

//   const handleViewDetails = (member) => {
//     setSelectedMember(member);
//     setShowDetailsModal(true);
//   };

//   const closeDetailsModal = () => {
//     setShowDetailsModal(false);
//     setSelectedMember(null);
//   };

//   const handleContactMember = (phone) => {
//     if (phone) {
//       // Remove any non-digit characters from phone number
//       const cleanPhone = phone.replace(/\D/g, '');
//       // Construct WhatsApp URL
//       const whatsappUrl = `https://wa.me/${cleanPhone}`;
//       window.open(whatsappUrl, '_blank');
//     }
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
//           <div className="inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-4 sm:mb-6">
//             <Building2 className="h-16 w-16 sm:h-20 sm:w-20" />
//           </div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Company Profile</h1>
//           <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto px-4">
//             Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
//           </p>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">About Us</h2>
//               <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
//                 NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
//               </p>
//               <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
//                 Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
//               </p>
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div className="text-center p-3 sm:p-4 bg-[#0A3D91]/10 rounded-lg">
//                   <div className="text-xl sm:text-2xl font-bold text-[#0A3D91]">500+</div>
//                   <div className="text-xs sm:text-sm text-[#0A3D91]">Businesses Supported</div>
//                 </div>
//                 <div className="text-center p-3 sm:p-4 bg-[#D0A96A]/10 rounded-lg">
//                   <div className="text-xl sm:text-2xl font-bold text-[#D0A96A]">50+</div>
//                   <div className="text-xs sm:text-sm text-[#D0A96A]">Countries Reached</div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 sm:mt-10 lg:mt-0">
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
//                   <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Excellence</h3>
//                   <p className="text-xs sm:text-sm text-[#0A3D91]">Committed to delivering exceptional business solutions</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
//                   <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Trust</h3>
//                   <p className="text-xs sm:text-sm text-[#D0A96A]">Building lasting relationships through integrity</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#2E7D32]/20 to-[#2E7D32]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#2E7D32]/20">
//                   <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#2E7D32] mb-1 sm:mb-2">Collaboration</h3>
//                   <p className="text-xs sm:text-sm text-[#2E7D32]">Fostering partnerships for mutual growth</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
//                   <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
//                   <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Innovation</h3>
//                   <p className="text-xs sm:text-sm text-[#D0A96A]">Embracing new ideas and technologies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-12 sm:py-16 bg-[#F9FAFB]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <Target className="h-10 w-10 sm:h-12 sm:w-12 text-[#0A3D91] mx-auto mb-3 sm:mb-4" />
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Mission</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Empowering businesses through comprehensive solutions and strategic partnerships
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               { title: 'Business Consultation & Network Support', description: 'Providing expert guidance and building strong professional networks for sustainable growth', icon: Users, color: 'royalBlue' },
//               { title: 'Indenting', description: 'Facilitating seamless procurement processes and supplier connections for businesses', icon: Building2, color: 'goldSand' },
//               { title: 'Sourcing', description: 'Connecting businesses with quality suppliers and resources globally', icon: Globe, color: 'success' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
//                 <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[item.color]} mb-3 sm:mb-4`}>
//                   <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{item.title}</h3>
//                 <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#D0A96A] mx-auto mb-3 sm:mb-4" />
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Vision</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
//             </p>
//           </div>
//           <div className="space-y-6 sm:space-y-8">
//             {[
//               { title: 'Provide Legal Platform for New Entrepreneurs', description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks', icon: Shield },
//               { title: 'Develop Business Network', description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers', icon: Users },
//               { title: 'Global Import and Export Solution', description: 'Facilitating international trade through comprehensive import and export support services', icon: Globe },
//               { title: 'Connect Local Business with International Platform', description: 'Bridging local enterprises with global opportunities and international market access', icon: TrendingUp },
//               { title: 'Legal Documentation Support', description: 'Providing comprehensive legal documentation assistance for business operations and compliance', icon: Building2 },
//               { title: 'Strategic Business Consulting & Partnership', description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success', icon: Target },
//             ].map((item, index) => (
//               <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#F9FAFB] rounded-lg sm:rounded-xl hover:bg-[#F3F4F6] transition-colors border border-[#E5E7EB]">
//                 <div className="flex-shrink-0">
//                   <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
//                     <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
//                   <p className="text-sm sm:text-base text-[#111827] leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section (Dynamic) */}
//       <section className="py-12 sm:py-16 bg-[#FAF3E0]">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Leadership Team</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
//               Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
//             </p>
//           </div>

//           {teamLoading ? (
//             <div className="text-center py-12">
//               <Loader2 className="h-8 w-8 mx-auto animate-spin text-[#0A3D91]" />
//               <p className="text-[#6B7280] mt-3">Loading team…</p>
//             </div>
//           ) : teamError ? (
//             <div className="text-center py-12">
//               <p className="text-[#B91C1C] font-medium">{teamError}</p>
//             </div>
//           ) : members.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               {members.map((member) => (
//                 <div key={member._id || member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
//                   {/* Profile Image Section - 60% of card height */}
//                   <div className="w-full h-60 sm:h-72 bg-gray-100 p-3 flex items-center justify-center">
//                     <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200">
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full object-cover rounded-xl"
//                         loading="lazy"
//                         onError={(e) => {
//                           e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* Information Section */}
//                   <div className="p-4 sm:p-6 flex flex-col flex-1">
//                     {/* Name with Verification Badge */}
//                     <div className="flex items-center justify-center mb-3">
//                       <h3 className="text-lg sm:text-xl font-bold text-[#111827] mr-2">{member.name}</h3>
//                       <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2E7D32] rounded-full flex items-center justify-center">
//                         <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                       </div>
//                     </div>

//                     {/* Designation */}
//                     <p className="text-sm sm:text-base text-[#6B7280] text-center mb-4">
//                       {member.position}
//                     </p>

//                     {/* Bio */}
//                     {member.bio && (
//                       <p className="text-sm text-[#6B7280] text-center mb-4 leading-relaxed line-clamp-3">
//                         {member.bio}
//                       </p>
//                     )}

//                     {/* Statistics Row */}
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center space-x-2">
//                         <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
//                         <span className="text-sm sm:text-base text-[#111827] font-medium">15+</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
//                         <span className="text-sm sm:text-base text-[#111827] font-medium">8</span>
//                       </div>
//                     </div>

//                     {/* View Details Button - Positioned at bottom */}
//                     <div className="mt-auto">
//                       <button 
//                         onClick={() => handleViewDetails(member)}
//                         className="w-full bg-gray-100 hover:bg-gray-200 text-[#111827] px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
//                       >
//                         <span>View Details</span>
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-[#6B7280] font-medium">No team members available at the moment.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Company Values Section */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Core Values</h2>
//             <p className="text-base sm:text-lg text-[#6B7280] px-4">
//               The principles that guide our decisions and shape our culture
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {[
//               { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards', icon: Shield, color: 'royalBlue' },
//               { title: 'Excellence', description: 'We strive for the highest quality in everything we do', icon: Award, color: 'goldSand' },
//               { title: 'Innovation', description: 'We embrace new ideas and technologies to better serve our clients', icon: TrendingUp, color: 'success' },
//               { title: 'Partnership', description: 'We build lasting relationships based on mutual trust and respect', icon: Users, color: 'info' },
//             ].map((value, index) => (
//               <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
//                 <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[value.color]} mb-3 sm:mb-4`}>
//                   <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{value.title}</h3>
//                 <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
//         <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission</h2>
//           <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
//             Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
//             >
//               Partner With Us
//             </a>
//             <a
//               href="/products-services"
//               className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
//             >
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Member Details Modal */}
//       {showDetailsModal && selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <h3 className="text-xl font-bold text-[#111827]">Team Member Details</h3>
//               <button
//                 onClick={closeDetailsModal}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6">
//               {/* Profile Image and Basic Info */}
//               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
//                   <img
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
//                     }}
//                   />
//                 </div>
//                 <div className="text-center sm:text-left flex-1">
//                   <div className="flex items-center justify-center sm:justify-start mb-3">
//                     <h2 className="text-2xl font-bold text-[#111827] mr-3">{selectedMember.name}</h2>
//                     <div className="w-6 h-6 bg-[#2E7D32] rounded-full flex items-center justify-center">
//                       <CheckCircle className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                   <p className="text-lg text-[#0A3D91] font-semibold mb-2">{selectedMember.position}</p>
//                   {selectedMember.bio && (
//                     <p className="text-[#6B7280] leading-relaxed">{selectedMember.bio}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Expertise Section */}
//               {Array.isArray(selectedMember.expertise) && selectedMember.expertise.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-[#111827] mb-3">Areas of Expertise</h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {selectedMember.expertise.map((skill, index) => (
//                       <div key={index} className="flex items-center space-x-2">
//                         <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
//                         <span className="text-[#111827]">{skill}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Contact Information */}
//               <div className="bg-[#FAF3E0] p-4 rounded-lg border border-[#D0A96A]/20">
//                 <h4 className="text-lg font-semibold text-[#111827] mb-3">Contact Information</h4>
//                 <div className="space-y-2">
//                   {selectedMember.email && (
//                     <div className="flex items-center space-x-3">
//                       <Mail className="w-5 h-5 text-[#0A3D91]" />
//                       <span className="text-[#111827]">{selectedMember.email}</span>
//                     </div>
//                   )}
//                   {selectedMember.phone && (
//                     <div className="flex items-center space-x-3">
//                       <Phone className="w-5 h-5 text-[#0A3D91]" />
//                       <span className="text-[#111827]">{selectedMember.phone}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
//               <button
//                 onClick={closeDetailsModal}
//                 className="px-6 py-2 text-[#6B7280] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => handleContactMember(selectedMember.phone)}
//                 className="px-6 py-2 bg-[#0A3D91] text-white rounded-lg hover:bg-[#08306B] transition-colors"
//                 disabled={!selectedMember.phone}
//               >
//                 Contact Member
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyProfile;

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield,
  Loader2, CheckCircle, MessageCircle, ArrowRight, X, Mail, Phone
} from "lucide-react";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

const colorClasses = {
  royalBlue: "bg-[#0A3D91]/10 text-[#0A3D91]",
  goldSand: "bg-[#D0A96A]/10 text-[#D0A96A]",
  success: "bg-[#2E7D32]/10 text-[#2E7D32]",
  info: "bg-[#0284C7]/10 text-[#0284C7]",
};

const PLACEHOLDER_IMG =
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      <div className="w-full h-60 sm:h-72 bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 bg-gray-200 rounded" />
          <div className="h-8 bg-gray-200 rounded" />
          <div className="h-8 bg-gray-200 rounded" />
        </div>
        <div className="h-10 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function FocusTrapModal({ isOpen, onClose, titleId, children }) {
  const dialogRef = useRef(null);

  // lock background scroll
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // basic focus trap + Esc
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const selector =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
    const focusables = () => Array.from(dialog.querySelectorAll(selector));
    const previouslyFocused = document.activeElement;

    // move focus inside
    const toFocus = focusables()[0] || dialog;
    toFocus.focus?.();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        const nodes = focusables();
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(e) => {
        // close if clicking backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto outline-none"
        ref={dialogRef}
      >
        {children}
      </div>
    </div>
  );
}

const CompanyProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [members, setMembers] = useState([]);
  const [teamLoading, setTeamLoading] = useState(true);
  const [teamError, setTeamError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axiosPublic.get("/team");
        if (mounted) setMembers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Team loading error:", err);
        if (mounted)
          setTeamError(err?.response?.data?.message || "Failed to load team");
      } finally {
        if (mounted) setTeamLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [axiosPublic]);

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedMember(null);
  };

  const handleContactMember = (phone) => {
    if (!phone) return;
    const clean = phone.replace(/\D/g, "");
    // Prefer WhatsApp if possible, otherwise tel:
    const wa = `https://wa.me/${clean}`;
    window.open(wa, "_blank", "noopener,noreferrer");
  };

  const teamHasData = useMemo(() => members && members.length > 0, [members]);
  const modalTitleId = "team-member-details-title";

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-4 sm:mb-6" aria-hidden>
            <Building2 className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Company Profile
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto px-4">
            Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">About Us</h2>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
              </p>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[#0A3D91]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#0A3D91]">500+</div>
                  <div className="text-xs sm:text-sm text-[#0A3D91]">Businesses Supported</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[#D0A96A]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#D0A96A]">50+</div>
                  <div className="text-xs sm:text-sm text-[#D0A96A]">Countries Reached</div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Excellence</h3>
                  <p className="text-xs sm:text-sm text-[#0A3D91]">Committed to delivering exceptional business solutions</p>
                </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Trust</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Building lasting relationships through integrity</p>
                </div>
                <div className="bg-gradient-to-br from-[#2E7D32]/20 to-[#2E7D32]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#2E7D32]/20">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#2E7D32] mb-1 sm:mb-2">Collaboration</h3>
                  <p className="text-xs sm:text-sm text-[#2E7D32]">Fostering partnerships for mutual growth</p>
                </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Innovation</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Embracing new ideas and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Target className="h-10 w-10 sm:h-12 sm:w-12 text-[#0A3D91] mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Empowering businesses through comprehensive solutions and strategic partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Business Consultation & Network Support",
                description:
                  "Providing expert guidance and building strong professional networks for sustainable growth",
                icon: Users, color: "royalBlue",
              },
              {
                title: "Indenting",
                description:
                  "Facilitating seamless procurement processes and supplier connections for businesses",
                icon: Building2, color: "goldSand",
              },
              {
                title: "Sourcing",
                description:
                  "Connecting businesses with quality suppliers and resources globally",
                icon: Globe, color: "success",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]"
              >
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[item.color]} mb-3 sm:mb-4`}>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#D0A96A] mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[
              { title: "Provide Legal Platform for New Entrepreneurs", description: "Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks", icon: Shield },
              { title: "Develop Business Network", description: "Building comprehensive networks that connect businesses, investors, suppliers, and service providers", icon: Users },
              { title: "Global Import and Export Solution", description: "Facilitating international trade through comprehensive import and export support services", icon: Globe },
              { title: "Connect Local Business with International Platform", description: "Bridging local enterprises with global opportunities and international market access", icon: TrendingUp },
              { title: "Legal Documentation Support", description: "Providing comprehensive legal documentation assistance for business operations and compliance", icon: Building2 },
              { title: "Strategic Business Consulting & Partnership", description: "Offering strategic guidance and facilitating partnerships that drive long-term business success", icon: Target },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#F9FAFB] rounded-lg sm:rounded-xl hover:bg-[#F3F4F6] transition-colors border border-[#E5E7EB]"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#111827] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Dynamic) */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Leadership Team</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
            </p>
          </div>

          {teamLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : teamError ? (
            <div className="text-center py-12">
              <p className="text-[#B91C1C] font-medium" role="alert">{teamError}</p>
            </div>
          ) : teamHasData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.map((member) => {
                const skillsCount = Array.isArray(member.expertise) ? member.expertise.length : 0;
                const socialsCount = ["linkedin", "twitter", "facebook"].reduce(
                  (acc, key) => (member?.socials?.[key] ? acc + 1 : acc),
                  0
                );
                const contactCount = (member?.email ? 1 : 0) + (member?.phone ? 1 : 0);

                return (
                  <article
                    key={member._id || member.name}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                  >
                    {/* Profile Image */}
                    <div className="w-full h-60 sm:h-72 bg-gray-100 p-3 flex items-center justify-center">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200">
                        <img
                          src={member.image || PLACEHOLDER_IMG}
                          alt={member.name ? `${member.name} profile photo` : "Profile photo"}
                          className="w-full h-full object-cover rounded-xl"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = PLACEHOLDER_IMG;
                          }}
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-center mb-3" aria-live="polite">
                        <h3 className="text-lg sm:text-xl font-bold text-[#111827] mr-2">
                          {member.name || "Unnamed Member"}
                        </h3>
                        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2E7D32] rounded-full grid place-items-center" title="Verified">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden />
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-[#6B7280] text-center mb-4">
                        {member.position || "Team Member"}
                      </p>

                      {member.bio && (
                        <p className="text-sm text-[#6B7280] text-center mb-4 leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>
                      )}

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91] border border-[#0A3D91]/15">
                          <Award className="w-4 h-4" />
                          <span className="text-[11px] sm:text-sm font-medium">
                            {skillsCount} Expertise
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A] border border-[#D0A96A]/15">
                          <Globe className="w-4 h-4" />
                          <span className="text-[11px] sm:text-sm font-medium">
                            {socialsCount} Socials
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/15">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-[11px] sm:text-sm font-medium">
                            {contactCount > 0 ? `${contactCount} Contact${contactCount > 1 ? "s" : ""}` : "No Contact"}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-auto">
                        <button
                          onClick={() => handleViewDetails(member)}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-[#111827] px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                          aria-label={`View details for ${member.name || "team member"}`}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" aria-hidden />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#6B7280] font-medium">No team members available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Integrity", description: "We conduct business with honesty, transparency, and ethical standards", icon: Shield, color: "royalBlue" },
              { title: "Excellence", description: "We strive for the highest quality in everything we do", icon: Award, color: "goldSand" },
              { title: "Innovation", description: "We embrace new ideas and technologies to better serve our clients", icon: TrendingUp, color: "success" },
              { title: "Partnership", description: "We build lasting relationships based on mutual trust and respect", icon: Users, color: "info" },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]"
              >
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[value.color]} mb-3 sm:mb-4`}>
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
            Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
            >
              Partner With Us
            </a>
            <a
              href="/products-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Member Details Modal */}
      <FocusTrapModal isOpen={showDetailsModal && !!selectedMember} onClose={closeDetailsModal} titleId={modalTitleId}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 id={modalTitleId} className="text-xl font-bold text-[#111827]">
            Team Member Details
          </h3>
          <button
            onClick={closeDetailsModal}
            className="text-gray-500 hover:text-gray-700 transition-colors rounded p-1"
            aria-label="Close details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        {selectedMember && (
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={selectedMember.image || PLACEHOLDER_IMG}
                  alt={selectedMember.name ? `${selectedMember.name} profile photo` : "Profile photo"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMG;
                  }}
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start mb-3">
                  <h2 className="text-2xl font-bold text-[#111827] mr-3">
                    {selectedMember.name || "Unnamed Member"}
                  </h2>
                  <span className="w-6 h-6 bg-[#2E7D32] rounded-full grid place-items-center" title="Verified">
                    <CheckCircle className="w-4 h-4 text-white" aria-hidden />
                  </span>
                </div>
                <p className="text-lg text-[#0A3D91] font-semibold mb-2">
                  {selectedMember.position || "Team Member"}
                </p>
                {selectedMember.bio && (
                  <p className="text-[#6B7280] leading-relaxed">{selectedMember.bio}</p>
                )}
              </div>
            </div>

            {/* Expertise */}
            {Array.isArray(selectedMember.expertise) && selectedMember.expertise.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#111827] mb-3">Areas of Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMember.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                      <span className="text-[#111827]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="bg-[#FAF3E0] p-4 rounded-lg border border-[#D0A96A]/20">
              <h4 className="text-lg font-semibold text-[#111827] mb-3">Contact Information</h4>
              <div className="space-y-2">
                {selectedMember.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#0A3D91]" />
                    <a href={`mailto:${selectedMember.email}`} className="text-[#0A3D91] hover:underline">
                      {selectedMember.email}
                    </a>
                  </div>
                )}
                {selectedMember.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#0A3D91]" />
                    <a href={`tel:${selectedMember.phone}`} className="text-[#0A3D91] hover:underline">
                      {selectedMember.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={closeDetailsModal}
            className="px-6 py-2 text-[#6B7280] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => selectedMember?.phone && handleContactMember(selectedMember.phone)}
            className="px-6 py-2 bg-[#0A3D91] text-white rounded-lg hover:bg-[#08306B] transition-colors disabled:opacity-50"
            disabled={!selectedMember?.phone}
          >
            Contact Member
          </button>
        </div>
      </FocusTrapModal>
    </div>
  );
};

export default CompanyProfile;
