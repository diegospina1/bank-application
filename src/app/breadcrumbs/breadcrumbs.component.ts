import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from "../service/breadcrumbs.service";
import {Breadcrumb} from "./breadcrumb.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private breadcrumbService: BreadcrumbsService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

}
