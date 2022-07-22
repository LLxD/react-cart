const Product = ({ product, addToCart }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-4 border rounded">
        <div className="flex items-center">
          <img src={product.image} className="w-32 h-32" alt="product" />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
