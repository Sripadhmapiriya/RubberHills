/**
 * Image Configuration for Rubber Hills Kindergarten
 * 
 * NOTE: Set `showPlaceholders: true` to display image placeholder wireframes,
 * or `false` once you provide your own photos!
 */

export const HERO_IMAGE_CONFIG = {
  // Set to false to show the real photos directly:
  showPlaceholders: false,

  // When you get your photos, place them in `/public/assets/` and update these paths:
  slots: {
    heroCampus: {
      src: '/assets/campus_hero.jpg',
      title: 'Main Campus Building Photo',
      recommendedSize: '1200 × 800 px (Landscape)',
      alt: 'Rubber Hills Kindergarten Campus Building',
    },
    galleryWalkway: {
      src: '/assets/campus_walkway.jpg',
      title: 'Garden Walkway Photo',
      recommendedSize: '600 × 400 px',
      alt: 'Campus Garden Walkway',
    },
    galleryClassroom: {
      src: '/assets/classroom_interior.jpg',
      title: 'Classroom Interior Photo',
      recommendedSize: '800 × 450 px',
      alt: 'Classroom Interior with Tree Mural',
    },
    galleryPlayground: {
      src: '/assets/outdoor_playground.jpg',
      title: 'Outdoor Playground Photo',
      recommendedSize: '600 × 400 px',
      alt: 'Outdoor Children Playground',
    },
  },
};
