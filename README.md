# Protozen - Complete Digital Solutions & AI Automation

A modern React application showcasing digital services including website development, digital marketing, SEO optimization, and AI-powered automation solutions.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone or download the project**
   ```bash
   cd c:\Users\Admin\Downloads\Protozen
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: We use `--legacy-peer-deps` to resolve dependency conflicts with some packages.*

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application should load with the Protozen homepage

## 🛠️ Available Scripts

- `npm run dev` - Start development server (default port: 5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run check` - Type check and build validation

## 📁 Project Structure

```
src/
├── react-app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Contact.tsx      # Contact form and scheduling
│   │   └── Footer.tsx       # Site footer
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   │   └── Home.tsx         # Main homepage
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── shared/                  # Shared utilities
└── worker/                  # Worker scripts
```

## 🎨 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Deployment**: Cloudflare (configured)

## 🌟 Features

- **Responsive Design**: Mobile-first approach with modern UI
- **Dark Mode**: Automatic theme switching based on system preference
- **Smooth Animations**: Custom scroll animations and transitions
- **SEO Optimized**: Meta tags and structured content
- **Contact Integration**: Calendly scheduling widget
- **Performance**: Optimized with Vite and modern React patterns

## 🔧 Development Notes

- The project uses path aliases (`@/`) for cleaner imports
- Tailwind CSS is configured for dark mode support
- Custom hooks handle scroll animations and theme management
- Components are modular and reusable

## 🚨 Troubleshooting

### Common Issues:

1. **Dependency conflicts**: Use `npm install --legacy-peer-deps`
2. **Port already in use**: Vite will automatically use the next available port
3. **Build errors**: Run `npm run lint` to check for code issues

### If the development server won't start:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages:

### Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings (Source: GitHub Actions)
3. The app will automatically deploy on every push to main/master

### Manual Deployment
```bash
# Windows
deploy.bat

# macOS/Linux
./deploy.sh
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📞 Support

For questions about this project, contact: contact@protozenai.com
