import { Inter } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mx-auto mb-auto w-full px-2 md:w-5/6 md:max-w-4xl lg:w-3/4 xl:w-10/12">
          {children}
        </main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
