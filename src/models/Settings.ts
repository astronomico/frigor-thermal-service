import { LocationLanguageType } from '../types/location.type'
import {
  ISettings,
  InterfaceLightType,
  InterfaceUnitsType
} from '../types/settings.type'

export default class Settings implements ISettings {
  interfaceLight!: InterfaceLightType
  interfaceUnits!: InterfaceUnitsType
  lang!: LocationLanguageType

  constructor(
    interfaceLight: InterfaceLightType,
    interfaceUnits: InterfaceUnitsType
  ) {
    this.interfaceLight = interfaceLight
    this.interfaceUnits = interfaceUnits
  }
}
