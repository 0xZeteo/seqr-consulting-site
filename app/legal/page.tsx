import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const metadata = {
  title: "Legal",
  description: "Privacy Policy, Terms of Service, and NDA for SEQR Cloud Security",
};

export default function LegalPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Legal
          </h1>
          <p className="text-xl text-muted-foreground">
            Our legal documents and policies that govern the use of SEQR services.
          </p>
        </div>

        {/* Privacy Policy Section */}
        <section id="privacy" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-8 pb-4 border-b border-foreground/10">
            Privacy Policy
          </h2>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h3>
              <p>
                SEQR ("we", "us", "our") operates the SEQR website and services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Information Collection and Use</h3>
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Personal Data: Name, email address, phone number, and company information</li>
                <li>Usage Data: Browser type, IP address, pages visited, and time spent on pages</li>
                <li>Cookies and Tracking Technologies: Information collected through cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Security of Data</h3>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section id="terms" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-8 pb-4 border-b border-foreground/10">
            Terms of Service
          </h2>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on SEQR's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Transmit or redistribute the materials to anyone</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Disclaimer</h3>
              <p>
                The materials on SEQR's website are provided "as is". SEQR makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Limitations</h3>
              <p>
                In no event shall SEQR or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SEQR's website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">5. Accuracy of Materials</h3>
              <p>
                The materials appearing on SEQR's website could include technical, typographical, or photographic errors. SEQR does not warrant that any of the materials on its website are accurate, complete, or current. SEQR may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>
          </div>
        </section>

        {/* NDA Section */}
        <section id="nda" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-8 pb-4 border-b border-foreground/10">
            Non-Disclosure Agreement (NDA)
          </h2>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Definition of Confidential Information</h3>
              <p>
                "Confidential Information" means all non-public, proprietary information disclosed by one party ("Disclosing Party") to the other party ("Receiving Party"), including but not limited to technical data, business information, findings from security audits, penetration test results, and any other sensitive information shared in connection with SEQR services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Obligations of Receiving Party</h3>
              <p>
                The Receiving Party agrees to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Maintain the Confidential Information in strict confidence</li>
                <li>Use the Confidential Information solely for the purpose of the engagement</li>
                <li>Not disclose the Confidential Information to third parties without prior written consent</li>
                <li>Protect the Confidential Information using reasonable safeguards</li>
                <li>Return or destroy the Confidential Information upon termination of the engagement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Exceptions</h3>
              <p>
                The Receiving Party's obligations do not apply to information that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Is or becomes publicly available through no breach of this agreement</li>
                <li>Was rightfully received by the Receiving Party from a third party without confidentiality obligations</li>
                <li>Is independently developed by the Receiving Party without use of the Confidential Information</li>
                <li>Is required to be disclosed by law or court order (with notice to Disclosing Party when possible)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Term</h3>
              <p>
                This NDA shall remain in effect for a period of three (3) years from the date of disclosure, or such longer period as may be required by applicable law or as agreed to in writing by both parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">5. No License Granted</h3>
              <p>
                Disclosure of Confidential Information does not grant any license or other rights to intellectual property. All rights remain with the Disclosing Party.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">6. Contact for Legal Inquiries</h3>
              <p>
                For questions regarding this NDA or to request a formal NDA agreement, please contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="pt-12 border-t border-foreground/10">
          <p className="text-sm text-muted-foreground">
            Last updated: January 2026
          </p>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
