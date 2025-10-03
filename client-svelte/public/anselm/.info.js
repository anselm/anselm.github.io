
export const anselm = {
  id: '/anselm',
  slug: '/anselm',
  parentId: 'root-group',  
  type: 'group',
  title: 'Anselm Hook',
  content: 'Media, Projects, Words, Favorites...',
  view: 'grid',
  depiction: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
  tags: ['artist', 'writer', 'developer', 'creative'],
  createdAt: '1967-01-10T12:00:00.000Z',
  updatedAt: '2025-10-02T12:00:00.000Z'
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export const anselmMedia = {
  id: '/anselm/media',
  slug: '/anselm/media',
  type: 'group',
  title: 'Media',
  content: 'Photos, art, travel',
  view: 'grid',
  depiction: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=600&fit=crop',
  parentId: '/anselm',
  sponsorId: '/anselm',
  tags: ['art', 'visual'],
  createdAt: '2024-01-11T10:00:00.000Z',
  updatedAt: '2024-01-11T10:00:00.000Z'
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export const anselmProjects = {
  id: '/anselm/projects',
  slug: '/anselm/projects',
  type: 'group',
  title: 'Projects',
  content: 'Including commercial products',
  view: 'cards',
  depiction: '/anselm/projects/2011/lightsuit/6121389208_28413e12f8_c.jpg',
  parentId: '/anselm',
  sponsorId: '/anselm',
  tags: ['projects'],
  createdAt: '2024-01-11T10:00:00.000Z',
  updatedAt: '2024-01-11T10:00:00.000Z'
};

const ci = `
# Digital

are technology

# Best
`

import { lightsuit } from '/anselm/projects/2011/lightsuit/.info.js'

export const anselmProjectsCI = {
  id: '/anselm/projects/2025/ci',
  slug: '/anselm/projects/2025/ci',
  type: 'post',
  title: 'Companion Intelligence',
  content: ci,
  depiction: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=800&fit=crop',
  parentId: '/anselm/projects',
  sponsorId: '/anselm',
  tags: ['digital-wellness', 'productivity', 'philosophy'],
  createdAt: '2025-03-05T16:00:00.000Z',
  updatedAt: '2025-03-05T16:00:00.000Z'
};

export const anselmProjects2011Lightsuit = {
  id: '/anselm/projects/2031/lightsuit',
  slug: '/anselm/projects/2031/lightsuit',
  type: 'post',
  title: 'Lightsuit',
  content: lightsuit,
  depiction: '/anselm/projects/2011/lightsuit/6121389208_28413e12f8_c.jpg',
  parentId: '/anselm/projects',
  sponsorId: '/anselm',
  tags: ['projects'],
  createdAt: '2011-01-11T11:00:00.000Z',
  updatedAt: '2011-01-11T11:00:00.000Z'
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export const anselmWords = {
  id: '/anselm/words',
  slug: '/anselm/words',
  type: 'group',
  title: 'Words',
  content: 'Thoughts, writing, articles',
  view: 'cards',
  depiction: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
  parentId: '/anselm',
  sponsorId: '/anselm',
  tags: ['writing', 'essays', 'philosophy', 'technology'],
  createdAt: '2024-01-11T10:00:00.000Z',
  updatedAt: '2024-01-11T10:00:00.000Z'
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export const anselmFavorites = {
  id: '/anselm/zfavorites',
  slug: '/anselm/favorites',
  type: 'group',
  title: 'Favorites',
  content: 'Favorite articles, links, works from other people',
  view: 'cards',
  depiction: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=600&fit=crop',
  parentId: '/anselm',
  sponsorId: '/anselm',
  tags: ['writing', 'essays', 'philosophy', 'technology'],
  createdAt: '2024-01-11T10:00:00.000Z',
  updatedAt: '2024-01-11T10:00:00.000Z'
};

