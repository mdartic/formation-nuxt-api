// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { MoviesService } from './movies.class'

// Main data model schema
export const moviesSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    year: Type.Integer(),
    city: Type.Optional(Type.String()),
    author: Type.Optional(Type.String()),
    imageURL: Type.Optional(Type.String()),
  },
  { $id: 'Movies', additionalProperties: false }
)
export type Movies = Static<typeof moviesSchema>
export const moviesValidator = getValidator(moviesSchema, dataValidator)
export const moviesResolver = resolve<Movies, HookContext<MoviesService>>({})

export const moviesExternalResolver = resolve<Movies, HookContext<MoviesService>>({})

// Schema for creating new entries
export const moviesDataSchema = Type.Pick(moviesSchema, ['text', 'year', 'city', 'author', 'imageURL'], {
  $id: 'MoviesData'
})
export type MoviesData = Static<typeof moviesDataSchema>
export const moviesDataValidator = getValidator(moviesDataSchema, dataValidator)
export const moviesDataResolver = resolve<Movies, HookContext<MoviesService>>({})

// Schema for updating existing entries
export const moviesPatchSchema = Type.Partial(moviesSchema, {
  $id: 'MoviesPatch'
})
export type MoviesPatch = Static<typeof moviesPatchSchema>
export const moviesPatchValidator = getValidator(moviesPatchSchema, dataValidator)
export const moviesPatchResolver = resolve<Movies, HookContext<MoviesService>>({})

// Schema for allowed query properties
// export const moviesQueryProperties = Type.Pick(moviesSchema, ['id', 'text', 'year', 'city'])
export const moviesQuerySchema = Type.Intersect(
  [
    querySyntax(moviesSchema),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type MoviesQuery = Static<typeof moviesQuerySchema>
export const moviesQueryValidator = getValidator(moviesQuerySchema, queryValidator)
export const moviesQueryResolver = resolve<MoviesQuery, HookContext<MoviesService>>({})
