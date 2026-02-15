# Container Orchestration Comparison

## Overview
This document compares different container orchestration solutions for deploying applications from this monorepo.

---

## Solutions Comparison

### Docker Swarm

**Pros:**
- Simple to set up and learn (minimal configuration)
- Native Docker integration
- Built-in load balancing
- Lower resource overhead
- Good for small to medium deployments
- Easy rolling updates and rollbacks
- Secrets management included

**Cons:**
- Less feature-rich than Kubernetes
- Smaller ecosystem and community
- Limited advanced scheduling capabilities
- Fewer third-party integrations
- Less suitable for complex multi-cloud scenarios

**Best For:** Small teams, simpler deployments, getting started quickly

---

### Kubernetes (K8s)

**Pros:**
- Industry standard with huge ecosystem
- Highly scalable and flexible
- Advanced scheduling and auto-scaling
- Rich plugin ecosystem (Helm, Operators, etc.)
- Multi-cloud and hybrid cloud support
- Strong community and enterprise support
- Declarative configuration with extensive CRDs

**Cons:**
- Steep learning curve
- Complex setup and maintenance
- Higher resource overhead
- Overkill for small projects
- Requires more expertise to operate

**Best For:** Large-scale production, enterprise applications, complex requirements

---

### Docker Compose (Single Host)

**Pros:**
- Simplest option for development
- Minimal configuration
- Fast local development
- Easy to understand and debug
- Perfect for development environments

**Cons:**
- Single host only (no orchestration)
- No high availability
- No automatic scaling
- Not suitable for production
- Limited networking capabilities

**Best For:** Local development, testing, proof of concepts

---

### Nomad (HashiCorp)

**Pros:**
- Simpler than Kubernetes, more powerful than Swarm
- Can orchestrate containers, VMs, and binaries
- Lower operational complexity
- Good performance
- Integrates well with HashiCorp stack (Vault, Consul)

**Cons:**
- Smaller community than Kubernetes
- Fewer third-party integrations
- Less mature ecosystem
- May require additional HashiCorp tools

**Best For:** Mixed workloads, teams using HashiCorp ecosystem

---

## Quick Start Guide

### Docker Swarm

#### 1. Initialize Swarm
```bash
# On manager node
docker swarm init --advertise-addr <MANAGER-IP>

# On worker nodes (use token from init output)
docker swarm join --token <TOKEN> <MANAGER-IP>:2377
```

#### 2. Project Structure
```
/
├── apps/
│   └── main/
│       ├── Dockerfile
│       ├── domains/
│       ├── package.json
│       └── tsconfig.json
├── docker-compose.swarm.yml
└── .env.swarm
```

#### 3. Docker Compose File for Swarm
```yaml
# docker-compose.swarm.yml
version: '3.8'

services:
  main-app:
    image: nuxt-boilerplate/main:latest
    build:
      context: ./apps/main
      dockerfile: Dockerfile
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    networks:
      - app-network
    environment:
      - NODE_ENV=production

networks:
  app-network:
    driver: overlay

secrets:
  app-secret:
    external: true
```

#### 4. Deploy
```bash
# Build and push image
docker build -t nuxt-boilerplate/main:latest ./apps/main

# Deploy stack
docker stack deploy -c docker-compose.swarm.yml nuxt-app

# Check status
docker service ls
docker service logs nuxt-app_main-app
```

---

### Kubernetes

#### 1. Initialize Cluster
```bash
# Using minikube for local
minikube start

# Or using kind for local
kind create cluster --name nuxt-cluster

# Or on cloud (example: GKE)
gcloud container clusters create nuxt-cluster --num-nodes=3
```

#### 2. Project Structure
```
/
├── apps/
│   └── main/
│       ├── Dockerfile
│       ├── domains/
│       ├── package.json
│       └── tsconfig.json
├── k8s/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
└── Makefile or justfile (for deployment commands)
```

#### 3. Kubernetes Manifests

**namespace.yaml**
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: nuxt-apps
```

**deployment.yaml**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: main-app
  namespace: nuxt-apps
spec:
  replicas: 3
  selector:
    matchLabels:
      app: main-app
  template:
    metadata:
      labels:
        app: main-app
    spec:
      containers:
      - name: main-app
        image: nuxt-boilerplate/main:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "250m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

**service.yaml**
```yaml
apiVersion: v1
kind: Service
metadata:
  name: main-app-service
  namespace: nuxt-apps
spec:
  selector:
    app: main-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

#### 4. Deploy
```bash
# Create namespace
kubectl apply -f k8s/namespace.yaml

# Deploy application
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Check status
kubectl get pods -n nuxt-apps
kubectl get services -n nuxt-apps
kubectl logs -f deployment/main-app -n nuxt-apps
```

---

### Docker Compose (Development)

#### 1. Project Structure
```
/
├── apps/
│   └── main/
│       ├── Dockerfile
│       ├── Dockerfile.dev
│       ├── domains/
│       ├── package.json
│       └── tsconfig.json
├── docker-compose.yml
└── .env
```

#### 2. Docker Compose File
```yaml
# docker-compose.yml
version: '3.8'

services:
  main-app:
    build:
      context: ./apps/main
      dockerfile: Dockerfile.dev
    volumes:
      - ./apps/main:/app
      - /app/node_modules
      - ./packages:/packages
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    command: pnpm dev

  postgres:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=nuxt_dev
      - POSTGRES_USER=dev
      - POSTGRES_PASSWORD=dev
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

#### 3. Run
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f main-app

# Stop
docker-compose down
```

---

## Recommended Approach by Team Size

### Small Team (1-5 developers)
- **Development:** Docker Compose
- **Production:** Docker Swarm or managed service (Heroku, Vercel, etc.)

### Medium Team (5-20 developers)
- **Development:** Docker Compose
- **Production:** Managed Kubernetes (GKE, EKS, AKS) or Docker Swarm

### Large Team (20+ developers)
- **Development:** Docker Compose + optional local K8s (minikube)
- **Production:** Kubernetes (self-managed or managed)

---

## Sample Dockerfile for Nuxt App

```dockerfile
# apps/main/Dockerfile
FROM node:24.13.0-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

# Build stage
FROM base AS builder
WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/main ./apps/main

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
WORKDIR /app/apps/main
RUN pnpm build

# Production stage
FROM base AS production
WORKDIR /app

# Copy built application
COPY --from=builder /app/apps/main/.output ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]
```

---

## Integration with Just

Add these commands to your `justfile`:

```just
# Docker Swarm commands
swarm-deploy:
    docker stack deploy -c docker-compose.swarm.yml nuxt-app

swarm-remove:
    docker stack rm nuxt-app

swarm-status:
    docker service ls
    docker service ps nuxt-app_main-app

# Kubernetes commands
k8s-deploy:
    kubectl apply -f k8s/

k8s-delete:
    kubectl delete -f k8s/

k8s-status:
    kubectl get all -n nuxt-apps

k8s-logs app:
    kubectl logs -f deployment/{{app}} -n nuxt-apps

# Docker Compose commands
dev-up:
    docker-compose up -d

dev-down:
    docker-compose down

dev-logs:
    docker-compose logs -f

# Build commands
build-image app:
    docker build -t nuxt-boilerplate/{{app}}:latest ./apps/{{app}}

build-all:
    just build-image main
```

---

## Conclusion

**Choose:**
- **Docker Compose** for development and simple single-host deployments
- **Docker Swarm** for production if you want simplicity and Docker-native orchestration
- **Kubernetes** for production if you need scalability, flexibility, and enterprise features
- **Nomad** if you're already using HashiCorp tools and have mixed workloads
