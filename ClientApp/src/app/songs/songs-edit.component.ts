import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
     * @param route
     * @param router
     * @param service
     */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
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

    /**
     * Save changes to the song.
     */
    onSubmit(): void {
        this.service.saveSong(this.song)
            .subscribe(() => {
                this.router.navigate(['/songs']);
            });
    }
}
