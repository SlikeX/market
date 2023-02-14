import {Component, Inject, OnInit, Optional} from '@angular/core';
import {constants, CONSTANTS} from "../core/services/unnecessaryServices/constants.service";
import {generatedString, GeneratorService} from "../core/services/unnecessaryServices/generator.service";
import {GeneratorFactory} from "../core/services/unnecessaryServices/generator.factory";
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
    }
  ]
})
export class FirtsComponent implements OnInit {

  constructor(
    @Optional() @Inject(CONSTANTS) public constants: ConstantsModel,
    @Optional() @Inject(generatedString) public generator: string,
    @Optional() public generatorService: GeneratorService,
  ) { }

  ngOnInit(): void {
  }

}
