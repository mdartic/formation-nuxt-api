import { authenticate } from '@feathersjs/authentication'
import type { Application } from '../../declarations'
import { HookContext } from '@feathersjs/feathers'

class MeService {
  async find(context: HookContext) {
    const { password, ...result } = context.user
    return result
  }
}

const mePath = 'me'

export const me = (app: Application) => {
	app.use(mePath, new MeService(), {
	  methods: ['find']
	})
	app.service(mePath).hooks({
		find: [authenticate('jwt')],
	})
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [mePath]: MeService
  }
}