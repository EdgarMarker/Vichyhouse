import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Nombre del proyecto',
      type: 'string',
    }),
    defineField({
      name: 'projectSlug',
      title: 'Slug del proyecto',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'projectPreviewCard',
      title: 'Tarjeta vista previa de proyecto',
      description:
        'usados para visualizar un proyecto en toda la web con llamada de acción a la pagina del proyecto completa',
      type: 'object',
      fields: [
        {
          name: 'previewCardImg',
          title: 'Imagen de visual de tarjeta',
          type: 'image',
        },
        {
          name: 'previewCardType',
          title: 'Tipo de Proyecto para tarjeta',
          type: 'string',
        },
        {
          name: 'previewCardLocation',
          title: 'Ubicación solo para tarjeta (ejem.Mérida,Yuc.)',
          type: 'string',
        },
      ],
    }),
  ],
})
