import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('TOKEN') !== null) {      
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.clear();
    this.isLoggedIn =false;
    this.router.navigate(['/dashboard']);
  }

  test(a){
    if(a===0)    
    {
      console.log("dash");
      this.router.navigate(['/dashboard'])
    }
      
    else if(a===1)    
      this.router.navigate(['/news'])
    else if(a===2)    
      this.router.navigate(['/precautions'])   
  }

  onClick()
  {
    this.router.navigate(['/dashboard'])
  }
    login()
    {      
      console.log("route to login");
      this.router.navigate(['/login'])
    }
    addnews()
    {
      this.router.navigate(['/addnews'])
    }
  }
  


