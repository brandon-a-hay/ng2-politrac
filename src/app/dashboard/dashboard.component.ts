import { Component } from '@angular/core';
import { LegislationService } from '../../data/legislation/legislation.service';
import { BaseDataService } from '../../data/base-data.service';
import { Bill } from 'data/legislation/bill';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [LegislationService, BaseDataService]
})
export class DashboardComponent {
  private dataStore: {
    legislation: Bill[]
  };
  private isLoading = true;

  constructor(private legislationService: LegislationService) {
    this.dataStore = { legislation: [] };

    this.legislationService.getRecentBills('senate', 'introduced')
    .subscribe(res => {
      this.dataStore.legislation = res.results[0].bills;
      this.isLoading = false;
    });
  }

  get legislation() {
    return Observable.of(this.dataStore.legislation);
  }

  getBillDetails(billId) {
    const bill = this.dataStore.legislation.filter(x => x.number === billId)[0];
    this.legislationService.getBill(bill.bill_uri).subscribe(res => {
      bill.details = res.results[0];
    });
  }

  refresh(billType) {
    this.isLoading = true;

    this.legislationService.getRecentBills('senate', billType)
    .subscribe(res => {
      this.dataStore.legislation = res.results[0].bills;
      this.isLoading = false;
    });
  }

}
