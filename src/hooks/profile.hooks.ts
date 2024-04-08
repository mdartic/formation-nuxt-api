import { HookContext } from '../declarations'

export const isAdminProfile = (context: HookContext): boolean => {
  return context.params.user?.profile === 'admin'
}

export const isUserProfile = (context: HookContext): boolean => {
  return context.params.user?.profile === 'user'
}
