/**
 * Centralized Image Configuration for Rubber Hills Kindergarten
 * Master registry of all authentic original school photographs located in /original/
 */

export const ORIGINAL_IMAGES = {
  // 1. Main Campus Building Front Facade (722 × 1600 px)
  campusBuilding: {
    src: '/original/campus-building.jpg',
    alt: 'Rubber Hills Kindergarten Campus Building with yellow canopy and modern glass facade',
    title: 'Main Campus Building',
    width: 722,
    height: 1600,
    aspectRatio: '0.45:1',
  },

  // 2. Campus Garden Walkway with Grass Lines (700 × 1556 px)
  campusWalkway: {
    src: '/original/campus-walkway.jpg',
    alt: 'Stone walkway with green grass grid lines beside Rubber Hills campus building',
    title: 'Campus Garden Walkway',
    width: 700,
    height: 1556,
    aspectRatio: '0.45:1',
  },

  // 3. Outdoor Sports Court / Amphitheater (700 × 1556 px)
  campusCourt: {
    src: '/original/campus-court.jpg',
    alt: 'White-walled outdoor play court with stepped seating and tall rubber trees',
    title: 'Outdoor Play Court',
    width: 700,
    height: 1556,
    aspectRatio: '0.45:1',
  },

  // 4. Campus Ramp with Garden Railings (700 × 1556 px)
  campusRamp: {
    src: '/original/campus-ramp.jpg',
    alt: 'Paved ramp with modern railings leading down to the Rubber Hills Kindergarten entrance',
    title: 'Campus Entrance Ramp',
    width: 700,
    height: 1556,
    aspectRatio: '0.45:1',
  },

  // 5. Campus Gate & Driveway View (700 × 1556 px)
  campusEntrance: {
    src: '/original/campus-entrance.jpg',
    alt: 'Rubber Hills Kindergarten campus entrance gate and paved paver driveway',
    title: 'Main Campus Entrance Gate',
    width: 700,
    height: 1556,
    aspectRatio: '0.45:1',
  },

  // 6. Classroom Interior & Activity Tables (1600 × 1200 px)
  classroomActivity: {
    src: '/original/classroom-activity.jpg',
    alt: 'Bright kindergarten classroom with kidney activity tables, smart display screen and learning toys',
    title: 'Spacious Active Classroom',
    width: 1600,
    height: 1200,
    aspectRatio: '1.33:1',
  },

  // 7. Classroom Reading & Literacy Corner (1600 × 1200 px)
  classroomReading: {
    src: '/original/classroom-reading.jpg',
    alt: 'Kindergarten student engaged in picture book reading at colourful classroom table',
    title: 'Early Reading & Literacy Corner',
    width: 1600,
    height: 1200,
    aspectRatio: '1.33:1',
  },

  // 8. Indoor Playroom with Slide & Basketball (1600 × 1200 px)
  playroomIndoor: {
    src: '/original/playroom-indoor.jpg',
    alt: 'Indoor playroom featuring toddler slide, mini basketball hoop, swings and seesaw',
    title: 'Indoor Play Area',
    width: 1600,
    height: 1200,
    aspectRatio: '1.33:1',
  },

  // 9. Early Childhood Student Portrait (946 × 1346 px)
  studentPortrait: {
    src: '/original/student-portrait.jpg',
    alt: 'Smiling kindergarten toddler learning happily at classroom activity table',
    title: 'Happy Kindergarten Learner',
    width: 946,
    height: 1346,
    aspectRatio: '0.70:1',
  },

  // 10. Creche Play Area & Baby Swing (1008 × 1600 px)
  crecheSwing: {
    src: '/original/creche-swing.jpg',
    alt: 'Toddler playing in safety swing inside the Rubber Hills Creche with alphabet wall',
    title: 'Creche Play Area',
    width: 1008,
    height: 1600,
    aspectRatio: '0.63:1',
  },

  // 11. Outdoor Playground with Play Equipment (580 × 850 px)
  outdoorPlayground: {
    src: '/original/outdoor-playground.png',
    alt: 'Outdoor children playground with slides, swings, and seesaws surrounded by nature',
    title: 'Outdoor Children Playground',
    width: 580,
    height: 850,
    aspectRatio: '0.68:1',
  },

  // 12. School Crest Logo (1024 × 1024 px)
  schoolLogo: {
    src: '/original/school-logo.jpg',
    alt: 'Official Rubber Hills Kindergarten Crest Logo',
    title: 'Rubber Hills Logo',
    width: 1024,
    height: 1024,
    aspectRatio: '1:1',
  },
};

/**
 * Page-Specific Configurations
 */

// Home Page
export const HERO_IMAGE_CONFIG = {
  showPlaceholders: false,
  slots: {
    heroCampus: ORIGINAL_IMAGES.campusBuilding,
    galleryWalkway: ORIGINAL_IMAGES.campusWalkway,
    galleryClassroom: ORIGINAL_IMAGES.classroomActivity,
    galleryPlayground: ORIGINAL_IMAGES.outdoorPlayground,
  },
};

// About Page
export const ABOUT_IMAGES = {
  heroMain: ORIGINAL_IMAGES.campusEntrance,
  heroStudent: ORIGINAL_IMAGES.studentPortrait,
  heroPlayground: ORIGINAL_IMAGES.outdoorPlayground,
  storyVisual: ORIGINAL_IMAGES.campusRamp,
};

// Campus Page
export const CAMPUS_IMAGES = {
  topMain: ORIGINAL_IMAGES.campusBuilding,
  walkway: ORIGINAL_IMAGES.campusWalkway,
  classroom: ORIGINAL_IMAGES.classroomActivity,
  court: ORIGINAL_IMAGES.campusCourt,
};

// Learning Page
export const LEARNING_PAGE_IMAGES = {
  language: ORIGINAL_IMAGES.classroomReading,
  numeracy: ORIGINAL_IMAGES.classroomActivity,
  creative: ORIGINAL_IMAGES.studentPortrait,
  social: ORIGINAL_IMAGES.playroomIndoor,
  physical: ORIGINAL_IMAGES.outdoorPlayground,
  discovery: ORIGINAL_IMAGES.campusWalkway,
};

// Classes Page
export const CLASSES_PAGE_IMAGES = {
  nursery: ORIGINAL_IMAGES.studentPortrait,
  lkg: ORIGINAL_IMAGES.classroomReading,
  ukg: ORIGINAL_IMAGES.classroomActivity,
  creche: ORIGINAL_IMAGES.crecheSwing,
};

// Contact Page
export const CONTACT_IMAGES = {
  campusCard: ORIGINAL_IMAGES.campusBuilding,
  brandLogo: ORIGINAL_IMAGES.schoolLogo,
};
