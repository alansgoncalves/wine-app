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
  const [searchTerm, setSearchTerm] = useState("");
  const [dp, setDp] = useState(false);

  const itemsPerPage = 9; //total de intens na página
  const [currentpage, setCurrentPage] = useState(0) //página de exibição atual
  
  const totalItems = data.itemsPerPage; //qtd. total de items da API
  const pages = Math.ceil(totalItems / itemsPerPage)
  
  // lógica para filtrar a lista de produtos baseado na seleção da página
  const startIndex = currentpage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  console.log(data.itemsPerPage)

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
          {items && currentItems
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
      {Array.from(Array(pages), (_item, index) => {
        return (
            <button key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
          )
      })}
    </div>
  );
}