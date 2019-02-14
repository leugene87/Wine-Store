import { Component, OnInit, ViewChild } from '@angular/core';
import {Wine} from '../models/wine';
import {WineService} from '../service/wine.service';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  wines: Wine[] = [];
  wineToUpdate: Wine;
  authority: string;
  theDataSource = new MatTableDataSource(this.wines);


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'volume', 'price', 'qty', 'action'];
  constructor(private wineService: WineService, private appComponent: AppComponent) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAllWines();
    this.authority = this.appComponent.authority;
    setTimeout(() => this.theDataSource.paginator = this.paginator);
  }

  updateQty(qty: number) {
      console.log(qty);
  }

  public getAllWines() {
    this.wineService.getAllWines().subscribe(
      res => {
        this.wines = res;
        this.theDataSource = new MatTableDataSource(this.wines);
        console.log(res);
      },
      err => {
        alert('An error has occurred');
        console.log(err);
      }
    );
  }

    public addWine(wine: Wine) {
    this.wineService.postWine(wine).subscribe(
      res => {
        this.wines = res;
      },
      err => {
        alert('An error has occurred');
        console.log(err);
      }
    );
  }

    public deleteWine(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
    this.wineService.deleteWine(id).subscribe(
      res => {
        alert('Wine with id: ' + id + ' deleted successfully!');
        console.log(res);
        location.reload();
      },
      err => {
        alert('An error has occurred while deleting');
        console.log(err);
      }
    );
  }


}
  public updateRowQty(id: string, qty: number) {
      this.wineToUpdate = this.wines.find(x => x.id === id);
      this.wineService.postWine(this.wineToUpdate).subscribe(
        res => {
            alert(this.wineToUpdate.name + '(id: ' + id + '): qty updated successfully!\nNew quontity: ' + qty);
            console.log(res);
        },
         err => {
             alert('An error has occurred while setting new q-ty');
             console.log(err);
         }
      );
   }

}


