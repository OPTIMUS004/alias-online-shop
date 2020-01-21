import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable()

export class ShopService {

  uri = 'api/products/products.json';

constructor(private http: HttpClient) {

}
getProducts(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.uri).pipe(
    tap(data=> console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError)
  )
  
}
getProduct(id: number): Observable<IProduct> {
  return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
}

searchSessions(searchTerm: string) {
    let search = '';
    for (let i = 0; searchTerm.length; i++) {
      const firstElement = searchTerm[0].toLocaleUpperCase();
      const deleteElement = searchTerm.slice(1);
      search = firstElement + deleteElement;
      break;
    }
    
    return this.http.get(`/api/data/search/${search}`)
    .pipe(catchError(this.handleError('SearchSessions', [])));

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
    };
  }
}

