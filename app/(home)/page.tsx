// "use client"

import Movie from "../../components/movie";

import styles from '../../styles/home.module.css'

export const metadata = {
    title: 'Home',
}

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    return fetch(URL).then((res) => res.json());
}

export default async function Page() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            { movies.map((movie) => (
                <Movie { ...movie } />
            )) }
        </div>
    );
}