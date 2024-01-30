import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dream Web Market ',
  description: 'Dream web market, Renowed webdevlopment service provider scince 2016',
}

 const RootLayout =({ children })=> {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
       
        </body>
    </html>
  )
}
export default RootLayout