import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Your existing app structure */}
      </CartProvider>
    </AuthProvider>
  );
}

export default App; 