import Navbar from '../../components/Navbar'
import './album.css'

export default function AlbumLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
   
        {children}
      </section>
    )
  }