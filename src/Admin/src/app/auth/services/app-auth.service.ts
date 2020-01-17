import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient} from '@angular/common/http';
import { ENDPPOINTS } from 'src/app/endpoints/rest.endpoints';
=======

>>>>>>> 3a86b7496ee067d3103d9a5e4c7d42ddd0bc559d
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

<<<<<<< HEAD
  constructor(private http:HttpClient ) { }

  login(person)
  {
    return this.http.post(ENDPPOINTS.LOGIN,person).toPromise();
  }
  logout(person)
  {
    return this.http.post('http://localhost:8080/authenticate',person).toPromise();
  }
=======
  constructor() { }
>>>>>>> 3a86b7496ee067d3103d9a5e4c7d42ddd0bc559d
}
