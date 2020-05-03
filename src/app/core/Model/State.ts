export interface IStateData {  
    state :string,
    statecode : string,
    districtData: DistrictData[]
}
export class DistrictData{
        district : string;
        notes: string;
        active :number;
        confirmed :number;
        deceased:number;
        recovered:number;
        delta : {
            confirmed:number;
            deceased:number;
            recovered:number;
        }
  
}
  
    
    
    


