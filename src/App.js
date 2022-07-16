import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/card';

function App() {
 const [productList, setProductList] = useState( 
      [ 
    {id:1,
     price:2000,
     name:"Apple",
     image:"https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
     title: "İphone 12",    
    },

    {id:2,
      price:3000,
      name:"Apple",
      image:"https://images.unsplash.com/photo-1634618776267-e6725a551035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZSUyMDEzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "İphone 13",},
    {id:3,
      price:4000,
      name:"Apple",
      image:"https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZSUyMDEzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "İphone 13 Pro Max",},
    {id:4,
      price:1000,
      name:"Xiaomi",
      image:"https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eGlhb21pJTIwbWklMjAxMSUyMGxpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Xiaomi 11 lite",}
  ]
 )
 const [boxProduct,setBoxProduct]=useState([])
  return (
    <div className="App">
      <div className='gridItems'>
        {productList.map((product,index) => {
          return(
            <Card   onClick={()=>{
              const arr=[...boxProduct]
              arr.push(product)
              setBoxProduct(arr)
          }}
          key = {index} image = {product.image} info = {product.title} 
            title = {product.name} />
          )
        })}
      
      </div>
      {boxProduct.length>0 && <div>
            <h4>Aldıgınız Ürünler</h4>

            {
                boxProduct.map((boxProduct,index)=>{
                    return(
                        <div key={index}>
                            {JSON.stringify(boxProduct) }

                        </div>
                    )
                })
            }
        </div>}
        {boxProduct.length<1 && <div> Sepetinizde Bir Ürün Bulunmamaktadır.</div>}
    </div>
  );
}

export default App;
 