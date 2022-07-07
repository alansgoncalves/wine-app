import React from 'react'

const Products = ({ products, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default Products