import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department',
  template: `<h1>Params : {{myParams | json}} </h1>
             <h1>QueryParams : {{myQueryParams | json}} </h1>
             <h1>Fragments : {{myFragments | json}} </h1>`,
  styles: [
    `
  `,
  ],
})
export class DepartmentComponent implements OnInit {
  myParams: any;
  myQueryParams: any;
  myFragments: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      console.log('params', res);
      this.myParams = res;
    });
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log('queryParams', res);
      this.myQueryParams = res;
    });
    this.activatedRoute.fragment.subscribe((res) => {
      this.myFragments = res;
      console.log('fragment', res);
    });
  }
}
