import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Prodotto Innovativo',
    description: 'Scopri il prodotto che cambierà la tua vita',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
} 