import Link from '../src/components/Link/NextLink'
import { Header, HeaderImages } from '../styles/style.js'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header>
        <Image 
        src='/images/winelogo.png'
        width={120}
        height={40}
        />
        <Link href="/clube">
          Clube
        </Link>
        <Link href="/loja">
          Loja
        </Link>
        <Link href="/produtores">
          Produtores
        </Link>
        <Link href="/ofertas">
          Ofertas
        </Link>
        <Link href="/eventos">
          Eventos
        </Link>
        <HeaderImages>
          <Image 
            src='/images/lupa.png'
            width={50}
            height={50}
          />
          <Image 
            src='/images/user.png'
            width={50}
            height={50}
          />
          <Image 
            src='/images/carrinho.png'
            width={50}
            height={50}
          />
        </HeaderImages>
      </Header>
    </div>
  )
}
