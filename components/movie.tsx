"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

import { type Movie } from '../types';

import styles from "../styles/movie.module.css"

interface Props extends Movie {};

export default function Movie({ poster_path, title, id, }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} {...{ onClick }} />
      <Link href={`/movies/${id}`}>
          {title}
      </Link>
    </div>
  )
}