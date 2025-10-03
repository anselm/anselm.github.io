// Static entities that are bundled with the client
// These entities can reference local assets in the public folder

export const rootGroup = {
  id: 'root-group',
  slug: '/',
  type: 'group',
  title: '/Home',
  content: 'Welcome',
  view: 'list',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  permissions: ['public:view'],
  metadata: {
    isRoot: true,
    description: 'This is the root group that serves as the top-level container for all other entities'
  }
};

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

