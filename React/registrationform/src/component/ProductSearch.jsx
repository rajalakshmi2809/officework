import { useState } from "react"


const ProductSearch = () => {

const [search, setSearch] = useState("")

const products =[{id:1,name:"Laptop",price:50000},
  { id: 2, name: "Mobile",price:60000 },
    { id: 3, name: "Headphone", price:5000},
    { id: 4, name: "Keyboard", price:2500},
    { id: 5, name: "Mouse", price:2000},

]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <>
    <div>
        <h1>Product Search System</h1>
        <input
          type="text"
          placeholder="search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            // style={{
            //   border: "1px solid black",
            //   padding: "10px",
            //   margin: "10px",
            //   width: "200px",
            // }}
          >
            <h3>{product.name}</h3>
            <p>ID: {product.id}</p>
            <p>Price: {product.price}</p>
          </div>
        ))
      ) : (
        <h3>No Products Found</h3>
      )}




    </div>
    
    
    
    
    
    </>
  )
}

export default ProductSearch
