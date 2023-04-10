import { ISettings } from './settings.type'

export interface IUser {
  firstname?: string
  lastname?: string
  username: string
  preferences: ISettings
  avatar: string
}
