import { type Movie } from "../types";

import styles from "../styles/movie-info.module.css"

async function getMovie(id: string | number): Promise<Movie> {
  return await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`).then((res) => res.json());
}

export default async function MovieInfo({id}: { id: number | string }) {
  const movie = await getMovie(id);
  return (
    <div className={ styles.container }>
      <img className={ styles.poster } src={ movie.poster_path } alt="" />
      <div className={styles.info}>
        <h1 className={ styles.title }>{ movie.title }</h1>
        <h3>✨ { Number(movie.vote_average).toFixed(1) }</h3>
        <p>{ movie.overview }</p>
        <a href={ movie.homepage } target="_blank" >Homepage &rarr;</a>
      </div>
    </div>
  )
}