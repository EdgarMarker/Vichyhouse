import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Paginas',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Nombre de pagina',
      type: 'string',
    }),
    defineField({
      name: 'pageSections',
      title: 'Secciones de la pagina',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sections'}}],
    }),
  ],
})
