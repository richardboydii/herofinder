# Hero Finder

A simple React TypeScript application that displays a "Hello World" greeting. Built with modern web technologies and optimized for deployment on AWS S3 and CloudFront.

## Features

- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Fast Loading**: Optimized bundle size for quick page loads
- ✅ **Accessibility**: Semantic HTML with ARIA support and high contrast mode
- ✅ **Modern Stack**: React 19, TypeScript, and Vite for optimal development experience
- ✅ **Testing**: Comprehensive unit tests with Vitest and React Testing Library
- ✅ **Type Safety**: Full TypeScript implementation following Google Style Guide

## Quick Start

### Prerequisites

- Node.js 21+ (recommended: Node.js 22 LTS)
- npm 10+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd herofinder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
src/
├── components/          # Reusable React components
│   ├── HelloWorld.tsx   # Main greeting component
│   └── HelloWorld.css   # Component-specific styles
├── test/                # Unit tests
│   ├── App.test.tsx     # App component tests
│   ├── HelloWorld.test.tsx  # HelloWorld component tests
│   ├── Responsive.test.tsx  # Responsive design tests
│   └── setup.ts         # Test configuration
├── App.tsx              # Main application component
├── App.css              # Application-wide styles
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

### Development Guidelines

- **TypeScript**: All components use TypeScript with proper type definitions
- **Testing**: Write tests for all new components using React Testing Library
- **Styling**: Use mobile-first responsive design principles
- **Accessibility**: Ensure semantic HTML and ARIA compliance
- **Documentation**: Add JSDoc comments for all functions and components

## Testing

The project includes comprehensive unit tests covering:

- Component rendering and functionality
- Responsive design behavior across device sizes
- Accessibility features
- Integration between components

Run tests with:
```bash
npm test
```

## Build and Deployment

### Production Build

Create an optimized production build:
```bash
npm run build
```

This generates a `dist/` folder with optimized assets ready for deployment.

### AWS S3 + CloudFront Deployment

The build output is optimized for hosting on AWS S3 with CloudFront CDN:

1. **Build the project**: `npm run build`
2. **Upload `dist/` contents** to your S3 bucket
3. **Configure CloudFront** to serve from the S3 bucket
4. **Set up proper MIME types** for `.js`, `.css`, and `.html` files

### Bundle Analysis

- **Total bundle size**: ~187KB (uncompressed)
- **Gzipped size**: ~59KB
- **Optimized for fast loading** with tree-shaking and minification

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Contributing

1. Follow the Google TypeScript Style Guide
2. Write unit tests for new features
3. Ensure responsive design principles
4. Add JSDoc documentation for functions
5. Run linting and tests before committing

## Architecture Decisions

See [ADR 001: Basic Page](./adrs/001-basic-page.md) for detailed architectural decisions and implementation rationale.

## License

See [LICENSE](./LICENSE) file for details.
