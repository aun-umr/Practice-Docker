import "./globals.css"
export const metadata = {
  title: 'Romantic App',
  description: 'A romantic interactive application',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

