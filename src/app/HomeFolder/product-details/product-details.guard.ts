import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {

  constructor( private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[2].path;

      if (isNaN(id) || id < 1 ){
        console.log(next.url[2])
        alert("Invalid product Id");
        this.router.navigate(['alias/products'])
        return false;
      }
      return true;
  }
  
}
