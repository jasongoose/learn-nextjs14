import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
  return await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`).then((res) => res.json());
}

export default async function MovieVideos({id}: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allowFullScreen></iframe>)}
    </div>
  )
}