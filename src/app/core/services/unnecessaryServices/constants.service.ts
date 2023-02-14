import {InjectionToken} from "@angular/core";
import {ConstantsModel} from "../../models/constants.model";

export const constants = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'http://taskmanager.epam.com',
}
export const CONSTANTS = new InjectionToken<ConstantsModel>('constants')
