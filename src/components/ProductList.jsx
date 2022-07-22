import Product from "../components/Product";

const ProductList = ({ addToCart }) => {
  const mockedProducts = [
    {
      id: 1,
      name: "Product 1",
      price: "$10.00",
      description: "This is a product description",
      image:
        "https://i.picsum.photos/id/48/200/300.jpg?hmac=p1L57uKWk-HOLxkodQjf0Q4BpaqgWYhEgWyGaeIpG_k",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.00",
      description: "This is a product description",
      image:
        "https://i.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      description: "This is a product description",
      image:
        "https://i.picsum.photos/id/42/200/300.jpg?hmac=RFAv_ervDAXQ4uM8dhocFa6_hkOkoBLeRR35gF8OHgs",
    },
  ];

  return (
    <div className="grid gap-4">
      {mockedProducts.map((product) => {
        return (
          <Product key={product.id} product={product} addToCart={addToCart} />
        );
      })}
    </div>
  );
};

export default ProductList;
