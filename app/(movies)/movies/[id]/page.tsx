import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function Page(props: { params: { id: string } }) {
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info...</h1>}>
                <MovieInfo id={props.params.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
                <MovieVideos id={props.params.id} />
            </Suspense>
        </div>
    )
}