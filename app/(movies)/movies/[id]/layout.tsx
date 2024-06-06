import { PropsWithChildren } from "react";

export async function generateMetadata(props: { params: { id: string } }) {
  const { title } = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${props.params.id}`).then((res) => res.json());
  return {
    title
  };
}

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>
}