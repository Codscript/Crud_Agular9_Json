import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient
    ) { }

  showOnMensage(msg: string): void{
    this.snackBar.open(msg, 'close',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    
  }
  /* Observable Padrão baseado em evento,
  Create recebe o post atravez do parametro `product`
  */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
/* Read retorna um get como array da api 
*/
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
/* Para pegar o id do produto */
  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
