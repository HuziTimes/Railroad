import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

export default function HeaderIcons() {
  const { cartItems } = useCart();
  const { currentUser } = useAuth();

  return (
    <div className="header-icons">
      <Link to="/cart" className="icon-link">
        <img 
          src="/icons/cart.svg" 
          alt="Shopping Cart" 
          className="header-icon"
        />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </Link>
      <Link to={currentUser ? "/account" : "/login"} className="icon-link">
        <img 
          src={currentUser ? "/icons/user-logged-in.svg" : "/icons/user.svg"} 
          alt={currentUser ? "My Account" : "Login"} 
          className="header-icon"
        />
      </Link>
    </div>
  );
} 