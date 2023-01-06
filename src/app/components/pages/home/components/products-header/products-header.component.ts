import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.components.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columsCountChange = new EventEmitter<number>();
  sort = 'desc'
  itemsShowCount = 12
  
  constructor () {}

  ngOnInit(): void {

  }  
  
  onSortUpdated (newSort: string): void {
    this.sort = newSort 
  }

  onItemsUpdated(count: number):void {
    this.itemsShowCount = count;
  }
  
  onColumnsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum)
  }
}
