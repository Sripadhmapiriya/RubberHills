import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Heart,
  BookOpen,
  Sprout,
  ArrowRight,
  User,
  Phone,
  GraduationCap,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import { CONTACT_IMAGES } from '../../config/images';
import './Contact.css';

function resolveClassParam(raw) {
  if (!raw) return null;
  const lower = String(raw).toLowerCase().trim();
  if (lower.includes('creche')) return 'Creche';
  if (lower.includes('lower') || lower === 'lkg') return 'LKG';
  if (lower.includes('upper') || lower === 'ukg') return 'UKG';
  if (lower.includes('nursery')) return 'Nursery';
  return null;
}

export default function Contact() {
  const location = useLocation();

  const getInitialClass = () => {
    const params = new URLSearchParams(location.search);
    const paramClass = location.state?.interestedClass || params.get('class');
    return resolveClassParam(paramClass) || 'Nursery';
  };

  const [formData, setFormData] = useState({
    parentVisitorName: '',
    childName: '',
    contactNumber: '',
    interestedClass: getInitialClass(),
    message: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramClass = location.state?.interestedClass || params.get('class');
    const resolved = resolveClassParam(paramClass);
    if (resolved) {
      setFormData((prev) => ({
        ...prev,
        interestedClass: resolved,
      }));
    }
  }, [location.search, location.state]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccess(false);

    // Client-side validations
    if (!formData.parentVisitorName.trim()) {
      setErrorMessage('Please enter Parent / Visitor Name.');
      return;
    }

    if (!formData.childName.trim()) {
      setErrorMessage("Please enter Child's Name.");
      return;
    }

    const digitsOnly = formData.contactNumber.replace(/\D/g, '');
    if (!formData.contactNumber.trim() || digitsOnly.length < 10 || digitsOnly.length > 15) {
      setErrorMessage('Please enter a valid Phone Number (minimum 10 digits).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setFormData({
          parentVisitorName: '',
          childName: '',
          contactNumber: '',
          interestedClass: 'Nursery',
          message: '',
        });
      } else {
        setErrorMessage(
          result.error ||
          result.message ||
          'Failed to deliver enquiry. Please contact school directly at +91 98765 43210.'
        );
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setErrorMessage(
        'Unable to connect to the email service. Please call us at +91 98765 43210 or email info@rubberhills.in.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-contact">
      <FloatingLeaves />

      <section className="contact-hero">
        <div className="container contact-container">
          {/* Left Column: Heading, Badges & Kids */}
          <div className="contact-left-col">
            <div className="contact-brand-row" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={CONTACT_IMAGES.brandLogo.src}
                alt={CONTACT_IMAGES.brandLogo.alt}
                className="contact-brand-logo"
                style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'contain', background: '#FFFFFF', padding: '2px', boxShadow: '0 2px 10px rgba(6,75,37,0.12)' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#064B25', letterSpacing: '0.04em' }}>RUBBER HILLS</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: '#76B82A', letterSpacing: '0.14em' }}>KINDERGARTEN</span>
              </div>
            </div>

            <h1 className="contact-heading">
              Big dreams<br />
              begin with <Heart size={38} className="heading-heart-icon" /><br />
              <span className="heading-highlight">
                little steps.
                <DoodleUnderline className="contact-underline" />
              </span>
            </h1>

            <p className="contact-lead">
              Give your child a joyful beginning in a nurturing environment filled with learning,
              friendship and discovery.
            </p>

            {/* 3 Highlights */}
            <div className="contact-highlights-list">
              <div className="highlight-pill">
                <div className="highlight-icon-circle">
                  <Heart size={20} />
                </div>
                <span>Caring Environment</span>
              </div>

              <div className="highlight-pill">
                <div className="highlight-icon-circle">
                  <BookOpen size={20} />
                </div>
                <span>Play-Based Learning</span>
              </div>

              <div className="highlight-pill">
                <div className="highlight-icon-circle">
                  <Sprout size={20} />
                </div>
                <span>Holistic Development</span>
              </div>
            </div>

            <div className="contact-cta-wrap">
              <a href="#admission-form" className="btn-primary-green">
                <span>Enquire About Admissions</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-right-col" id="admission-form">
            {/* Form Container */}
            <div className="admission-form-wrapper">
              {/* Peeking Girl Mascot (Left) */}
              <div className="form-peeking-mascot mascot-girl" aria-hidden="true">
                <img
                  src="/svgs/girl-transparent.png"
                  alt="Cheerful student peeking over admission form left"
                  className="peeking-mascot-img"
                />
              </div>

              {/* Peeking Boy Mascot (Right) */}
              <div className="form-peeking-mascot mascot-boy" aria-hidden="true">
                <img
                  src="/svgs/boy-transparent.png"
                  alt="Cheerful student peeking over admission form right"
                  className="peeking-mascot-img"
                />
              </div>

              {/* Green Floating Header Pill */}
              <div className="form-header-badge">
                <DoodleRays flip style={{ width: '22px', height: '18px' }} />
                <span>Admission Enquiry</span>
                <DoodleRays style={{ width: '22px', height: '18px' }} />
              </div>

              {/* Status Notifications */}
              {success && (
                <div className="alert-box alert-success" role="alert">
                  <CheckCircle size={22} className="alert-icon" />
                  <div>
                    <strong>Thank you!</strong> Your enquiry has been sent to Rubber Hills
                    Kindergarten. Our team will contact you promptly.
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="alert-box alert-error" role="alert">
                  <AlertCircle size={22} className="alert-icon" />
                  <div>{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="admission-form" noValidate>
                <div className="form-grid-2col">
                  {/* Parent Name */}
                  <div className="form-field">
                    <label htmlFor="parentVisitorName" className="field-label">
                      Parent / Visitor Name*
                    </label>
                    <div className="input-wrap">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="parentVisitorName"
                        name="parentVisitorName"
                        value={formData.parentVisitorName}
                        onChange={handleChange}
                        placeholder="Parent Name*"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Child Name */}
                  <div className="form-field">
                    <label htmlFor="childName" className="field-label">
                      Child's Name*
                    </label>
                    <div className="input-wrap">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Child Name*"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-grid-2col">
                  {/* Phone Number */}
                  <div className="form-field">
                    <label htmlFor="contactNumber" className="field-label">
                      Phone Number*
                    </label>
                    <div className="input-wrap">
                      <Phone size={18} className="input-icon" />
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Phone Number*"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Interested Class */}
                  <div className="form-field">
                    <label htmlFor="interestedClass" className="field-label">
                      Interested Class
                    </label>
                    <div className="input-wrap">
                      <GraduationCap size={18} className="input-icon" />
                      <select
                        id="interestedClass"
                        name="interestedClass"
                        value={formData.interestedClass}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="Nursery">Nursery (3–4 Years)</option>
                        <option value="LKG">LKG (4–5 Years)</option>
                        <option value="UKG">UKG (5–6 Years)</option>
                        <option value="Creche">Creche (2.5–3 Years)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <div className="input-wrap textarea-wrap">
                    <MessageSquare size={18} className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message (optional notes or questions)"
                      disabled={loading}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-submit-enquiry"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="spinner" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
