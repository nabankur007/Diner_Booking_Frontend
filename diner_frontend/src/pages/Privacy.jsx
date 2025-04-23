import React from 'react';  

const PrivacyPolicy = () => {  
    return (  
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">  
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Privacy Policy</h1>  
            <p className="text-gray-600 mb-6 text-center">Effective Date: [24/05/2025]</p>  

            <div className="space-y-8">  
                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">1. Introduction</h2>  
                    <p className="text-gray-700 mb-4">  
                        Welcome to <b>DineEasy</b>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.  
                    </p>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>  
                    <h3 className="text-xl font-medium text-gray-700 mb-1">Personal Information:</h3>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li>Name</li>  
                        <li>Email Address</li>  
                        <li>Phone Number</li>  
                        <li>Payment Information</li>  
                        <li>Booking Details (date, time, number of guests)</li>  
                    </ul>  
                    <h3 className="text-xl font-medium text-gray-700 mb-1">Non-Personal Information:</h3>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li>Browser type</li>  
                        <li>IP address</li>  
                        <li>Pages visited on our site</li>  
                        <li>Time and date of visits</li>  
                    </ul>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li>To process and manage your bookings.</li>  
                        <li>To communicate with you regarding your reservations.</li>  
                        <li>To send you promotional materials and offers (with your consent).</li>  
                        <li>To improve our services and website functionality.</li>  
                        <li>To conduct market research and analysis.</li>  
                    </ul>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">4. Information Sharing and Disclosure</h2>  
                    <p className="mb-4">We will not share your personal information with third parties except:</p>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li>With your consent or at your direction.</li>  
                        <li>As necessary to complete your booking (e.g., sharing with restaurant partners).</li>  
                        <li>To comply with legal obligations or protect our rights.</li>  
                    </ul>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">5. Security of Your Information</h2>  
                    <p className="mb-4">We implement a variety of security measures to protect your information:</p>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li>All sensitive information is encrypted in transit.</li>  
                        <li>Access to personal information is restricted to authorized personnel only.</li>  
                    </ul>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>  
                    <ul className="list-disc ml-8 mb-4 space-y-1">  
                        <li><strong>Access and Update:</strong> You have the right to access and correct your personal information.</li>  
                        <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional communications.</li>  
                        <li><strong>Request Deletion:</strong> You can request the deletion of your personal information under certain conditions.</li>  
                    </ul>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">7. Cookies and Tracking Technologies</h2>  
                    <p className="mb-4">We use cookies to enhance user experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">8. Third-Party Services</h2>  
                    <p className="mb-4">Our website may include links to third-party services. We are not responsible for their privacy practices.</p>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">9. Children’s Privacy</h2>  
                    <p className="mb-4">Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">10. Changes to This Privacy Policy</h2>  
                    <p className="mb-4">We may update this policy from time to time. We will notify you of changes by posting the new policy on this page.</p>  
                </section>  

                <section>  
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">11. Contact Us</h2>  
                    <p className="mb-4">If you have any questions about this privacy policy or our practices, please contact us at:</p>  
                    <ul className="list-none mb-4">  
                        <li>Email: [Insert Email Address]</li>  
                        <li>Address: [Insert Physical Address]</li>  
                    </ul>  
                </section>  
            </div>  
        </div>  
    );  
};  

export default PrivacyPolicy;  