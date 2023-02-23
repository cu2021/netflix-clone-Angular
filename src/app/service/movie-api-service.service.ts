import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '08cc33bd5ae3a747598ce2ad84376e66';

  bannerApiData(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  // Trending Movies Api Data
  trendingMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  // Search Movies Api Data
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'Movie Search:');
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  // get movie details
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  // get movie video
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }
  // get movie cast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }
  // get Action Movies
  getActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`
    );
  }
  // Get Adventure Movies
  getAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`
    );
  }
  // Get Animation Movies
  getAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`
    );
  }
  // Get Comedy Movies
  getComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`
    );
  }
  // Get Documentary Movies
  getDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`
    );
  }
  // Get Science Fiction Movies
  getScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`
    );
  }
  // Get Thriller Movies
  getThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`
    );
  }
}
