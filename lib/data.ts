// Shared data storage for items
// In production, replace this with a database

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

let items: Item[] = [
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

export function getItems(): Item[] {
  return items;
}

export function getItemById(id: number): Item | undefined {
  return items.find(item => item.id === id);
}

export function addItem(item: Omit<Item, 'id'>): Item {
  const newItem: Item = {
    id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    ...item
  };
  items.push(newItem);
  return newItem;
}

export function setItems(newItems: Item[]): void {
  items = newItems;
}
