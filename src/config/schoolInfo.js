/**
 * Centralized Business & Contact Information for Rubber Hills Kindergarten
 * Update this file when official school details are updated or verified.
 */

export const SCHOOL_INFO = {
  name: 'Rubber Hills Kindergarten',
  tagline: 'Play • Learn • Grow • Belong',
  group: 'Rubber Hills Group',
  
  // Official School Contact Email
  email: 'rubberhillskindergarten@gmail.com',
  
  // Official School Phone Number:
  // Set to official verified phone number (e.g., '+91 94470 XXXXX') once verified by school owners.
  // Kept null to prevent displaying placeholder / unverified phone numbers on the live site.
  phone: null,
  
  // Physical Campus Address (Preserved as confirmed by school source)
  address: {
    line1: 'Rubber Hills Kindergarten, Manjaloomodu',
    line2: 'RH Group, Punnathanam, Manjalumoodu – Malaicode Road',
    display: 'Rubber Hills Kindergarten, Manjaloomodu',
    full: 'Rubber Hills Kindergarten, RH Group, Punnathanam, Manjalumoodu – Malaicode Road',
  },
  
  // Official Social Media Links
  social: {
    facebook: 'https://www.facebook.com/share/1J9CG4KVtR/',
    instagram: 'https://www.instagram.com/rubberhillsgroup?psln=MTkzMHg2OXJjMzIzeQ==',
  },
  
  // School Founders (Preserved from approved source; flagged for owner review)
  founders: [
    {
      name: 'Ajin George',
      initials: 'AG',
      role: 'Founder',
      description: 'Founder. Retired Navy veteran.',
    },
    {
      name: 'Luie Femila',
      initials: 'LF',
      role: 'Founder & Educator',
      description:
        'Founder and educator. Experience in Navy kindergarten schools and Kendriya Vidyalayas, and as a business analyst with Barclays.',
    },
  ],
  
  // Core Programmes and Age Groups
  programmes: [
    { id: 'creche', name: 'Creche', age: '2–3 years', timing: '9:30 AM – 12:30 PM' },
    { id: 'nursery', name: 'Nursery', age: '3–4 years', timing: '9:00 AM – 1:00 PM' },
    { id: 'lkg', name: 'Lower KG', age: '4–5 years', timing: '9:00 AM – 1:00 PM' },
    { id: 'ukg', name: 'Upper KG', age: '5–6 years', timing: '9:00 AM – 1:00 PM' },
  ],
};
