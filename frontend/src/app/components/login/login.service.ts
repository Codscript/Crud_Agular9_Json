import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:3333/login"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showOnMensage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'close',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-sucess']
    })  
  }

  readLogin(login: string, senha: string): Observable<Usuario[]>{
    const url = `${this.baseUrl}/${login}/${senha}`
    return this.http.get<Usuario[]>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showOnMensage('Usuario e ou senha invalido verifique os dados e tente novamnte!', true)
    return EMPTY
  }
}
