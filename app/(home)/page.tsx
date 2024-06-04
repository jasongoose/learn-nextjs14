// "use client"
// import { useEffect, useState } from "react";

import Link from "next/link";

export const metadata = {
    title: 'Home',
}

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    return fetch(URL).then((res) => res.json());
}

export default async function Page() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    const movies = await getMovies();

    return (
        <ul>
            { movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            )) }
        </ul>
    );
}