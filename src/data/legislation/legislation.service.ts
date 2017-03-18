import { Injectable } from '@angular/core';
import { BaseDataService } from '../base-data.service';

const currentCongress = 115;

@Injectable()
export class LegislationService {

  constructor(private dataService: BaseDataService) {}

  getRecentBills(chamber, type) {
    const url = 'https://api.propublica.org/congress/v1/' + currentCongress + '/' + chamber + '/bills/' + type + '.json';
    return this.dataService.get(url);
  }

  getBill(url) {
    return this.dataService.get(url);
  }
}
