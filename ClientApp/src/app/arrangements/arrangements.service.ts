import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Arrangement } from './arrangements.model';

/**
 * The service for handling arrangement information.
 * @class
 */
@Injectable()
export class ArrangementsService {
    /**
     * The base URL for the arrangements API calls.
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
        let baseApiUrl = 'http://localhost:62311/api/';
        this.baseApiUrl = baseApiUrl + 'arrangements/';
    }

    /**
     * Get a specified arrangement.
     * @param id    The unique ID for the arrangement.
     * @returns     An observable arrangement.
     */
    public getArrangement(id: string): Observable<Arrangement> {
        let url: string = this.baseApiUrl + id + '/';
        return this.http.get<Arrangement>(url);
    }
}
