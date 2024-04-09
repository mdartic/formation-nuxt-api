import { user } from './users/users'
import { movies } from './movies/movies'
import { me } from './me/me'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(user)
  app.configure(movies)
  app.configure(me)
  // All services will be registered here
}


