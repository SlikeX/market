import {Component, Inject, OnInit, Optional} from '@angular/core';
import {constants, CONSTANTS} from "../core/services/constants.service";
import {generatedString, GeneratorService} from "../core/services/generator.service";
import {GeneratorFactory} from "../core/services/generator.factory";
import {LocalStorageService, localStorageServiceToken} from "../core/services/local-storage.service";
import {ConstantsModel} from "../core/models/constants.model";

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.scss'],
  providers: [
    {provide: CONSTANTS, useValue: constants},
    {
      provide: generatedString,
      useFactory: GeneratorFactory(5),
      deps: [GeneratorService]
    },
    {
      provide: localStorageServiceToken, useValue: new LocalStorageService()
    }
  ]
})
export class FirtsComponent implements OnInit {

  constructor(
    @Optional() @Inject(CONSTANTS) public constants: ConstantsModel,
    @Optional() @Inject(generatedString) public generator: string,
    @Optional() @Inject(localStorageServiceToken) public localStorageService: LocalStorageService,
    @Optional() public generatorService: GeneratorService,
  ) { }

  ngOnInit(): void {
  }

}
