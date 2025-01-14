import FooterNav from "../components/FooterNav";
import HeaderNav from "../components/HeaderNav";

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderNav />
      <section className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy for Mobile Doctor</h1>
        <p className="text-sm text-gray-600 text-center mb-8">Effective Date: 01/01/2025</p>

        <p className="mb-4">
          Mobile Doctor is committed to protecting your privacy and ensuring the security of your personal information.
          This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our
          mobile application (Mobile Doctor). By using the App, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-2 font-semibold">a. Personal Information</p>
        <ul className="list-disc list-inside mb-4">
          <li>Name, contact details (email, phone number), date of birth, and other identifying information you provide.</li>
          <li>Health-related information such as symptoms, medical history, prescriptions, and test results.</li>
        </ul>

        <p className="mb-2 font-semibold">b. Non-Personal Information</p>
        <ul className="list-disc list-inside mb-4">
          <li>Device information (e.g., device type, operating system, unique device identifiers).</li>
          <li>App usage data, including interactions, crash reports, and performance metrics.</li>
        </ul>

        <p className="mb-2 font-semibold">c. Location Data</p>
        <p className="mb-4">
          With your consent, we may collect location data to provide location-based services, such as nearby healthcare
          providers.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide and improve our services.</li>
          <li>Facilitate appointment scheduling, telemedicine services, and medical records management.</li>
          <li>Communicate with you regarding updates, reminders, and notifications.</li>
          <li>Ensure compliance with applicable legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">With Healthcare Providers:</span> To facilitate consultations and treatment.
          </li>
          <li>
            <span className="font-semibold">With Service Providers:</span> For app functionality, data storage, and analytics.
          </li>
          <li>
            <span className="font-semibold">Legal Obligations:</span> To comply with legal requirements or respond to lawful
            requests.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information, including encryption, firewalls,
          and secure storage. However, no system is completely secure, and we cannot guarantee the absolute security of
          your data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Access, update, or delete your personal information.</li>
          <li>Withdraw consent for data processing at any time.</li>
          <li>
            Lodge a complaint with a data protection authority if you believe your rights have been violated.
          </li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us at <span className="font-semibold">support@mobiledoctor.health</span>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
        <p className="mb-4">
          Our App may contain links to third-party websites or services. We are not responsible for the privacy practices
          of these third parties and encourage you to review their privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Children’s Privacy</h2>
        <p className="mb-4">
          The App is not intended for children under the age of 13, and we do not knowingly collect information from them.
          If we become aware of such collection, we will take steps to delete the information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised
          policy in the App. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="font-semibold">Email: support@mobiledoctor.health</p>

        <p className="text-sm text-gray-600 mt-6">
          This Privacy Policy is designed to comply with applicable laws, including [e.g., NDPC, NITDA, or other relevant
          regulations].
        </p>
      </section>
      <FooterNav />
    </>
  );
};

export default PrivacyPolicy;
