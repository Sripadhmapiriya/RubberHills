import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import { SCHOOL_INFO } from '../../config/schoolInfo';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="page-privacy">
      <FloatingLeaves />

      <section className="privacy-hero">
        <div className="container privacy-container">
          <PillBadge text="Privacy & Child Data Protection" className="privacy-pill" />
          
          <h1 className="privacy-heading">
            Privacy Policy & Child Data Protection
            <DoodleUnderline className="privacy-underline" />
          </h1>

          <p className="privacy-lead">
            Rubber Hills Kindergarten is committed to safeguarding the personal privacy of children, parents,
            guardians, and visitors submitting admission enquiries.
          </p>

          <div className="privacy-meta-badge">
            <span>Last Updated: November 2026</span>
            <span className="meta-dot">•</span>
            <span>Applies to: Official Website & Admission Enquiries</span>
          </div>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="container privacy-body-container">
          {/* Note for School Management Review */}
          <div className="privacy-review-notice" role="note">
            <AlertCircle size={22} className="notice-icon" />
            <div>
              <strong>Note for School Management:</strong> This privacy policy reflects the exact data flow of
              the website enquiry form. Specific retention schedules and official data controller contacts should be
              formally confirmed and ratified by the school administration prior to the upcoming academic intake.
            </div>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">1</span>
              <span>What Information We Collect</span>
            </h2>
            <p>
              When a parent or guardian submits an admission enquiry through our website (
              <code>rubber-hills-kindergarden.vercel.app</code>), we collect only the following information
              necessary to process your enquiry:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Parent / Visitor Name:</strong> Used to address you respectfully during communications.
              </li>
              <li>
                <strong>Contact Phone Number:</strong> Used by our admissions team to call you or send admissions
                updates.
              </li>
              <li>
                <strong>Child’s Name:</strong> Used solely to identify the applicant for admission records.
              </li>
              <li>
                <strong>Interested Programme / Class:</strong> The programme you wish to enquire about (Creche,
                Nursery, Lower KG, or Upper KG).
              </li>
              <li>
                <strong>Optional Message / Notes:</strong> Any specific questions, comments, or developmental notes
                you choose to share.
              </li>
            </ul>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">2</span>
              <span>Why We Collect Admission Enquiry Details</span>
            </h2>
            <p>We process the submitted information strictly for educational and administrative purposes:</p>
            <ul className="privacy-list">
              <li>To evaluate admission eligibility and seat availability for the requested age group.</li>
              <li>To contact the parent or guardian to schedule a campus tour or discuss the enrollment process.</li>
              <li>To answer specific questions submitted in your enquiry message.</li>
            </ul>
            <p className="privacy-highlight-box">
              We do <strong>not</strong> sell, rent, trade, or share personal or child information with third-party
              marketing companies, advertisers, or external brokers under any circumstances.
            </p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">3</span>
              <span>How Your Information Is Handled & Stored</span>
            </h2>
            <p>
              The website’s admission enquiry form transmits submitted details securely over TLS/SSL encryption
              directly to the school’s official mailbox at{' '}
              <a href={`mailto:${SCHOOL_INFO.email}`} className="privacy-email-link">
                {SCHOOL_INFO.email}
              </a>
              .
            </p>
            <p>
              Enquiries are <strong>not</strong> stored in an unencrypted public database or online spreadsheet.
              Submissions reside within our secure administrative email inbox protected by access controls and
              multi-factor authentication.
            </p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">4</span>
              <span>Who Can Access Your Enquiry</span>
            </h2>
            <p>
              Access to admission enquiry emails is restricted strictly to authorized Rubber Hills Kindergarten
              administrative personnel, founders, and the admissions committee responsible for student enrollment.
            </p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">5</span>
              <span>Data Retention & Deletion Requests</span>
            </h2>
            <p>
              Enquiry records are retained only as long as necessary to complete the relevant academic year’s
              admissions cycle and respond to parent questions.
            </p>
            <p>
              Parents and guardians retain the right at any time to:
            </p>
            <ul className="privacy-list">
              <li>Request a copy of the information you submitted.</li>
              <li>Request correction of any inaccurate contact or child information.</li>
              <li>
                Request prompt deletion and expungement of your enquiry and contact details from our records.
              </li>
            </ul>
            <p>
              To exercise these rights, simply email our admissions team at{' '}
              <a href={`mailto:${SCHOOL_INFO.email}`} className="privacy-email-link">
                {SCHOOL_INFO.email}
              </a>{' '}
              with the subject line <em>"Privacy Request: [Child’s Name]"</em>.
            </p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">
              <span className="section-number">6</span>
              <span>Contact Us Regarding Your Privacy</span>
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our child data
              handling practices, please contact us:
            </p>
            <div className="privacy-contact-box">
              <p>
                <strong>Rubber Hills Kindergarten</strong><br />
                {SCHOOL_INFO.address.full}<br />
                Email:{' '}
                <a href={`mailto:${SCHOOL_INFO.email}`} className="privacy-email-link">
                  {SCHOOL_INFO.email}
                </a>
              </p>
            </div>
            <div className="privacy-back-home">
              <Link to="/contact" className="btn-primary-green">
                <span>Return to Admission Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
