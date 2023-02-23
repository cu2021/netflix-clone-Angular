import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}
  bannerResult: any = [];
  trendingMoviesResult: any = [];
  actionMoviesResult: any = [];
  adventureMoviesResult: any = [];
  comedyMoviesResult: any = [];
  animationMoviesResult: any = [];
  documentaryMoviesResult: any = [];
  scienceFictionMoviesResult: any = [];
  thillerMoviesResult: any = [];

  ngOnInit() {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.animationMovies();
    this.documentaryMovies();
    this.scienceFictionMovies();
    this.thillerMovies();
  }
  // banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'banner result: ');
      this.bannerResult = result.results;
    });
  }
  // Trending Movies data
  trendingData() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      console.log(result, 'trending movies result: ');
      this.trendingMoviesResult = result.results;
    });
  }
  // Action Movies data
  actionMovies() {
    this.service.getActionMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.actionMoviesResult = result.results;
    });
  }
  // Adventure Movies data
  adventureMovies() {
    this.service.getAdventureMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.adventureMoviesResult = result.results;
    });
  }
  // Animation Movies data
  animationMovies() {
    this.service.getAnimationMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.animationMoviesResult = result.results;
    });
  }
  // Comedy Movies data
  comedyMovies() {
    this.service.getComedyMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.comedyMoviesResult = result.results;
    });
  }
  // Documentary Movies data
  documentaryMovies() {
    this.service.getDocumentaryMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.documentaryMoviesResult = result.results;
    });
  }
  // Science Fiction Movies data
  scienceFictionMovies() {
    this.service.getScienceFictionMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.scienceFictionMoviesResult = result.results;
    });
  }
  // Thiller Movies data
  thillerMovies() {
    this.service.getThrillerMovies().subscribe((result) => {
      console.log(result, 'action movies result: ');
      this.thillerMoviesResult = result.results;
    });
  }
}
