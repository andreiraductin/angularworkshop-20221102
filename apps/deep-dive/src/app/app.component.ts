import { Component } from '@angular/core';
import { Router, NavigationStart, GuardsCheckEnd, NavigationEnd, NavigationError, NavigationCancel, GuardsCheckStart } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  showLoadingIndicator = false;
  title="Hello!";
  
  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationStart || e instanceof GuardsCheckEnd)).subscribe((event) => {
      this.showLoadingIndicator = true;
    });

    this.router.events
      .pipe(
        filter(
          (e) =>
            e instanceof NavigationEnd || e instanceof NavigationError || e instanceof NavigationCancel || e instanceof GuardsCheckStart
        )
      )
      .subscribe((event) => {
        this.showLoadingIndicator = false;
      });
  }
}


