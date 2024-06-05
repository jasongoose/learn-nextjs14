import { Metadata } from "next"
import NavBar from "../components/nav-bar"

import "../styles/global.css"

export const metadata: Metadata = {
  title: {
    template: '%s | NextMovies',
    default: 'NextMovies',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  )
}
