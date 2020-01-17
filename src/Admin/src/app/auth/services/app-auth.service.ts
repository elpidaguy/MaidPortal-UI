import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private http:HttpClient ) { }

  singIn(person)
  {
    return this.http.post('http://localhost:8080/authenticate',person).toPromise();
  }
  singUp(person)
  {
    return this.http.post('http://localhost:8080/authenticate',person).toPromise();
  }
}
