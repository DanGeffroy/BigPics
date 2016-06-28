import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'big-pics-app',
  templateUrl: 'big-pics.component.html',
  styleUrls: ['big-pics.component.css']
})
export class BigPicsAppComponent {
   @Input() input = 'nature';
}
