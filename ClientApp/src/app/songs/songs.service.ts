import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Song } from './songs.model';

/**
 * The service for handling song information.
 * @class
 */
@Injectable()
export class SongsService {
    /**
     * The base URL for the songs API calls.
     */
    private baseApiUrl;

    /**
     * The constructor.
     * @constructor
     * @param http
     */
    constructor(
        private http: HttpClient,
    ) {
        let baseApiUrl = 'http://localhost:11111/api/';
        this.baseApiUrl = baseApiUrl + 'songs/';
    }

    /**
     * Get the list of songs which are available.
     * @returns         An observable list of songs.
     */
    public getSongs(): Observable<Song[]> {
        let url: string = this.baseApiUrl;
        return this.http.get<Song[]>(url);
    }

    /**
     * Get a specified song.
     * @param id        The unique ID for the song.
     * @returns         An observable song.
     */
    public getSong(id: number): Observable<Song> {
        let url: string = this.baseApiUrl + id + '/';
        return this.http.get<Song>(url);
    }

    /**
     * Save a song record.
     * @param song      The song information.
     * @returns         An observable song.
     */
    public saveSong(song: Song): Observable<Song> {
        let url: string = this.baseApiUrl;
        if (song.id) {
            url += song.id + '/';
            return this.http.put<Song>(url, song);
        } else {
            return this.http.post<Song>(url, song);
        }
    }
}
