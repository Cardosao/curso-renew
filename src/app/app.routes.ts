// ====== ./app/app.routes.ts ======
import { RouterModule } from '@angular/router';
import { ErrorPage } from '../pages/error/error';
import { ButtonsPage } from '../pages/buttons/buttons';

export const XRouter = [
  { path: '', component: ButtonsPage },
  { path: 'error', component: ErrorPage }
];

RouterModule.forRoot(XRouter);

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  template: `
    <div>
      Showing product details for product: {{id}}
    </div>
  `,
})
export class LoanDetailsPage implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
