import { LocationLanguageType } from './location.type'

export interface ISettings {
  interfaceLight: InterfaceLightType
  interfaceUnits: InterfaceUnitsType
  lang: LocationLanguageType
}

export type InterfaceLightType = 'light' | 'dark'
export type InterfaceUnitsType = 'metric' | 'imperial'
