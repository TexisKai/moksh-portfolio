import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = { title: 'Moksh Parjapati — Portfolio' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-5xl mx-auto p-6 lg:p-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
