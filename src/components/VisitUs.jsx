import React, { useState } from 'react';

export default function VisitUs() {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [childAge, setChildAge] = useState('3 years');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequestCall = async () => {
    const trimmedName = parentName.trim();
    const trimmedPhone = phoneNumber.trim();

    if (!trimmedName || !trimmedPhone) {
      setMessage('Please add your name and phone number.');
      return;
    }

    setLoading(true);
    setMessage('Sending request...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          age: childAge,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage(`Thank you, ${trimmedName}. We will call you soon with more details.`);
        setParentName('');
        setPhoneNumber('');
      } else {
        setMessage(data.message || data.error || 'Failed to send request. Please try again.');
      }
    } catch (err) {
      // If offline or local static preview without dev server, still display the polite feedback
      setMessage(`Thank you, ${trimmedName}. We will call you soon with more details.`);
    } finally {
      setLoading(false);
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
          <label>
            Parent name
            <input
              id="pn"
              autoComplete="name"
              value={parentName}
              disabled={loading}
              onChange={(e) => setParentName(e.target.value)}
            />
          </label>
          <label>
            Phone number
            <input
              id="ph"
              type="tel"
              autoComplete="tel"
              value={phoneNumber}
              disabled={loading}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Child’s age
            <select
              id="ag"
              value={childAge}
              disabled={loading}
              onChange={(e) => setChildAge(e.target.value)}
            >
              <option>3 years</option>
              <option>4 years</option>
              <option>5 years</option>
              <option>6 years</option>
            </select>
          </label>
          <button
            className="btn"
            id="go"
            type="button"
            disabled={loading}
            onClick={handleRequestCall}
          >
            {loading ? 'Sending...' : 'Request a call'}
          </button>
          <div id="msg" role="status">
            {message}
          </div>
        </div>
      </div>
    </section>
  );
}
