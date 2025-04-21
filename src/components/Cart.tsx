import React from 'react';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Cart: React.FC = () => {
    const { cartItems, increment, decrement, removeFromCart, total } = useCart();

    return (
        <div className="drawer drawer-end z-50">
            <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

            {/* Botón flotante */}
            <div className="drawer-content">


                <label
                    htmlFor="cart-drawer"
                    className="flex items-center gap-2 px-5 py-3 bg-white backdrop-blur-xl rounded-full text-[#25D366] hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md"
                >
                    <FaShoppingCart size={20} className="text-xl text-red-500 hover:text-red-500 transition" />



                </label>
            </div>

            {/* Drawer lateral */}
            <div className="drawer-side">
                <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay" />

                <div className="bg-white text-base-content min-h-full w-full md:w-96 p-6 flex flex-col justify-between shadow-lg">
                    <div>
                        {/* Título y cerrar */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">🛍️ Tu carrito</h2>
                            <label htmlFor="cart-drawer" className="cursor-pointer">
                                <FaTimes className="text-xl text-gray-500 hover:text-red-500 transition" />
                            </label>
                        </div>

                        {/* Contenido del carrito */}
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500">Tu carrito está vacío.</p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.name} className="flex items-start gap-3 border-b pb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md border"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="text-red-500 hover:text-red-600"
                                                >
                                                    <FaTrash className="text-base" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-2 mt-3">
                                                <button
                                                    onClick={() => decrement(item.name)}
                                                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => increment(item.name)}
                                                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t mb-10 lg:mb-0">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-bold">Total:</span>
                            <span className="text-2xl font-extrabold text-orange-600">${total.toFixed(2)}</span>
                        </div>
                        <button
                            disabled={cartItems.length === 0}
                            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-orange-700 transition disabled:opacity-50"
                        >
                            Finalizar pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
