async function getVideos(id: string) {
  await new Promise((resolve) => {
      setTimeout(resolve, 3000);
  });
  // return await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`).then((res) => res.json());
  throw Error('lol~')
}

export default async function MovieVideos({id}: { id: string }) {
  const videos = await getVideos(id);
  return (
    <h6>{JSON.stringify(videos)}</h6>
  )
}