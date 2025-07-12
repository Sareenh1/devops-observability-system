# DevOps Observability System

![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white)
![Loki](https://img.shields.io/badge/Loki-2C3E50?style=for-the-badge)
![Jaeger](https://img.shields.io/badge/Jaeger-000000?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=GitHub-Actions&logoColor=white)

A complete observability stack with **Prometheus (metrics)**, **Loki (logs)**, **Jaeger (traces)**, and **Grafana (visualization)** deployed on **AWS EC2** with **GitHub Actions CI/CD**.

## 📌 Features

- **Real-time metrics collection** with Prometheus
- **Centralized logging** with Loki
- **Distributed tracing** with Jaeger
- **Beautiful dashboards** with Grafana
- **Automated CI/CD pipeline** with GitHub Actions
- **Infrastructure-as-Code** using Docker Compose
- **Sample Node.js application** for demo purposes

## 🚀 Quick Start

### Prerequisites
- AWS EC2 instance (Ubuntu 22.04 recommended)
- Docker & Docker Compose installed
- GitHub account

### Deployment Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/devops-observability-system.git
   cd devops-observability-system
   ```
2. **Configure GitHub Secrets
- SSH_PRIVATE_KEY: Your EC2 .pem key
- EC2_IP: Your EC2 public IP
- KNOWN_HOSTS: Output of ssh-keyscan <EC2_IP>

3. ** Push to GitHub (auto-deploys via GitHub Actions)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
### Architecture
```mermaid
graph TD
    A[Node.js App] -->|Metrics| B(Prometheus)
    A -->|Logs| C(Loki)
    A -->|Traces| D(Jaeger)
    B --> E[Grafana]
    C --> E
    D --> E
    F[GitHub Actions] -->|CI/CD| G[EC2 Instance]
```
