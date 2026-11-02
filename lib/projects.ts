export type Project = {
  slug: string; name: string; category: string; short: string; challenge: string;
  approach: string; outcome: string; image: string; imageAlt: string; imageLabel: string; tone: string;
};

export const projects: Project[] = [
  {
    slug: "kivuli-house", name: "Kivuli House", category: "Brand identity · Lifestyle",
    short: "Giving a new-generation hospitality brand a feeling all its own.",
    challenge: "A fictional Nairobi hospitality concept needed to stand apart in a crowded lifestyle market without leaning on predictable luxury clichés.",
    approach: "We built the identity around contrast: warm human moments, confident typography and a visual system that feels collected rather than manufactured.",
    outcome: "A flexible concept identity spanning positioning, art direction, social templates and a digital home for the brand.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Warm contemporary coffee shop interior", imageLabel: "A PLACE TO PAUSE", tone: "tone-warm"
  },
  {
    slug: "form-and-function", name: "Form & Function", category: "Digital experience · Retail",
    short: "Making everyday objects feel anything but ordinary.",
    challenge: "A fictional design-led homeware store needed an online experience that could make considered products feel desirable and easy to explore.",
    approach: "We imagined a clean editorial storefront with oversized product storytelling, a clear shopping hierarchy and a playful graphic language.",
    outcome: "A concept e-commerce direction with a distinct art direction, product-page structure and responsive digital experience.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Minimal modern interior with carefully arranged furniture", imageLabel: "OBJECTS WITH INTENT", tone: "tone-cool"
  },
  {
    slug: "sauti-futures", name: "Sauti Futures", category: "Campaign · Social impact",
    short: "Turning a big issue into a conversation people can join.",
    challenge: "A fictional youth-focused sustainability initiative needed to move beyond awareness posters and give people a clear reason to participate.",
    approach: "We developed a campaign idea built around small visible actions, punchy copy and shareable creative designed for both digital and physical spaces.",
    outcome: "A campaign concept including the central message, sample social creative, poster direction and participation journey.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Dramatic green landscape under a bright sky", imageLabel: "SMALL ACTS. BIG RIPPLE.", tone: "tone-green"
  }
];
