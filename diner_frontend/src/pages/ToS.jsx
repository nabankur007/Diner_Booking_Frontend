import React from "react";

const TermsOfService = () => {
  return (
    <div className="px-6 md:px-20 py-12 text-gray-800 bg-white max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: 24/04/2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to DineEasy. These Terms of Service ("Terms") govern your access to and use of our website, applications, and related services (collectively, the "Platform"). By accessing or using the Platform, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
        <p>
          By creating an account or using our Platform, you confirm that you have read, understood, and accepted these Terms. You also affirm that you are at least 18 years old or have the consent of a parent or guardian.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Changes to Terms</h2>
        <p>
          We may update these Terms periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you about significant changes by sending a notice to the primary email in your account or by placing a prominent notice on our Platform. Continued use after changes constitutes acceptance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. User Accounts</h2>
        <p><strong>4.1 Account Creation:</strong> You must create an account to use specific features. You confirm that the provided info is accurate and authorized.</p>
        <p><strong>4.2 Account Security:</strong> You are responsible for your account security and must report any unauthorized use immediately.</p>
        <p><strong>4.3 Account Suspension or Termination:</strong> We may suspend or terminate accounts for suspected fraud or violations. You can terminate anytime by contacting support.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Use of the Service</h2>
        <p>You agree to use the Platform lawfully. You must not:</p>
        <ul className="list-disc pl-6">
          <li>Violate any applicable laws or regulations.</li>
          <li>Impersonate others or misrepresent your identity.</li>
          <li>Transmit illegal or harmful material.</li>
          <li>Harass or threaten others.</li>
          <li>Send unsolicited ads or promotions without consent.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Booking Terms</h2>
        <p><strong>6.1 Reservations:</strong> Provide accurate info when booking.</p>
        <p><strong>6.2 Confirmation of Reservation:</strong> Booking confirmations will be sent via email/SMS; verify details.</p>
        <p><strong>6.3 Cancellation Policy:</strong> Cancellations must be made [insert duration] in advance. Policies may vary by restaurant.</p>
        <p><strong>6.4 No-Show Policy:</strong> No-shows may incur fees.</p>
        <p><strong>6.5 Changes to Reservations:</strong> Contact support or use the Platform to request changes, subject to availability.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Payment Terms</h2>
        <p><strong>7.1 Fees:</strong> You agree to pay applicable fees and taxes. See "Payment Methods" for options.</p>
        <p><strong>7.2 Payment Processing:</strong> Payments are processed securely through third-party processors. We do not store payment data and are not liable for processing errors.</p>
        <p><strong>7.3 Refund Policy:</strong> Eligible refunds due to cancellations will be processed to the original method within [insert time frame].</p>
      </section>
    </div>
  );
};

export default TermsOfService;
