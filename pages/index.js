import Link from '../src/components/Link/NextLink'

export default function Home() {
  return (
    <div>
      <p>Winne Home</p>
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
    </div>
  )
}
