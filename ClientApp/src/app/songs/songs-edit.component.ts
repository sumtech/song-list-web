import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Song } from './songs.model';
import { SongsService } from './songs.service';

@Component({
    selector: 'app-songs-edit',
    templateUrl: './songs-edit.component.html',
})
export class SongsEditComponent implements OnInit {
    /**
     * Song information.
     */
    public song: Song;

    /**
     * Constructor.
     * @constructor
     * @param service
     */
    constructor(
        private route: ActivatedRoute,
        private service: SongsService
    ) { }

    /**
     * Initialize the component.
     */
    ngOnInit(): void {
        const id: number = +this.route.snapshot.paramMap.get('id');
        this.service.getSong(id)
            .subscribe(song => this.song = song);
    }
}
