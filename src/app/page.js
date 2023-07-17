import { Detail } from './components/Detail';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Index } from './components/Index';
import { Photos } from './components/Photos';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='max-w-[800px] mx-auto sm:mx-5'>
        <Index />
        <Photos />
        <Detail />
      </main>
      <Footer />
    </div>
  )
}
