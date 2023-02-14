import {Injectable} from '@angular/core';
import {ConfigInfoModel} from "../../models/config-info.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  private configuration!: ConfigInfoModel;

  getConfig(): ConfigInfoModel {
    return this.configuration;
  }

  setConfig(config: Partial<ConfigInfoModel>): void {
    this.configuration = {...this.configuration, ...config};
  }

  setConfigProperty(key: 'id' | 'login' | 'email', value: string): void {
    this.configuration[key] = value;
  }
}
