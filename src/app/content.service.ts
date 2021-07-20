import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadGames() {
    return this.http.get<IGame[]>('https://free-to-play-games-database.p.rapidapi.com/api/games/?rapidapi-key=993c9e4f01mshaa5408210a8277bp1b663ejsn032803fa1b8a')
  }
}
