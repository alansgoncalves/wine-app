import Link from "../src/components/Link/NextLink";
import {
  Header,
  HeaderImages,
  Form,
  FormWine,
  PriceOpt,
  Container,
} from "../styles/style.js";
import Image from "next/image";
import Prices from "../src/components/Prices/Prices";

const defaultEndpoint = "https://wine-back-test.herokuapp.com/products/";

export async function getStaticProps() {
  const response = await fetch(defaultEndpoint);
  const data = await response.json();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const { items = [] } = data;
  return (
    <div>
      <Header>
        <Image src="/images/winelogo.png" width={120} height={40} />
        <Link href="/clube">Clube</Link>
        <Link href="/loja">Loja</Link>
        <Link href="/produtores">Produtores</Link>
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/eventos">Eventos</Link>
        <HeaderImages>
          <Image src="/images/lupa.png" width={50} height={50} />
          <Image src="/images/user.png" width={50} height={50} />
          <Image src="/images/carrinho.png" width={50} height={50} />
        </HeaderImages>
      </Header>
      <Container>
      <PriceOpt>
        <Prices />
      </PriceOpt>
      <Form>
        {items.map((item) => {
          const { id, image, name, price, priceMember, priceNonMember } = item;
          return (
            <FormWine key={id}>
              <img src={image} width="100px" alt="" />
              <h4>{name}</h4>
              <p>{price}</p>
              <h4>Sócio Wine R${priceMember}</h4>
              <h4>NÃO SÓCIO R${priceNonMember}</h4>
                <button>Adicionar</button>
            </FormWine>
          );
        })}
      </Form>
      </Container>
    </div>
  );
}
