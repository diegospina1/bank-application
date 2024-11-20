import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter} from "rxjs";
import {Breadcrumb} from "../breadcrumbs/breadcrumb.model";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs = this.buildBreadcrumb(this.router.routerState.snapshot.root);
        this.breadcrumbsSubject.next(breadcrumbs);
      });
  }

  private buildBreadcrumb(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const label = route.data['breadcrumb'] || '';
    const path = route.url.map(segment => segment.path).join('/');
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {label, url: nextUrl};
    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : breadcrumbs;
    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
