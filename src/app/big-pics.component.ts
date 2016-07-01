import { Component, Input } from '@angular/core';
declare var $:any;
@Component({
  moduleId: module.id,
  selector: 'big-pics-app',
  templateUrl: 'big-pics.component.html',
  styleUrls: ['big-pics.component.css']
})
export class BigPicsAppComponent {
   @Input() input = 'nature';
   pics = ["01","02","03","04","05","06","07","08","09","10","11","12"];

   scrollToGallery(event){

  }

}
