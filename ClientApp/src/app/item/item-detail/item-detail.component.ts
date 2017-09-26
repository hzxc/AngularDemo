import { Component, OnInit,Input } from '@angular/core';
import { Item } from '../../service/item.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input("item") 
  private item: Item; 
  
  constructor() { }

  ngOnInit() {
  }

}
