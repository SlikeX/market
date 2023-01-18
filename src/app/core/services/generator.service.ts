import {getNewID} from "./gen-id.generator";

export class GeneratorService {

  generate(n: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < n; ++i) {
      result += alphabet[Math.floor(alphabet.length * Math.random())];
    }
    return result
  };

  getNewID = getNewID;
}
