import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemService } from '../../service/item.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  // @Input("item") 
  // private item: Item; 

  private item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private activetedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    var id = +this.activetedRoute.snapshot.params['id'];
    console.log(id);
    if(id){
      this.itemService.get(id).subscribe(item => this.item = item); 
      console.log(this.item); 
    }
    // else{
    //   console.log("Invalid id: routing back to home...");
    //   this.router.navigate(['']);
    // }
  }
}
