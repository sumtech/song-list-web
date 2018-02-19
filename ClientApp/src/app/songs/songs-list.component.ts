import { Component, OnInit } from '@angular/core';

import { SongsService } from './songs.service';
import { Song } from './songs.model';

@Component({
    selector: 'app-songs-list',
    templateUrl: './songs-list.component.html',
})
export class SongsListComponent implements OnInit {
    /**
     * The list of songs.
     */
    public songs: Song[];

    /**
     * The constructor.
     * @constructor
     * @param service
     */
    constructor(
        private service: SongsService
    ) { }

    /**
     * Handle initialization fo the component.
     */
    ngOnInit(): void {
        this.service.getSongs()
            .subscribe(songs => this.songs = songs);
    }
}
