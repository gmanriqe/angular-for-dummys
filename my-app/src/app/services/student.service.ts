import { Injectable } from '@angular/core'; /* 👶🏼 */
import { HttpClient } from '@angular/common/http';

/* 👶🏼 */
@Injectable({
  /* Investiguen 🙏🏼 */
  providedIn: 'root'
})

// @Injectable()

export class StudentService {
  constructor( private http: HttpClient) {
  }

  getList() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Courses');
  }
}
