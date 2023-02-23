import { Observable } from 'rxjs';
import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovieDetailsResult: any = [];
  getMovieVideoResult: any = [];
  getMovieCastResult: any = [];

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }
  // get a movie by id
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getMovieDetails:');
      this.getMovieDetailsResult = result;
    });
  }
  // get Movie's Video
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo:');
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }
  // get Movie's cast
  getMovieCast(id: any) {
    return this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'getMovieCast:');
      this.getMovieCastResult = result.cast;
    });
  }
  //
}
