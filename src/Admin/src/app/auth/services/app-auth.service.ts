import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ENDPPOINTS } from 'src/app/endpoints/rest.endpoints';
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private http:HttpClient ) { }

  login(person)
  {
    return this.http.post(ENDPPOINTS.LOGIN,person).toPromise();
  }
  logout(person)
  {
    return this.http.post('http://localhost:8080/authenticate',person).toPromise();
  }
}
