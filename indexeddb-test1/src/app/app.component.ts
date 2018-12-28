import { Component } from '@angular/core';
import { TestDaoService } from './services/test-dao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'indexeddb-test1';

  constructor(testDaoService: TestDaoService) {

  }


}
