import {InjectionToken} from "@angular/core";

export class LocalStorageService {

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}

export const localStorageServiceToken = new InjectionToken<LocalStorageService>('localStorageService');
