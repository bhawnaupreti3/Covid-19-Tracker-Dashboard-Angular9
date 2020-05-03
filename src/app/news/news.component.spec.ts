import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsComponent } from './news.component';
import { NewsDataService } from '../core/Service/news-data.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let httpMock : HttpTestingController;
  let injector : TestBed;
  let service : NewsDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      declarations: [ NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsDataService],
      imports: [
        HttpClientTestingModule
      ],
    });
    injector =getTestBed();
    service =injector.get(NewsDataService);
    httpMock =injector.get(HttpTestingController);
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() =>{
    httpMock.verify();
  });

  const dummyUserListResponse: any={
 data: [{
    "id": 1,        
    "title" :"Covid -19",
    "description" : "Covid is far from over",
    "summary" : "Precaution are mandatory",
     "fullNews": "jhvvvvvvvvvvvvvcccjvjmvmj m"
  }, {
    "id": 2,        
    "title" :"Covid -19 PartII",
    "description" : "Covid is far from over again",
    "summary" : "Precaution are mandatory again",
     "fullNews": "jhvvvvvvvvvvvvvcccjvjmvmj m again"
  }],
};


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get news data', () => {
    service.getNewsrDetails().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
  });
});
})