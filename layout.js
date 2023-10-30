export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }

  export const metadata = {
    title: 'Acme',
    openGraph: {
      title: 'Acme',
      description: 'Acme is a...',
    },
  }