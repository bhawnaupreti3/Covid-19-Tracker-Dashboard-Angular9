import { Component, OnInit, ViewChildren, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild } from '@angular/core';
import { CountryDataService } from '../core/Service/country-data.service';
import { ICountryData } from '../core/Model/Country';
import { DashboardChildComponent } from '../dashboard-child/dashboard-child.component';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public countrydata : ICountryData[] = [];
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered','deaths'];

  @ViewChildren('tableRow', { read: ViewContainerRef }) rowContainers;
  expandedRow: number;
  componentRef: ComponentRef<any>;
  constructor(private _countryDataService : CountryDataService, private resolver : ComponentFactoryResolver) { }

  ngOnInit() {
    
    this._countryDataService.getCountryData()
    .subscribe(data =>{ this.countrydata = data.statewise.filter(function(stateName) {
      return stateName.state != "Total";
    });
      this.countrydata as ICountryData[];
    
          });
    
  }

  showStateDetails(index)
  {
    if (this.expandedRow != null) {
      // clear old content
      this.rowContainers.toArray()[this.expandedRow].clear();
    }

    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {
      const container = this.rowContainers.toArray()[index];
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(DashboardChildComponent);
      this.componentRef = container.createComponent(factory);
      
      this.componentRef.instance.stateName = this.countrydata[index].state;
      
      this.expandedRow = index;
    }
  }

  

}
