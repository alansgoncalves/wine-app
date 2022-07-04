import Link from "../src/components/Link/NextLink";
import {
  Header,
  HeaderImages,
  Form,
  FormWine,
  PriceOpt,
  Container,
  SearchWine,
} from "../styles/style.js";
import Image from "next/image";
import Prices from "../src/components/Prices/Prices";
import { useState } from "react";

const defaultEndpoint = "https://wine-back-test.herokuapp.com/products?page=1&limit=9";

export async function getStaticProps() {
  const response = await fetch(defaultEndpoint);
  const data = await response.json();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dp, setDp] = useState(false);

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
          <Image src="/images/lupa.png" width={50} height={50} onClick={() => setDp(!dp)}/>
          <Image src="/images/user.png" width={50} height={50} />
          <Image src="/images/carrinho.png" width={50} height={50} />
        </HeaderImages>
      </Header>
      {dp &&
      <SearchWine>
        <input
          type="text"
          placeholder="Pesquise"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img 
          src="/images/lupa.png" 
          className="lupa" 
          width={44} 
          height={44}
          />
      </SearchWine>
      }
      <Container>
        <PriceOpt>
          <Prices />
        </PriceOpt>
        <Form>
          {items
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((value, key) => {
              return (
                <FormWine key={key}>
                  <img src={value.image} width="100px" alt="" />
                  <h4>{value.name}</h4>
                  <p>{value.price}</p>
                  <h4>Sócio Wine R${value.priceMember}</h4>
                  <h4>NÃO SÓCIO R${value.priceNonMember}</h4>
                  <button>Adicionar</button>
                </FormWine>
              );
            })}
        </Form>
      </Container>
    </div>
  );
}
