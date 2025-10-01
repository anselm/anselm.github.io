
export const anselm = {
  id: 'group-anselm-001',
  slug: '/anselm',
  parentId: 'root-group',  
  type: 'group',
  title: 'Anselm',
  content: 'Applied Philosophy',
  view: 'list',
  depiction: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
  tags: ['artist', 'writer', 'developer', 'creative'],
  createdAt: '2024-01-10T12:00:00.000Z'
};

////////////////////////////////////////////////////////////////////

export const anselmWords = {
  id: 'group-anselm-words-001',
  slug: '/anselm/words',
  type: 'group',
  title: 'Essays & Writings',
  content: 'Thoughts on technology, art and whatever crosses my mind',
  view: 'cards',
  depiction: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
  parentId: 'group-anselm-001',
  sponsorId: 'group-anselm-001',
  tags: ['writing', 'essays', 'philosophy', 'technology'],
  createdAt: '2024-01-11T11:00:00.000Z'
};

export const anselmMedia = {
  id: 'group-anselm-media-001',
  slug: '/anselm/media',
  type: 'group',
  title: 'Photos, Rich Media, Art, Travel',
  content: 'Sensory feasts and delights',
  view: 'grid',
  depiction: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=600&fit=crop',
  parentId: 'group-anselm-001',
  sponsorId: 'group-anselm-001',
  tags: ['art', 'visual'],
  createdAt: '2024-01-11T10:00:00.000Z'
};

export const anselmWork = {
  id: 'group-anselm-work-001',
  slug: '/anselm/work',
  type: 'group',
  title: 'Work',
  content: 'Notable products / passion projects',
  depiction: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=600&fit=crop',
  parentId: 'group-anselm-001',
  sponsorId: 'group-anselm-001',
  tags: ['work'],
  createdAt: '2024-01-11T10:00:00.000Z'
};


/////////////////////////////////////////////////////////////

export const wordsPost1 = {
  id: 'post-anselm-words-001',
  slug: '/anselm/words/ai-and-creativity',
  type: 'post',
  title: 'AI and the Future of Human Creativity',
  content: 'As we stand at the threshold of an AI-augmented future, we must ask ourselves: what does it mean to be creative? This essay explores the symbiotic relationship between human imagination and machine intelligence.',
  depiction: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-words-001',
  sponsorId: 'group-anselm-001',
  tags: ['ai', 'creativity', 'future', 'technology', 'philosophy'],
  createdAt: '2024-03-01T14:00:00.000Z'
};


export const wordsPost2 = {
  id: 'post-anselm-words-002',
  slug: '/anselm/words/digital-minimalism',
  type: 'post',
  title: 'Embracing Digital Minimalism',
  content: 'In an age of information overload, the practice of digital minimalism becomes not just beneficial, but essential for maintaining our cognitive clarity and creative potential.',
  depiction: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-words-001',
  sponsorId: 'group-anselm-001',
  tags: ['minimalism', 'digital-wellness', 'productivity', 'philosophy'],
  createdAt: '2024-03-05T16:00:00.000Z'
};

/////////////////////////////////////////////////////////////

export const workPost1 = {
  id: 'post-anselm-work-002',
  slug: '/anselm/work/companion-intelligence',
  type: 'post',
  title: 'Companion Intelligence',
  content: 'Roles and risks of digital assistants.',
  depiction: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-work-001',
  sponsorId: 'group-anselm-001',
  tags: ['digital-wellness', 'productivity', 'philosophy'],
  createdAt: '2024-03-05T16:00:00.000Z'
};


////////////////////////////////////////////////////////////////////

export const mediaPost1 = {
  id: 'post-anselm-media-001',
  slug: '/anselm/media/golden-gate-sunset',
  type: 'post',
  title: 'Golden Gate at Sunset',
  content: 'Captured this stunning view of the Golden Gate Bridge during a particularly vibrant sunset. The interplay of fog and light created these amazing layers.',
  depiction: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-media-001',
  sponsorId: 'group-anselm-001',
  tags: ['sunset', 'golden-gate', 'san-francisco', 'landscape'],
  latitude: 37.8199,
  longitude: -122.4783,
  radius: 1000,
  createdAt: '2024-02-15T18:30:00.000Z'
};

export const mediaPost2 = {
  id: 'post-anselm-media-002',
  slug: '/anselm/media/urban-geometry',
  type: 'post',
  title: 'Urban Geometry',
  content: 'Exploring the geometric patterns found in modern architecture. The repetition and symmetry create a mesmerizing visual rhythm.',
  depiction: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-media-001',
  sponsorId: 'group-anselm-001',
  tags: ['architecture', 'geometry', 'urban', 'patterns'],
  createdAt: '2024-02-20T14:00:00.000Z'
};

export const mediaPost3 = {
  id: 'post-anselm-media-003',
  slug: '/anselm/media/nature-abstract',
  type: 'post',
  title: 'Nature Abstract',
  content: 'Close-up exploration of natural textures and patterns. Nature is the ultimate artist.',
  depiction: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
  parentId: 'group-anselm-media-001',
  sponsorId: 'group-anselm-001',
  tags: ['nature', 'abstract', 'macro', 'texture'],
  createdAt: '2024-02-25T10:00:00.000Z'
};


