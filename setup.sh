#!/bin/bash

echo "🚀 Setting up TechHub Ecommerce Store..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm $(npm --version) detected"
echo ""

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

echo ""
echo "📦 Installing server dependencies..."
cd apps/server
npm install
cd ../..

echo ""
echo "📦 Installing storefront dependencies..."
cd apps/storefront
npm install
cd ../..

echo ""
echo "✨ Setup complete!"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "🚀 To start your ecommerce store:"
echo ""
echo "Terminal 1 - Start the API Server:"
echo "  cd /Users/lolarucker/Projects/VentureProject/apps/server"
echo "  npm run dev"
echo ""
echo "Terminal 2 - Start the Storefront:"
echo "  cd /Users/lolarucker/Projects/VentureProject/apps/storefront"
echo "  npm run dev"
echo ""
echo "Then visit:"
echo "  📱 Storefront:       http://localhost:3001"
echo "  📊 Admin Dashboard:  http://localhost:3000/dashboard"
echo "  🔌 GraphQL API:      http://localhost:3000/admin-api"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "ℹ️  For detailed instructions, see GETTING_STARTED.md"
echo ""
