import { NextRequest, NextResponse } from 'next/server';
import { getItems, addItem } from '@/lib/data';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/items - Get all items
export async function GET() {
  try {
    const items = getItems();
    return NextResponse.json(items, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST /api/items - Create new item (protected)
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authToken = request.cookies.get('authToken')?.value;
    if (authToken !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, description, price, image, category, inStock } = body;

    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const newItem = addItem({
      name,
      description,
      price: parseFloat(price),
      image: image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      category: category || "General",
      inStock: inStock !== undefined ? inStock : true
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}
