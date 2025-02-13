import { CollectionConfig } from 'payload'
export const CodeSnippets: CollectionConfig = {
  slug: 'code-snippets',
  access: {
    create: () => false,
    delete: () => false,
    read: () => true,
    update: () => false,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'code',
    },
  ],
}
