import './globals.css'

export const metadata = {
  title: 'Sunshine Cleaning Services',
  description: 'O Melhor para seu serviço e seu lar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-150">{children}</body>
    </html>
  )
}
