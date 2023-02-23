import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private service: MovieApiServiceService) {}
  ngInit(): void {}
  searchResult: any = [];
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value, 'Search Form: ');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'Search Movie: ');
      this.searchResult = result.results;
    });
  }
}
