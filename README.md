# DevOps Portfolio - Modernized CI/CD Pipeline

A production-ready DevOps portfolio project featuring a modern React application with comprehensive CI/CD automation, containerization, and Kubernetes deployment capabilities.

## 🎯 Project Overview

This project demonstrates enterprise-grade DevOps practices including automated testing, code quality checks, Docker containerization, multi-stage CI/CD pipelines, and Kubernetes orchestration. The application is built with React 19, Vite 7, TypeScript, and Tailwind CSS.

## ✨ Key Features

### Modern Tech Stack
- **React 19** - Latest React with improved performance
- **Vite 7** - Lightning-fast build tool with HMR
- **TypeScript** - Full type safety across the codebase
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Experience
- **ESLint** - Code quality and style enforcement
- **Prettier** - Automatic code formatting
- **Vitest** - Fast unit testing framework
- **TypeScript** - Strict type checking
- **Path Aliases** - Clean import paths with `@/` prefix

### CI/CD Pipeline
- **GitHub Actions** - Automated testing, linting, and building
- **Multi-stage Builds** - Optimized Docker images
- **Security Scanning** - CodeQL analysis and dependency audits
- **Automated Deployments** - Staging and production environments
- **Dependabot** - Automated dependency updates

### DevOps & Infrastructure
- **Docker** - Multi-stage builds with security best practices
- **Docker Compose** - Local development environment
- **Kubernetes** - Production deployment manifests
- **Nginx** - Reverse proxy with security headers
- **Health Checks** - Container and pod health monitoring

## 📋 Prerequisites

Ensure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | ≥18.0.0 | JavaScript runtime |
| npm | ≥9.0.0 | Package manager |
| Docker | ≥20.10 | Container runtime |
| Docker Compose | ≥2.0 | Multi-container orchestration |
| kubectl | ≥1.24 | Kubernetes CLI (optional) |

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/Rintu-chowdory/devops-portfolio-ci-cd.git
cd devops-portfolio-ci-cd

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:3000
```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Fix linting issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:ui` | Run tests with UI dashboard |
| `npm run test:coverage` | Generate coverage report |
| `npm run type-check` | Check TypeScript types |
| `npm run validate` | Run all checks (lint, type-check, test) |

## 🐳 Docker & Containerization

### Build Docker Image

```bash
# Build the Docker image
docker build -t devops-portfolio:latest .

# Run the container
docker run -p 3000:3000 devops-portfolio:latest
```

### Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

**Services:**
- **app** - Node.js application running on port 3000
- **nginx** - Reverse proxy on ports 80/443

## 🔄 CI/CD Pipeline

The GitHub Actions pipeline includes:

### 1. **Code Quality & Testing** (`quality` job)
- Runs on Node.js 18.x and 20.x
- ESLint code quality checks
- Prettier formatting validation
- TypeScript type checking
- Vitest unit tests
- Code coverage reporting

### 2. **Build & Security** (`build` job)
- Builds the production application
- Runs security audit (`npm audit`)
- Uploads build artifacts
- Requires quality job to pass

### 3. **Docker Build & Push** (`docker` job)
- Builds multi-stage Docker image
- Pushes to GitHub Container Registry
- Generates semantic versioning tags
- Caches layers for faster builds

### 4. **Deployment** (`deploy-staging` and `deploy-production`)
- Automatic deployment to staging on `develop` branch
- Automatic deployment to production on `main` branch
- Environment-specific configurations
- Deployment approval gates

### 5. **Automated Dependency Updates** (Dependabot)
- Weekly npm dependency updates
- Weekly Docker base image updates
- Automatic pull requests for review

### 6. **Security Analysis** (CodeQL)
- Continuous security scanning
- JavaScript/TypeScript analysis
- Scheduled weekly scans
- Integration with GitHub Security tab

## 📁 Project Structure

```
devops-portfolio-ci-cd/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml              # Main CI/CD pipeline
│       ├── codeql.yml             # Security scanning
│       └── dependabot.yml         # Dependency updates
├── k8s/
│   ├── deployment.yaml            # Kubernetes deployment
│   ├── service.yaml               # Kubernetes service
│   ├── configmap.yaml             # Configuration management
│   └── hpa.yaml                   # Horizontal Pod Autoscaler
├── src/
│   ├── components/                # React components
│   ├── pages/                     # Page components
│   ├── App.tsx                    # Main App component
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
├── Dockerfile                     # Multi-stage Docker build
├── docker-compose.yml             # Local dev environment
├── nginx.conf                     # Nginx configuration
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── vitest.config.ts               # Vitest configuration
├── package.json                   # Dependencies & scripts
└── README.md                      # This file
```

## 🔐 Security Features

### Docker Security
- Non-root user execution (UID 1001)
- Read-only root filesystem
- Capability dropping
- Multi-stage builds to minimize image size
- Health checks for container monitoring

### Nginx Security Headers
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options (Clickjacking protection)
- X-Content-Type-Options (MIME sniffing prevention)
- X-XSS-Protection (XSS protection)
- Referrer-Policy (Referrer control)
- Permissions-Policy (Feature control)

### Code Security
- ESLint with security rules
- Dependency vulnerability scanning
- CodeQL security analysis
- Automated security updates via Dependabot

## ☸️ Kubernetes Deployment

### Prerequisites
```bash
# Create namespace (optional)
kubectl create namespace devops-portfolio

# Create ConfigMap
kubectl apply -f k8s/configmap.yaml

# Create Deployment
kubectl apply -f k8s/deployment.yaml

# Create Service
kubectl apply -f k8s/service.yaml

# Create HPA
kubectl apply -f k8s/hpa.yaml
```

### Verify Deployment
```bash
# Check deployment status
kubectl get deployments

# Check pods
kubectl get pods

# Check services
kubectl get services

# View logs
kubectl logs -f deployment/devops-portfolio

# Port forward
kubectl port-forward svc/devops-portfolio 3000:80
```

## 📊 Performance Optimization

### Build Optimization
- Code splitting with vendor chunk isolation
- Terser minification
- Source maps for production debugging
- Gzip compression in Nginx

### Runtime Optimization
- Lazy loading of components
- Image optimization
- CSS-in-JS with Tailwind
- Efficient React rendering

### Caching Strategy
- Static asset caching (30 days)
- Docker layer caching
- GitHub Actions cache
- Browser cache headers

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Test Coverage
The project uses Vitest with coverage reporting. Coverage reports are generated in HTML format at `coverage/index.html`.

## 📝 Code Quality

### Linting
```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Formatting
```bash
# Format all code
npm run format

# Check formatting without changes
npm run format:check
```

### Type Checking
```bash
# Check TypeScript types
npm run type-check
```

### Validation
```bash
# Run all checks (lint, type-check, test)
npm run validate
```

## 🌍 Environment Configuration

### Development (.env)
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=DevOps Portfolio
VITE_APP_VERSION=2.0.0
```

### Production (.env.production)
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=DevOps Portfolio
VITE_APP_VERSION=2.0.0
```

See `.env.example` for all available variables.

## 📚 Documentation

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Checklist for Deployment

- [ ] All tests passing (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript types valid (`npm run type-check`)
- [ ] Build successful (`npm run build`)
- [ ] Docker image builds (`docker build -t app:latest .`)
- [ ] Environment variables configured
- [ ] Security headers verified in nginx.conf
- [ ] Kubernetes manifests reviewed
- [ ] Monitoring and logging configured
- [ ] Backup and recovery plan in place

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3001
```

### Docker Build Fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t app:latest .
```

### Dependency Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Kubernetes Pod Not Starting
```bash
# Check pod logs
kubectl logs <pod-name>

# Describe pod for events
kubectl describe pod <pod-name>

# Check resource availability
kubectl top nodes
kubectl top pods
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Rintu Chowdory**
- GitHub: [@Rintu-chowdory](https://github.com/Rintu-chowdory)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- GitHub Actions for powerful CI/CD automation
- Kubernetes community for container orchestration

---

**Last Updated:** March 31, 2026  
**Version:** 2.0.0  
**Status:** Production Ready ✅
