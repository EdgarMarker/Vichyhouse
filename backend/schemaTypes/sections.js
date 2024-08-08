import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sections',
  title: 'Secciones',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionName',
      title: 'Nombre de pagina',
      type: 'string',
    }),
    defineField({
      name: 'homeHeroSomosExpertos',
      title: 'Somos Expertos en:',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
            }),
            defineField({
              name: 'gallery',
              title: 'Imágenes',
              type: 'array',
              of: [{type: 'image'}],
              options: {
                layout: 'grid',
              },
              validation: (Rule) =>
                Rule.max(2).error('Por diseño solo puedes añadir un máximo de 2 Imágenes.'),
            }),
          ],
        },
      ],
      hidden: ({document}) => !['Home_Hero'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeIntro',
      title: 'Introducción de página home',
      type: 'object',
      fields: [
        {
          name: 'homeIntroTitleH1',
          title: 'Título h1 para SEO (se recomienda palabras clave para el posicionamiento)',
          type: 'string',
        },
        {
          name: 'homeIntroSubtitleH2Underline',
          title: 'Frase SUBRAYADA h2 de introducción de página',
          description: 'Esta frase estará subrayada',
          type: 'string',
        },
        {
          name: 'homeIntroSubtitleH2',
          title: 'Continuidad del h2 de introducción de página',
          type: 'string',
        },
      ],

      hidden: ({document}) => !['Home_Intro'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeApproach',
      title: 'Enfoque de pagina principal',
      type: 'object',
      fields: [
        defineField({
          name: 'homeApproachTextH3',
          title: 'Titulillo de sección tipo h3',
          type: 'string',
        }),
        defineField({
          name: 'homeApproachTextH2',
          title: 'Titulo llamativo de sección tipo h2',
          type: 'string',
        }),
        defineField({
          name: 'homeApproachTextP',
          title: 'Texto descriptivo',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'homeApproachImg',
          title: 'Imagen Ilustrativa',
          type: 'image',
        }),
      ],
      hidden: ({document}) => !['Home_Enfoque'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeServices',
      title: 'Servicios para pagina principal',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'homeServicesH2',
              title: 'Titulo llamativo tipo h2',
              type: 'string',
            },
            {
              name: 'homeServicesP',
              title: 'Texto descriptivo',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
      hidden: ({document}) => !['Home_Servicios'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeProjects',
      title: 'Proyectos destacados para pagina principal',
      type: 'object',
      fields: [
        {
          name: 'relevantProjectsH2',
          title: 'Frase titulo llamativo de sección tipo h2',
          type: 'string',
        },
        {
          name: 'relevantProjectsH2Italic',
          title: 'Frase titulo en CURSIVA llamativo de sección tipo h2 ',
          type: 'string',
        },
        {
          name: 'relevantProjectPreview',
          title: 'Proyectos relevantes',
          description: 'Máximo 3 proyectos para conservar diseño',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'projects'}]}],
          validation: (Rule) =>
            Rule.max(3).error('Por diseño solo puedes añadir un máximo de 3 Diseños.'),
        },
      ],
      hidden: ({document}) => !['Home_Proyectos_Destacados'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeBlog',
      title: 'Artículos relevantes de blog para pagina principal',
      type: 'object',
      fields: [
        {
          name: 'homeBlogH2',
          title: 'Frase de titulo llamativo de sección',
          type: 'string',
        },
        {
          name: 'homeBlogH2Italic',
          title: 'Frase de titulo CURSIVA llamativo de sección',
          type: 'string',
        },
        {
          name: 'homeBlogDescription',
          title: 'Descripción llamativa corta',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'homeBlogImg',
          title: 'Imagen ilustrativa de la sección',
          type: 'image',
        },
        {
          name: 'homeBlogArticle',
          title: 'Artículos destacados',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'blog'}]}],
        },
      ],
      hidden: ({document}) => !['Home_Blog'].includes(document?.sectionName),
    }),
    defineField({
      name: 'homeDivisor',
      title: 'Divisor de pagina principal',
      type: 'object',
      fields: [
        {
          name: 'divisorTitle1',
          title: 'Primera frase llamativa de divisor',
          type: 'string'
        },
        {
          name: 'divisorTitle2',
          title: 'Segunda frase llamativa de divisor',
          type: 'string'
        },
        {
          name: 'divisorImg',
          title: 'Imagen de divisor',
          type: 'image'
        }
      ],
      hidden: ({document}) => !['Home_Divisor'].includes(document?.sectionName),
    })
  ],
})
