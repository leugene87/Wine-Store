import { WineService } from '../service/wine.service';
import { Wine } from '../models/wine';
import { Component} from '@angular/core';

@Component ({
  selector: 'app-addwine',
  templateUrl: './addwine.component.html',
  styleUrls: ['./addwine.component.css']
})
export class AddwineComponent {
 wname: string;
 wvolume: number;
 wprice: number;
 wqty: number;
  constructor(private wineService: WineService) { }
  addWine() {
    const wine: Wine = {
        id: null,
        name: this.wname,
        volume: this.wvolume,
        price: this.wprice,
        qty: this.wqty
    };
    this.wineService.postWine(wine).subscribe(
      res => {
        alert(wine.name + ' successfully added to database!\n Please, heck updated Wine List.');
        console.log(res);
      },
      err => {
        alert('An error has occurred while adding the wine');
        console.log(err);
      }
    );

  }




}
