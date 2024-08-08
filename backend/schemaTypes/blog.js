import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'articleName',
      title: 'Nombre del artículo',
      type: 'string',
    }),
    defineField({
      name: 'articleCategory',
      title: 'Categorías',
      description:
        'Dentro del apartado que dice "select..." usted puede escribir directamente para crear nuevos tags, y los que anteriormente fueron creados aparecerán en la caja de opciones de otros artículos',
      type: 'tags',
      options: {
        includeFromRelated: 'articleCategory',
      },
    }),
    defineField({
      name: 'articleImg',
      title: 'Imagen de articulo',
      type: 'image',
    }),
    defineField({
      name: 'articleDescription',
      title: 'Breve descripción de articulo',
      type: 'array',
      of: [{ type: 'block'}]
    }),
    defineField({
      name: 'articleLink',
      title: 'Link de articulo',
      type: 'string',
    }),
  ],
})
