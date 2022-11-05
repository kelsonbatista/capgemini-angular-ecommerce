import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search() {
    if (this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
