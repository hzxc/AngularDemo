import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemService } from '../../service/item.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  @Input() class: string;

  title: string;
  selectedItem: Item;
  items: Item[];
  errorMessage: string;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    console.log("ItemListComponent instantiated with the following type: " + this.class);

    var s = null;
    switch (this.class) {

      case "latest":

      default:

        this.title = "Latest Items";

        s = this.itemService.getLatest();

        break;

      case "most-viewed":

        this.title = "Most Viewed Items";

        s = this.itemService.getMostViewed();

        break;

      case "random":

        this.title = "Random Items";

        s = this.itemService.getRandom();

        break;

    }

    s.subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    );

    // this.getLatest();
  }

  // getLatest() {
  //   this.itemService.getLatest()
  //     .subscribe(
  //     latestItems => this.items = latestItems,
  //     error => this.errorMessage = <any>error
  //     );
  // }

  onSelect(item: Item) {
    this.selectedItem = item;
    console.log("item with Id " + this.selectedItem.Id + " has been selected.");
  }
}
