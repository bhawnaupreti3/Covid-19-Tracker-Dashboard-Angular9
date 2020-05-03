import { Component, OnInit } from '@angular/core';
import { INewsDetail } from '../core/Model/News';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsDataService } from '../core/Service/news-data.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  news: INewsDetail;
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router,
    private newsDataService: NewsDataService, private toastrService: ToastrService) { }

  ngOnInit() {
      this.newsForm = this.fb.group({
          title: ["", [Validators.required, Validators.minLength(5)]],
          description: ["", Validators.required],
          summary : ["", [Validators.required, Validators.minLength(15)]],
          fullNews: ["", Validators.required]
      });
  }

  save(newDetail: INewsDetail) {
    this.newsDataService.addUser(newDetail).subscribe();
    this.toastrService.success('User added successfully!');
    this.router.navigate(['/news']);
  }

  goBack() {
    this.router.navigate(['/news']);
  }
}
