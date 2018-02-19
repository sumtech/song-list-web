import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { AlbumsListComponent } from './albums/albums-list.component';
import { AlbumsEditComponent } from './albums/albums-edit.component';

import { ArrangementsListComponent } from './arrangements/arrangements-list.component';
import { ArrangementsEditComponent } from './arrangements/arrangements-edit.component';
import { ArrangementsViewComponent } from './arrangements/arrangements-view.component';
import { ArrangementsService } from './arrangements/arrangements.service';

import { ArtistsListComponent } from './artists/artists-list.component';
import { ArtistsEditComponent } from './artists/artists-edit.component';

import { ListsListComponent } from './lists/lists-list.component';
import { ListsEditComponent } from './lists/lists-edit.component';

import { SongsListComponent } from './songs/songs-list.component';
import { SongsEditComponent } from './songs/songs-edit.component';
import { SongsService } from './songs/songs.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,

        AlbumsListComponent,
        AlbumsEditComponent,

        ArrangementsEditComponent,
        ArrangementsListComponent,
        ArrangementsViewComponent,

        ArtistsListComponent,
        ArtistsEditComponent,

        ListsListComponent,
        ListsEditComponent,

        SongsListComponent,
        SongsEditComponent
        
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full'
            },

            {
                path: 'albums',
                component: AlbumsListComponent,
                pathMatch: 'full'
            },
            {
                path: 'albums/new',
                component: AlbumsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'albums/edit/:id',
                component: AlbumsEditComponent,
                pathMatch: 'full'
            },

            {
                path: 'arrangements',
                component: ArrangementsListComponent,
                pathMatch: 'full'
            },
            {
                path: 'arrangements/new',
                component: ArrangementsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'arrangements/edit/:id',
                component: ArrangementsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'arrangements/:id',
                component: ArrangementsViewComponent,
                pathMatch: 'full'
            },

            {
                path: 'artists',
                component: ArtistsListComponent,
                pathMatch: 'full'
            },
            {
                path: 'artists/new',
                component: ArtistsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'artists/edit/:id',
                component: ArtistsEditComponent,
                pathMatch: 'full'
            },

            {
                path: 'lists',
                component: ListsListComponent,
                pathMatch: 'full'
            },
            {
                path: 'lists/new',
                component: ListsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'lists/edit/:id',
                component: ListsEditComponent,
                pathMatch: 'full'
            },

            {
                path: 'songs',
                component: SongsListComponent,
                pathMatch: 'full'
            },
            {
                path: 'songs/new',
                component: SongsEditComponent,
                pathMatch: 'full'
            },
            {
                path: 'songs/edit/:id',
                component: SongsEditComponent,
                pathMatch: 'full'
            }
        ])
    ],
    providers: [
        ArrangementsService,
        SongsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
