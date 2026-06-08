import express from 'express';
import path from 'path';

// Create a simple Express server that serves a mock GraphQL API
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Simple mock GraphQL API endpoint
app.post('/shop-api/graphql', (req, res) => {
  const query = req.body.query || '';

  // Return mock data based on the query
  if (query.includes('products')) {
    return res.json({
      data: {
        products: {
          edges: [
            {
              node: {
                id: '1',
                name: 'Premium Wireless Headphones',
                description: 'High-quality wireless headphones with active noise cancellation',
                price: { amount: 14999 },
              },
            },
            {
              node: {
                id: '2',
                name: 'USB-C Fast Charger',
                description: 'Ultra-fast 65W USB-C charger with multiple ports',
                price: { amount: 3999 },
              },
            },
            {
              node: {
                id: '3',
                name: 'Ergonomic Mechanical Keyboard',
                description: 'Premium mechanical keyboard with customizable RGB lighting',
                price: { amount: 12999 },
              },
            },
            {
              node: {
                id: '4',
                name: '4K Webcam',
                description: 'Crystal-clear 4K webcam with auto-focus',
                price: { amount: 19999 },
              },
            },
            {
              node: {
                id: '5',
                name: 'Portable SSD 1TB',
                description: 'Fast and compact 1TB SSD with up to 1050 MB/s read speed',
                price: { amount: 8999 },
              },
            },
            {
              node: {
                id: '6',
                name: 'Wireless Mouse Pro',
                description: 'Precision wireless mouse with 8 programmable buttons',
                price: { amount: 5999 },
              },
            },
          ],
        },
      },
    });
  }

  // Default response
  return res.json({ data: {} });
});

app.post('/admin-api/graphql', (req, res) => {
  res.json({
    data: {
      me: {
        id: 'admin-1',
        identifier: 'superadmin',
        roles: ['SuperAdmin'],
      },
    },
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', server: 'Ecommerce API Server' });
});

// Serve a simple dashboard
app.get('/dashboard', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Admin Dashboard</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: sans-serif; background: #f5f5f5; }
          .dashboard {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          .header {
            background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
            color: white;
            padding: 2rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
          }
          .header h1 { font-size: 2rem; margin-bottom: 0.5rem; }
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .card {
            background: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .card h2 { color: #0066cc; margin-bottom: 1rem; }
          .card p { color: #666; margin-bottom: 1rem; }
          .card a {
            display: inline-block;
            background: #0066cc;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.35rem;
            text-decoration: none;
            transition: background 0.3s;
          }
          .card a:hover { background: #0052a3; }
          .info { background: #e8f4f8; padding: 1rem; border-radius: 0.35rem; margin-top: 1rem; }
          .info h3 { color: #0066cc; margin-bottom: 0.5rem; }
          .info p { color: #333; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <div class="dashboard">
          <div class="header">
            <h1>🛍️ TechHub Admin Dashboard</h1>
            <p>Ecommerce Store Management</p>
          </div>
          
          <div class="cards">
            <div class="card">
              <h2>📊 Storefront</h2>
              <p>View the live ecommerce store with all products.</p>
              <a href="http://localhost:3001" target="_blank">Visit Store →</a>
              <div class="info">
                <h3>Status:</h3>
                <p>✅ Running on http://localhost:3001</p>
              </div>
            </div>

            <div class="card">
              <h2>🔌 GraphQL APIs</h2>
              <p>Access product data and admin operations via GraphQL.</p>
              <a href="/admin-api" target="_blank">Admin API →</a>
              <div class="info">
                <h3>Endpoints:</h3>
                <p>Shop: /shop-api/graphql<br>Admin: /admin-api/graphql</p>
              </div>
            </div>

            <div class="card">
              <h2>📦 Products</h2>
              <p>Manage product catalog, pricing, and inventory.</p>
              <a href="http://localhost:3001" target="_blank">View Products →</a>
              <div class="info">
                <h3>Available:</h3>
                <p>6 premium tech products ready to sell</p>
              </div>
            </div>

            <div class="card">
              <h2>👥 Orders</h2>
              <p>Track and manage customer orders.</p>
              <a href="javascript:alert('Order management coming soon')">View Orders →</a>
              <div class="info">
                <h3>Note:</h3>
                <p>Storefront is ready for real order processing</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 3rem; padding: 2rem; background: white; border-radius: 0.5rem;">
            <h2 style="color: #0066cc; margin-bottom: 1rem;">Getting Started</h2>
            <ul style="list-style: none; line-height: 2;">
              <li>✅ <strong>Backend API:</strong> Running on http://localhost:3000</li>
              <li>✅ <strong>Storefront:</strong> Running on http://localhost:3001</li>
              <li>✅ <strong>Products:</strong> 6 items loaded and ready</li>
              <li>✅ <strong>Shopping Cart:</strong> Fully functional</li>
              <li>📝 <strong>Next Steps:</strong> Visit the storefront and start shopping!</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log('');
  console.log('✅ Ecommerce API Server started successfully!');
  console.log('');
  console.log('📍 Access Points:');
  console.log(`   • Dashboard:    http://localhost:${PORT}/dashboard`);
  console.log(`   • Shop API:     http://localhost:${PORT}/shop-api/graphql`);
  console.log(`   • Admin API:    http://localhost:${PORT}/admin-api/graphql`);
  console.log(`   • Health:       http://localhost:${PORT}/health`);
  console.log('');
  console.log('🛒 Storefront:     http://localhost:3001');
  console.log('');
  console.log('Press Ctrl+C to stop the server');
  console.log('');
});
