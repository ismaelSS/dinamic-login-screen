import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pagina de login dinamica',
  description: 'pagina de login moderna sem carregamento ao transitar para registro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className=''>{children}</body>
    </html>
  )
}
