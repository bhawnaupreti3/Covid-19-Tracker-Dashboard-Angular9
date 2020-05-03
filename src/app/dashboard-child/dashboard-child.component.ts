import { Component, OnInit, Input } from '@angular/core';
import { CountryDataService } from '../core/Service/country-data.service';
import { IStateData, DistrictData } from '../core/Model/State';


@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit {

  @Input() stateName : string
  public statedata : IStateData ;
  public districtdata : DistrictData[];
  displayedColumns: string[] = ['district', 'confirmed', 'active', 'recovered','deaths'];
  constructor(private _countryDataService : CountryDataService) { }

  ngOnInit() {  
    this._countryDataService.getStateData()
    .subscribe(data =>{ this.statedata = data.filter((filtervalue) => {    
      return (filtervalue.state == this.stateName);
    });
      this.statedata as IStateData;  
    
      this.districtdata = this.statedata[0].districtData;
      this.districtdata as DistrictData[];     
          });
    
  }

}
