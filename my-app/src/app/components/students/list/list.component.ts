import { Component } from '@angular/core'; /* 👶🏼 */
import { StudentService } from '../../../services/student.service';


@Component({
  selector: 'app-list', /* 👶🏼 */
  templateUrl: './list.component.html', /* 👶🏼 */
  styleUrls: ['./list.component.scss'] /* 👶🏼 */
})
export class ListComponent {
  results = [];

  constructor( private objStudentService: StudentService ) {
    this.objStudentService
                      .getList()
                      .subscribe( (res: any) => {
                        console.log(res);
                        this.results = res;
                      });

   }
}
