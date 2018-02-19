import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Arrangement } from './arrangements.model';
import { ArrangementsService } from './arrangements.service';

enum ArrangementView {
    Lyrics = 1,
    Chords = 2,
    Contents = 3
}

@Component({
    selector: 'app-arrangements-view',
    templateUrl: './arrangements-view.component.html',
    styleUrls: ['./arrangements-view.component.scss']
})
export class ArrangementsViewComponent implements OnInit {
    /**
     * Arrangement information.
     */
    public arrangement: Arrangement;

    /**
     * Indicates whether to show chords.
     */
    public showChords: boolean = true;

    /**
     * The view of the arrangments to use.
     */
    public arrangementView: ArrangementView = ArrangementView.Lyrics

    /**
     * Constructor.
     * @constructor
     * @param service
     */
    constructor(
        private route: ActivatedRoute,
        private service: ArrangementsService
    ) { }

    /**
     * Initialize the component.
     */
    public ngOnInit(): void {
        const id: string = this.route.snapshot.paramMap.get('id');
        this.service.getArrangement(id)
            .subscribe(arrangement => this.arrangement = arrangement);
    }
}
