import { InterfaceUnitsType } from "./location.type"

export interface IUser {
    firstname?: string
    lastname?: string
    username: string
    preferences: IUserPreferences,
    avatar: string
}

export interface IUserPreferences {
    interfaceLight: InterfaceLightType
    interfaceUnits: InterfaceUnitsType
}

export type InterfaceLightType = 'light' | 'dark'
