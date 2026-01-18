const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = [
  'http://localhost:3000',
  'https://tech-store-ruby-eight.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// In-memory database for items (in production, use a real database)
let items = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Track your fitness, receive notifications, and stay connected with this feature-rich smartwatch.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    category: "Electronics",
    inStock: true
  },
  {
    id: 3,
    name: "Laptop Backpack",
    description: "Durable and stylish backpack designed to protect your laptop and organize your essentials.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
    category: "Accessories",
    inStock: true
  },
  {
    id: 4,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop",
    category: "Accessories",
    inStock: true
  },
  {
    id: 5,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    category: "Accessories",
    inStock: true
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys and tactile switches.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=600&fit=crop",
    category: "Accessories",
    inStock: false
  }
];

// Authentication check middleware
const checkAuth = (req, res, next) => {
  const authToken = req.cookies.authToken;
  if (authToken === 'authenticated') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Routes

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Get single item by ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication (hardcoded credentials)
  if (email === 'admin@example.com' && password === 'password123') {
    res.cookie('authToken', 'authenticated', {
      httpOnly: true,
      maxAge: 86400000, // 24 hours
      sameSite: 'lax'
    });
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  res.clearCookie('authToken');
  res.json({ success: true, message: 'Logout successful' });
});

// Check authentication status
app.get('/api/auth/status', (req, res) => {
  const authToken = req.cookies.authToken;
  res.json({ authenticated: authToken === 'authenticated' });
});

// Add new item (protected route)
app.post('/api/items', checkAuth, (req, res) => {
  const { name, description, price, image, category, inStock } = req.body;
  
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Name, description, and price are required' });
  }
  
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    name,
    description,
    price: parseFloat(price),
    image: image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: category || "General",
    inStock: inStock !== undefined ? inStock : true
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
