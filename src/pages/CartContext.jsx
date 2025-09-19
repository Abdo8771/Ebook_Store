// دا عباره عن السله اللى بخزن فيها كل المنتجات ومن خلالها اقدر استدعيها ف اى حته تانيه
// هى رطيقه لمشاركه البيانات بين المكونات من غير ما نحتاج نبعتها ك props يدويا ف كل مرحله
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

/* هنا بنشأ المخزن بتاعى  عشان اقدر استخدمه  ف اى حته*/
const CartContext = createContext();

/* cartprovider اى كوموننت جواه يقدر يوصل لمحتويات المخزن*/
export function CartProvider({ children }) {
  /* هنا بخزن المنتجات اللى هتضاف على السله بخزنها ف مصفوفه*/
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // بيخخزن المنتجات اللى ف السله ف اللوكال ستورج عشان متتفقدش لو الصفحة اتعملها ريفريش
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //  بيحول الرقم من تيكست الى نمبر ويشيل اى علامه ويخزنه فى متغير
  const addToCart = (product) => {
    let priceAsNumber =
      typeof product.price === "string"
        ? parseFloat(product.price.replace("$", ""))
        : product.price;

    // بيشوف المنتج لو موجود بيزود الكميه بتاعته
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      // بتظهر لو المنتج كان موجود
      if (existingItem) {
        toast.success("Quantity updated");
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        // بتظهر لو المنتج مكنش موجود
      } else {
        toast.success("Added To Cart ✅");
        return [
          ...prevItems,
          { ...product, price: priceAsNumber, quantity: 1 },
        ];
      }
    });
  };

  // هنا بيحذف منتج معين من السلله وبعدين تضيف المنتجات ماعدا اللى اتحذف
  const removeFromCart = (productId) => {
    toast.success("Item removed ❌");
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // بيحذف كل المنتجات من السله
  const clearCart = () => {
    setCartItems([]);
  };

  // بترجع السعر الكلى عن طريق انها بتلف على كل منتج وتضربه ف الكميه بتاعته وترجع الكلى ف الاخر
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //   يقدر يوصل لكل حاجهchildren دا زى غلاف  عشان
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

//  usecart دا عشان اقدر استخدم كل الاكواد دى ف  اى حته لما استدعى
export function useCart() {
  return useContext(CartContext);
}
