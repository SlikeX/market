import {GeneratorService} from "./generator.service";

export function GeneratorFactory(n: number): (generator: GeneratorService) => string {
  return (generator: GeneratorService): string => generator.generate(n);
}
