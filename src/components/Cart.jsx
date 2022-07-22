const Cart = ({ cardProducts, removeFromCart }) => {
  //create a cart component that will display the products in the cart
  return (
    <div className="grid grid-flow-row border rounded w-96">
      <div>
        <h1 className="text-3xl p-4">Cart</h1>
      </div>
      {cardProducts.map((product) => {
        return (
          <div
            className="grid grid-flow-col gap-4 items-center justify-center border rounded"
            key={product.id}
          >
            <img className="w-20 h-20" src={product.image} alt={product.name} />
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-xl">{product.price}</p>
            <button
              className="bg-red-500 text-white p-3 rounded"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          </div>
        );
      })}
      {cardProducts.length === 0 && (
        <p className="text-center">No products in cart</p>
      )}
    </div>
  );
};

export default Cart;
