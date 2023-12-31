import type { Metadata } from 'next'
import './globals.css'
import WalletProvider from '@/components/providers/WalletProvider'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}
