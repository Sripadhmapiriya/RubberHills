import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  Calendar,
  Users,
  IndianRupee,
  Sparkles,
  Heart,
  Smile,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Baby,
} from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import ClassesHeroGallery from './ClassesHeroGallery';
import './Classes.css';

export default function Classes() {
  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    childAge: '3 years',
  });
  const [loading, setLoading] = useState(false);
  const [successName, setSuccessName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectAgeForEnquiry = (age) => {
    setFormData((prev) => ({ ...prev, childAge: age }));
    const formElement = document.getElementById('enquire');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessName('');

    // Validation
    const trimmedParent = formData.parentName.trim();
    const digitsOnly = formData.phoneNumber.replace(/\D/g, '');

    if (!trimmedParent) {
      setErrorMessage('Please add your name.');
      return;
    }

    if (!formData.phoneNumber.trim() || digitsOnly.length < 10) {
      setErrorMessage('Please add a valid phone number (at least 10 digits).');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        parentVisitorName: trimmedParent,
        contactNumber: formData.phoneNumber.trim(),
        childName: `Child (${formData.childAge})`,
        interestedClass:
          formData.childAge.includes('2.5')
            ? 'Creche'
            : formData.childAge.includes('3')
            ? 'Nursery'
            : formData.childAge.includes('4')
            ? 'Lower KG'
            : 'Upper KG',
        message: `Classes page Call Request: Child Age: ${formData.childAge}`,
      };

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessName(trimmedParent);
        setFormData({
          parentName: '',
          phoneNumber: '',
          childAge: '3 years',
        });
      } else {
        setErrorMessage(
          data.error || data.message || 'Unable to submit your request. Please try again or contact us directly.'
        );
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please check your connection or contact our school office.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-classes">
      <FloatingLeaves />

      {/* ============================================================== */}
      {/* 1. HERO SECTION – OUR LITTLE LEARNERS                           */}
      {/* ============================================================== */}
      <section className="classes-hero" aria-label="Our Learning Journey">
        <div className="container classes-hero-container">
          <div className="classes-hero-content">
            <PillBadge text="OUR LEARNING JOURNEY" className="classes-eyebrow" />

            <h1 className="classes-hero-heading">
              Every little step begins a{' '}
              <span className="classes-heading-highlight">
                big journey.
                <DoodleUnderline className="classes-hero-underline" />
              </span>
            </h1>

            <p className="classes-hero-lead">
              From their first experiences in Creche to their exciting kindergarten years, we provide a caring
              environment where children learn, play and grow with confidence.
            </p>

            {/* Three Decorative Highlights */}
            <div className="classes-hero-highlights">
              <div className="hero-highlight-pill highlight-joy">
                <span className="highlight-icon-circle">
                  <Smile size={18} />
                </span>
                <span className="highlight-text">Learn with Joy</span>
              </div>

              <div className="hero-highlight-pill highlight-grow">
                <span className="highlight-icon-circle">
                  <Heart size={18} />
                </span>
                <span className="highlight-text">Grow with Confidence</span>
              </div>

              <div className="hero-highlight-pill highlight-discover">
                <span className="highlight-icon-circle">
                  <Sparkles size={18} />
                </span>
                <span className="highlight-text">Discover Every Day</span>
              </div>
            </div>

            {/* Quick jump to each programme */}
            <div className="classes-hero-programs">
              <span className="programs-label">Our programmes</span>
              <div className="programs-chips">
                <a href="#creche" className="program-chip chip-creche">
                  <strong>Creche</strong>
                  <span>2.5–3 yrs</span>
                </a>
                <a href="#classes" className="program-chip chip-nursery">
                  <strong>Nursery</strong>
                  <span>3–4 yrs</span>
                </a>
                <a href="#classes" className="program-chip chip-lkg">
                  <strong>Lower KG</strong>
                  <span>4–5 yrs</span>
                </a>
                <a href="#classes" className="program-chip chip-ukg">
                  <strong>Upper KG</strong>
                  <span>5–6 yrs</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Photo Collage – photos are set in src/config/images.js (CLASSES_HERO_IMAGES) */}
          <div className="classes-hero-art">
            <ClassesHeroGallery />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CRECHE PROGRAMME – A GENTLE BEGINNING                        */}
      {/* ============================================================== */}
      <section id="creche" className="creche-showcase-section" aria-label="Creche Programme">
        <div className="container">
          <div className="creche-card-master">
            {/* Left Column: Programme Identity & Exact Narrative */}
            <div className="creche-main-col">
              <div className="creche-badge-pill">
                <Baby size={16} className="creche-badge-icon" />
                <span>FOR OUR YOUNGEST LEARNERS</span>
              </div>

              <div className="creche-title-wrap">
                <h2 className="creche-name">Creche</h2>
                <div className="creche-highlight-age">
                  <span>Age Group:</span> <strong>2.5–3 years</strong>
                </div>
              </div>

              {/* Exact Description from old HTML */}
              <p className="creche-story-p">
                A gentle first step into school for our youngest children. They do activities, play, sleep and eat in a
                small, caring group.
              </p>

              {/* Decorative toddler play mini-features */}
              <div className="creche-features-row">
                <span className="creche-mini-pill">
                  <CheckCircle2 size={15} /> Play & Activities
                </span>
                <span className="creche-mini-pill">
                  <CheckCircle2 size={15} /> Peaceful Nap Time
                </span>
                <span className="creche-mini-pill">
                  <CheckCircle2 size={15} /> Nourishing Meals
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleSelectAgeForEnquiry('2.5–3 years')}
                className="btn-creche-cta"
              >
                <span>Request a Call for Creche</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>

            {/* Right Column: 5 Exact Programme Details */}
            <div className="creche-details-col">
              <h3 className="creche-details-heading">Programme Overview</h3>

              <div className="creche-details-grid">
                {/* 1. Age Group */}
                <div className="creche-detail-box highlight-box-age">
                  <div className="detail-icon-wrap age-icon">
                    <Baby size={22} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Age Group</span>
                    <strong className="detail-value">2.5–3 years</strong>
                  </div>
                </div>

                {/* 2. Timing */}
                <div className="creche-detail-box highlight-box-time">
                  <div className="detail-icon-wrap time-icon">
                    <Clock size={22} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Timing</span>
                    <strong className="detail-value">9:30 AM – 12:30 PM</strong>
                  </div>
                </div>

                {/* 3. Weekdays */}
                <div className="creche-detail-box">
                  <div className="detail-icon-wrap day-icon">
                    <Calendar size={22} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Weekdays</span>
                    <strong className="detail-value">Monday – Friday</strong>
                  </div>
                </div>

                {/* 4. Group Size */}
                <div className="creche-detail-box">
                  <div className="detail-icon-wrap group-icon">
                    <Users size={22} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Group Size</span>
                    <strong className="detail-value">Maximum 12 children</strong>
                  </div>
                </div>

                {/* 5. Monthly Fee */}
                <div className="creche-detail-box highlight-box-fee">
                  <div className="detail-icon-wrap fee-icon">
                    <IndianRupee size={22} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Monthly Fee</span>
                    <strong className="detail-value">₹2,000</strong>
                    <span className="detail-sub">per month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. KINDERGARTEN CLASSES – OUR LEARNING STAGES                   */}
      {/* ============================================================== */}
      <section id="classes" className="kg-classes-section" aria-label="Kindergarten Classes">
        <div className="container">
          <div className="kg-header-wrap">
            <PillBadge text="KINDERGARTEN PROGRAMMES" className="kg-pill" />
            <h2 className="kg-heading">Growing Together, One Stage at a Time</h2>
            <p className="kg-lead">Classes for children from 3 to 6 years.</p>
          </div>

          {/* 3 Equal-Width Individual Class Cards */}
          <div className="kg-cards-grid">
            {/* Card 1 – Nursery */}
            <div className="kg-class-card card-nursery">
              <div className="card-top-accent nursery-accent" />
              
              <div className="kg-card-inner">
                <div className="kg-age-badge nursery-age">
                  <span>Age Group:</span> <strong>3–4 years</strong>
                </div>

                <div className="card-illustration-wrap nursery-ill">
                  <svg viewBox="0 0 140 110" className="card-svg" fill="none">
                    {/* Cheerful Stacking Blocks & Star */}
                    <g className="ill-block ill-block-1">
                      <rect x="15" y="45" width="48" height="48" rx="12" fill="#FDF3CE" stroke="#F6D65B" strokeWidth="2.5" />
                      <text x="39" y="78" textAnchor="middle" fill="#174B35" fontSize="24" fontWeight="800">1</text>
                    </g>

                    <g className="ill-block ill-block-2">
                      <rect x="75" y="45" width="48" height="48" rx="12" fill="#FFEFE5" stroke="#F8A882" strokeWidth="2.5" />
                      <text x="99" y="78" textAnchor="middle" fill="#174B35" fontSize="24" fontWeight="800">2</text>
                    </g>

                    <g className="ill-block ill-block-3">
                      <rect x="45" y="10" width="46" height="46" rx="12" fill="#E4F1DF" stroke="#72B95A" strokeWidth="2.5" />
                      <text x="68" y="42" textAnchor="middle" fill="#174B35" fontSize="24" fontWeight="800">3</text>
                    </g>

                    {/* Cute sparkle */}
                    <path className="ill-sparkle" d="M 120 18 Q 124 26 132 26 Q 124 26 120 34 Q 116 26 108 26 Q 116 26 120 18 Z" fill="#F6D65B" />
                  </svg>
                </div>

                <h3 className="kg-card-title">Nursery</h3>

                <p className="kg-card-milestone">
                  A gentle, joyful start to early exploration and friendship.
                </p>

                <div className="kg-card-footer">
                  <button
                    type="button"
                    onClick={() => handleSelectAgeForEnquiry('3 years')}
                    className="btn-card-enquire btn-nursery"
                  >
                    <span>Enquire for Nursery</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 – Lower KG */}
            <div className="kg-class-card card-lkg">
              <div className="card-top-accent lkg-accent" />

              <div className="kg-card-inner">
                <div className="kg-age-badge lkg-age">
                  <span>Age Group:</span> <strong>4–5 years</strong>
                </div>

                <div className="card-illustration-wrap lkg-ill">
                  <svg viewBox="0 0 140 110" className="card-svg" fill="none">
                    {/* Dual Rainbow Arc in Background */}
                    <path className="ill-rainbow-outer" d="M 24 45 Q 70 8 116 45" stroke="#F6D65B" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65" />
                    <path className="ill-rainbow-inner" d="M 32 48 Q 70 16 108 48" stroke="#F8A882" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55" />

                    {/* Open Storybook */}
                    <g className="ill-storybook">
                      <path
                        d="M 15 65 C 32 55 52 55 70 62 C 88 55 108 55 125 65 L 125 88 C 108 78 88 78 70 85 C 52 78 32 78 15 88 Z"
                        fill="#FFFFFF"
                        stroke="#72B95A"
                        strokeWidth="2.5"
                      />
                      <path d="M 70 62 L 70 85" stroke="#72B95A" strokeWidth="2" />
                    </g>
                    
                    {/* Growing leaf from book */}
                    <g className="ill-sprout">
                      <path className="sprout-stem" d="M 70 62 Q 70 38 70 28" stroke="#174B35" strokeWidth="2.8" strokeLinecap="round" />
                      <path className="sprout-leaf-left" d="M 70 34 C 58 22 46 30 54 42 C 62 42 70 37 70 34 Z" fill="#72B95A" />
                      <path className="sprout-leaf-right" d="M 70 28 C 82 16 94 24 86 36 C 78 36 70 31 70 28 Z" fill="#A8DC7C" />
                    </g>
                  </svg>
                </div>

                <h3 className="kg-card-title">Lower KG</h3>

                <p className="kg-card-milestone">
                  Building foundational language, numbers, and expressive play.
                </p>

                <div className="kg-card-footer">
                  <button
                    type="button"
                    onClick={() => handleSelectAgeForEnquiry('4 years')}
                    className="btn-card-enquire btn-lkg"
                  >
                    <span>Enquire for Lower KG</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 – Upper KG */}
            <div className="kg-class-card card-ukg">
              <div className="card-top-accent ukg-accent" />

              <div className="kg-card-inner">
                <div className="kg-age-badge ukg-age">
                  <span>Age Group:</span> <strong>5–6 years</strong>
                </div>

                <div className="card-illustration-wrap ukg-ill">
                  <svg viewBox="0 0 140 110" className="card-svg" fill="none">
                    {/* Graduation / Creative Discovery Pencil Rocket (Centered at x=70) */}
                    <g className="ill-rocket">
                      {/* Two-layer animated launch flame */}
                      <path className="rocket-flame-outer" d="M 62 68 Q 70 94 70 94 Q 70 94 78 68 Z" fill="#F8A882" stroke="#174B35" strokeWidth="1.6" />
                      <path className="rocket-flame-inner" d="M 65 68 Q 70 86 70 86 Q 70 86 75 68 Z" fill="#F6D65B" />

                      {/* Rocket / Pencil body */}
                      <path d="M 70 4 L 84 30 L 56 30 Z" fill="#F8A882" stroke="#174B35" strokeWidth="2" />
                      <rect x="56" y="30" width="28" height="38" rx="4" fill="#E9E3F5" stroke="#174B35" strokeWidth="2" />
                      <circle cx="70" cy="46" r="6" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
                      {/* Wings */}
                      <path d="M 56 48 L 44 68 L 56 68 Z" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
                      <path d="M 84 48 L 96 68 L 84 68 Z" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
                    </g>
                    {/* Playful stars */}
                    <polygon className="ill-star ill-star-left" points="22,18 25,24 32,25 27,30 28,36 22,33 16,36 17,30 12,25 19,24" fill="#F6D65B" stroke="#174B35" strokeWidth="1.2" />
                    <polygon className="ill-star ill-star-right" points="118,22 121,28 128,29 123,34 124,40 118,37 112,40 113,34 108,29 115,28" fill="#BFA5E8" stroke="#55338E" strokeWidth="1.2" />
                  </svg>
                </div>

                <h3 className="kg-card-title">Upper KG</h3>

                <p className="kg-card-milestone">
                  Preparing bright minds for school with curiosity and pride.
                </p>

                <div className="kg-card-footer">
                  <button
                    type="button"
                    onClick={() => handleSelectAgeForEnquiry('5 years')}
                    className="btn-card-enquire btn-ukg"
                  >
                    <span>Enquire for Upper KG</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. AGE GROUP OVERVIEW – CONNECTED PROGRESSION                   */}
      {/* ============================================================== */}
      <section className="age-progression-section" aria-label="Age Group Overview">
        <div className="container">
          <div className="progression-container-box">
            <div className="progression-header">
              <PillBadge text="STEP BY STEP" className="progression-pill" />
              <h2 className="progression-title">The Rubber Hills Journey at a Glance</h2>
              <p className="progression-subtitle">
                Understanding your child's natural learning milestones from toddlerhood to school readiness.
              </p>
            </div>

            {/* Stepping Stones Progression Flow */}
            <div className="progression-track">
              {/* Step 1: Creche */}
              <div className="progression-step step-creche">
                <div className="step-circle-node node-peach">
                  <span className="step-num">1</span>
                  <Baby size={20} className="step-icon" />
                </div>
                <div className="step-content">
                  <h4 className="step-name">Creche</h4>
                  <span className="step-age-tag">2.5–3 years</span>
                </div>
              </div>

              {/* Connecting Connector 1 */}
              <div className="progression-connector">
                <div className="connector-line" />
                <ArrowRight size={18} className="connector-arrow" />
              </div>

              {/* Step 2: Nursery */}
              <div className="progression-step step-nursery">
                <div className="step-circle-node node-yellow">
                  <span className="step-num">2</span>
                  <Smile size={20} className="step-icon" />
                </div>
                <div className="step-content">
                  <h4 className="step-name">Nursery</h4>
                  <span className="step-age-tag">3–4 years</span>
                </div>
              </div>

              {/* Connecting Connector 2 */}
              <div className="progression-connector">
                <div className="connector-line" />
                <ArrowRight size={18} className="connector-arrow" />
              </div>

              {/* Step 3: Lower KG */}
              <div className="progression-step step-lkg">
                <div className="step-circle-node node-mint">
                  <span className="step-num">3</span>
                  <BookOpen size={20} className="step-icon" />
                </div>
                <div className="step-content">
                  <h4 className="step-name">Lower KG</h4>
                  <span className="step-age-tag">4–5 years</span>
                </div>
              </div>

              {/* Connecting Connector 3 */}
              <div className="progression-connector">
                <div className="connector-line" />
                <ArrowRight size={18} className="connector-arrow" />
              </div>

              {/* Step 4: Upper KG */}
              <div className="progression-step step-ukg">
                <div className="step-circle-node node-lavender">
                  <span className="step-num">4</span>
                  <Sparkles size={20} className="step-icon" />
                </div>
                <div className="step-content">
                  <h4 className="step-name">Upper KG</h4>
                  <span className="step-age-tag">5–6 years</span>
                </div>
              </div>
            </div>

            <div className="progression-foot-note">
              <Sparkles size={16} className="note-star-icon" />
              <span>
                Children are always welcome to join Rubber Hills at any stage of their learning journey.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. ENQUIRY / VISIT US SECTION                                  */}
      {/* ============================================================== */}
      <section id="enquire" className="classes-enquiry-section" aria-label="Admission Enquiry">
        <div className="container">
          <div className="classes-enquiry-card">
            {/* Left Narrative Column */}
            <div className="enquiry-text-col">
              <PillBadge text="GET IN TOUCH" className="enquiry-pill" />

              <h2 className="enquiry-heading">Let's Begin Your Child's Journey</h2>

              {/* Exact Description from old HTML */}
              <p className="enquiry-lead">
                Tell us a little about your child and we will call you for more details. Children are always welcome to
                join.
              </p>

              <div className="enquiry-perks-list">
                <div className="enquiry-perk-item">
                  <div className="perk-bullet-dot" />
                  <span>Personalised campus tour & teacher interaction</span>
                </div>
                <div className="enquiry-perk-item">
                  <div className="perk-bullet-dot" />
                  <span>Transparent fee guidance & flexible admissions</span>
                </div>
                <div className="enquiry-perk-item">
                  <div className="perk-bullet-dot" />
                  <span>Caring support for first-time school parents</span>
                </div>
              </div>

              <div className="enquiry-direct-call">
                <span className="direct-call-label">Prefer to speak directly?</span>
                <a href="tel:+919876543210" className="direct-call-link">
                  📞 +91 98765 43210
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="enquiry-form-col">
              <div className="enquiry-form-wrapper">
                <h3 className="form-card-title">Request a Call Back</h3>
                <p className="form-card-subtitle">Fill out the quick form below and our team will reach out to you.</p>

                {/* Success Feedback Banner */}
                {successName && (
                  <div className="form-feedback success-banner" role="status">
                    <CheckCircle2 size={22} className="feedback-icon" />
                    <div>
                      <strong>Thank you, {successName}!</strong>
                      <p>We will call you soon with more details.</p>
                    </div>
                  </div>
                )}

                {/* Error Feedback Banner */}
                {errorMessage && (
                  <div className="form-feedback error-banner" role="alert">
                    <AlertCircle size={22} className="feedback-icon" />
                    <div>
                      <strong>Please check:</strong>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="classes-form" noValidate>
                  {/* Field 1: Parent Name */}
                  <div className="form-group">
                    <label htmlFor="classes-parent-name" className="form-label">
                      Parent Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="classes-parent-name"
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Field 2: Phone Number */}
                  <div className="form-group">
                    <label htmlFor="classes-phone-number" className="form-label">
                      Phone Number <span className="required-star">*</span>
                    </label>
                    <input
                      id="classes-phone-number"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Field 3: Child's Age */}
                  <div className="form-group">
                    <label htmlFor="classes-child-age" className="form-label">
                      Child's Age <span className="required-star">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="classes-child-age"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="2.5–3 years">2.5–3 years (Creche)</option>
                        <option value="3 years">3 years (Nursery)</option>
                        <option value="4 years">4 years (Lower KG)</option>
                        <option value="5 years">5 years (Upper KG)</option>
                        <option value="6 years">6 years</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button: Request a Call */}
                  <button type="submit" disabled={loading} className="btn-submit-call">
                    {loading ? (
                      <>
                        <Loader2 size={18} className="spinner-rotate" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Call</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
