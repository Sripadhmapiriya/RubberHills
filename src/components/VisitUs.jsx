import React, { useState } from 'react';

export default function VisitUs() {
  const [parentVisitorName, setParentVisitorName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [childName, setChildName] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Validate contact number (allows domestic 10-digit numbers or international formats with optional +)
  const isValidContactNumber = (phone) => {
    const cleaned = phone.trim();
    const digitsOnly = cleaned.replace(/\D/g, '');
    const validCharacters = /^[+]?[\d\s\-()]{10,16}$/.test(cleaned);
    return validCharacters && digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const handleRequestCall = async () => {
    const trimmedParent = parentVisitorName.trim();
    const trimmedContact = contactNumber.trim();
    const trimmedChild = childName.trim();

    // Field-level validations
    if (!trimmedParent) {
      setStatus('error');
      setStatusMessage('Please enter Parent / Visitor Name.');
      return;
    }

    if (!trimmedContact) {
      setStatus('error');
      setStatusMessage('Please enter your Contact Number.');
      return;
    }

    if (!isValidContactNumber(trimmedContact)) {
      setStatus('error');
      setStatusMessage('Please enter a valid Contact Number (at least 10 digits).');
      return;
    }

    if (!trimmedChild) {
      setStatus('error');
      setStatusMessage('Please enter Child’s Name.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Sending your enquiry...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentVisitorName: trimmedParent,
          contactNumber: trimmedContact,
          childName: trimmedChild,
          // Aliases for compatibility
          name: trimmedParent,
          phone: trimmedContact,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setStatusMessage(
          `Thank you, ${trimmedParent}. Your enquiry for ${trimmedChild} has been submitted successfully. We will call you soon at ${trimmedContact}.`
        );
        // Clear fields on successful submission
        setParentVisitorName('');
        setContactNumber('');
        setChildName('');
      } else {
        setStatus('error');
        setStatusMessage(
          data.message || data.error || 'Failed to send your enquiry. Please try again later.'
        );
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(
        'Unable to send enquiry. Please check your connection or contact us at rubberhillskindergarten@gmail.com.'
      );
    }
  };

  return (
    <section id="enrol" className="fade-in-section">
      <div className="enrol">
        <div>
          <h2>Visit us</h2>
          <p>
            Tell us a little about your child and we will call you for more details. Children are always welcome to join.
          </p>
        </div>
        <div>
          <label htmlFor="pvn">
            Parent / Visitor Name <span className="req">*</span>
            <input
              id="pvn"
              type="text"
              autoComplete="name"
              placeholder="e.g. John Doe"
              value={parentVisitorName}
              disabled={status === 'loading'}
              onChange={(e) => {
                setParentVisitorName(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
            />
          </label>
          <label htmlFor="cn">
            Contact Number <span className="req">*</span>
            <input
              id="cn"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. 9876543210"
              value={contactNumber}
              disabled={status === 'loading'}
              onChange={(e) => {
                setContactNumber(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
            />
          </label>
          <label htmlFor="chn">
            Child’s Name <span className="req">*</span>
            <input
              id="chn"
              type="text"
              autoComplete="off"
              placeholder="e.g. Emma"
              value={childName}
              disabled={status === 'loading'}
              onChange={(e) => {
                setChildName(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
            />
          </label>
          <button
            className="btn"
            id="go"
            type="button"
            disabled={status === 'loading'}
            onClick={handleRequestCall}
          >
            {status === 'loading' ? 'Sending enquiry...' : 'Request a call'}
          </button>
          {statusMessage && (
            <div
              id="msg"
              role="status"
              className={
                status === 'success'
                  ? 'form-msg-success'
                  : status === 'error'
                  ? 'form-msg-error'
                  : ''
              }
            >
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
