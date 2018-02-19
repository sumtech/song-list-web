import { Album } from '../albums/albums.model';
import { Artist } from '../artists/artists.model';
import { Arrangement } from '../arrangements/arrangements.model';

/**
 * Represents a song.
 * @class
 */
export class Song {
    /**
     * The unique identifier for the song.
     */
    id: number;

    /**
     * The title of the song.
     */
    title: string;

    /**
     * The name of the album on which this song appeared.
     */
    album: string;

    /**
     * The year the song was composed.
     */
    copyrightYear: number;

    /**
     * The first line of the song.
     */
    firstLine: string;

    /**
     * The list of persons who performed this song.
     */
    artists: Artist[];

    /**
     * The list of persons who wrote/composed the song.
     */
    writers: Artist[];

    /**
     * The arrangments of this song.
     */
    arrangements: Arrangement[];
}
