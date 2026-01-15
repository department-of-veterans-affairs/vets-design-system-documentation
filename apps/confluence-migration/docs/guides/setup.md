---
title: Development Setup
description: Complete guide to setting up your local development environment
sidebar_position: 1
---

# Development Environment Setup

This guide will help you set up your local development environment for working on VA projects. Follow these steps to ensure you have all the necessary tools and configurations.

## Prerequisites

### System Requirements
- **macOS 12+** or **Ubuntu 20.04+** or **Windows 11 with WSL2**
- **16GB RAM** minimum (32GB recommended for large projects)
- **50GB free disk space** for tools, dependencies, and projects

### Required Accounts
- [GitHub](https://github.com) account with VA organization access
- [DockerHub](https://hub.docker.com) account  
- VA network access (VPN required for contractors)
- [Slack](https://dsva.slack.com) workspace access

## Core Tools Installation

### 1. Package Manager

#### macOS - Homebrew
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add to PATH (follow instructions from installer)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

#### Linux - Package Manager
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl wget git build-essential
```

### 2. Git Configuration
```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@va.gov"

# Set up helpful aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# Set up SSH key for GitHub
ssh-keygen -t ed25519 -C "your.email@va.gov"
cat ~/.ssh/id_ed25519.pub | pbcopy  # macOS
# Add the key to GitHub: Settings > SSH and GPG keys
```

### 3. Node.js and Package Managers
```bash
# Install Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or reload shell
source ~/.bashrc  # Linux
source ~/.zshrc   # macOS

# Install Node.js (use version specified in project .nvmrc)
nvm install 20.11.0
nvm use 20.11.0
nvm alias default 20.11.0

# Install package managers
npm install -g pnpm yarn
```

### 4. Docker & Container Tools
```bash
# macOS
brew install --cask docker

# Linux - Docker Engine
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Development Tools

### 1. Code Editor - Visual Studio Code
```bash
# macOS
brew install --cask visual-studio-code

# Linux
curl -L "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" -o vscode.deb
sudo dpkg -i vscode.deb
sudo apt-get install -f
```

#### Required VS Code Extensions
Install these extensions for VA development:

```bash
# Install via command line
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-json
code --install-extension redhat.vscode-yaml
code --install-extension github.copilot
code --install-extension ms-vscode-remote.remote-ssh
```

#### VS Code Settings
Create `.vscode/settings.json` in your project:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### 2. Database Tools

#### PostgreSQL (Local Development)
```bash
# macOS
brew install postgresql@14
brew services start postgresql@14

# Linux
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create development database
createdb va_development
```

#### Database GUI Client
```bash
# pgAdmin (Web-based)
brew install --cask pgadmin4

# OR TablePlus (macOS)
brew install --cask tableplus

# OR DBeaver (Cross-platform)
brew install --cask dbeaver-community
```

### 3. API Development Tools
```bash
# Insomnia REST Client
brew install --cask insomnia

# OR Postman
brew install --cask postman
```

## Project Setup

### 1. Clone VA Repositories
```bash
# Create workspace directory
mkdir -p ~/workspace/va
cd ~/workspace/va

# Clone main repositories
git clone git@github.com:department-of-veterans-affairs/vets-website.git
git clone git@github.com:department-of-veterans-affairs/vets-design-system-documentation.git
git clone git@github.com:department-of-veterans-affairs/component-library.git

# Set up each project
cd vets-website
npm install
npm run build
```

### 2. Environment Configuration

#### Environment Variables
Create `.env.local` in each project:

```bash
# vets-website/.env.local
NODE_ENV=development
BUILDTYPE=localhost
API_URL=https://staging-api.va.gov

# For local API development
# API_URL=http://localhost:3000
```

#### Hosts File (for local API)
Add to `/etc/hosts`:
```
127.0.0.1 local.va.gov
127.0.0.1 api.local.va.gov
```

### 3. Verify Installation
```bash
# Check versions
node --version     # Should be 20.11.0+
npm --version      # Should be 10.0.0+
pnpm --version     # Should be 8.0.0+
git --version      # Should be 2.30.0+
docker --version   # Should be 24.0.0+

# Test project builds
cd ~/workspace/va/vets-website
npm run build      # Should complete without errors
npm run lint       # Should pass all checks
npm test          # Should run test suite
```

## Development Workflow

### 1. Daily Startup Routine
```bash
# Pull latest changes
git pull origin main

# Install any new dependencies  
npm install

# Start development server
npm run dev

# In another terminal, start watch mode for tests
npm run test:watch
```

### 2. Common Commands
```bash
# Start development environment
npm run dev               # Start dev server
npm run storybook        # Start component library
npm run test             # Run test suite
npm run lint             # Check code quality
npm run typecheck        # TypeScript validation

# Database operations
npm run db:migrate       # Run migrations
npm run db:seed          # Seed test data
npm run db:reset         # Reset database
```

## Troubleshooting

### Common Issues

#### Node Version Mismatch
```bash
# If you see Node version errors
nvm use              # Uses .nvmrc version
nvm install          # Installs .nvmrc version if missing
```

#### Permission Errors
```bash
# If npm install fails with permission errors
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

#### Docker Issues
```bash
# Reset Docker
docker system prune -a
docker-compose down && docker-compose up --build
```

### Getting Help

#### Slack Channels
- **#platform-design-system** - Development questions
- **#frontend-tools** - Build and tooling issues  
- **#devops** - Infrastructure and deployment
- **#accessibility** - Accessibility questions

#### Documentation
- [vets-website README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/README.md)
- [Design System Docs](https://design.va.gov)
- [VA Developer Docs](https://developer.va.gov/)

#### Office Hours
- **Frontend Office Hours**: Tuesdays 2-3 PM ET
- **DevOps Office Hours**: Thursdays 1-2 PM ET
- **Design System Office Hours**: Fridays 10-11 AM ET

---

## Next Steps

Once your environment is set up:

1. **Join team meetings** - Check team calendars for standups
2. **Review codebase** - Explore project structure and conventions  
3. **Pick up first ticket** - Start with "good first issue" labels
4. **Set up monitoring** - Install Datadog browser extension
5. **Complete accessibility training** - Required for frontend developers

## Environment Checklist

- [ ] Git configured with VA email
- [ ] SSH keys added to GitHub
- [ ] Node.js and package managers installed
- [ ] Docker running and configured
- [ ] VS Code with required extensions
- [ ] Database tools installed
- [ ] VA repositories cloned
- [ ] Environment variables configured
- [ ] Build and test commands working
- [ ] Slack workspace access confirmed
- [ ] VPN access configured (contractors)

**Estimated setup time**: 2-4 hours depending on network speed and system performance.