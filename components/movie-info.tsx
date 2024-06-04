async function getMovie(id: string) {
  await new Promise((resolve) => {
      setTimeout(resolve, 5000);
  });
  return await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`).then((res) => res.json());
}

export default async function MovieInfo({id}: { id: string }) {
  const movie = getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>
}