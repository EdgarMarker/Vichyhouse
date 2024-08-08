import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { tags } from 'sanity-plugin-tags'

export default defineConfig({
  name: 'default',
  title: 'vichyhouse',

  projectId: '2cbczt34',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), tags({})],

  schema: {
    types: schemaTypes,
  },
})
