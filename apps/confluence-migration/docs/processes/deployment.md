# Deployment Guide

## Overview

This guide covers deployment procedures for VA platform applications.

## Environments

### Development
- **URL**: `dev-design.va.gov`
- **Branch**: `develop`
- **Auto-deploy**: Yes, on merge to develop

### Staging
- **URL**: `staging-design.va.gov`
- **Branch**: `staging`
- **Manual promotion**: From development

### Production
- **URL**: `design.va.gov`
- **Branch**: `main`
- **Approval required**: Yes, team lead + stakeholder

## Deployment Process

### Development Deployment
1. Merge feature branch to `develop`
2. GitHub Actions triggers build
3. Automated deployment to dev environment
4. Slack notification in #deployments

### Production Deployment
1. Create release PR from `staging` to `main`
2. Include release notes and change summary
3. Team lead review and approval
4. Stakeholder sign-off for major releases
5. Merge triggers production deployment
6. Monitor for 30 minutes post-deployment

## Rollback Procedures

### Emergency Rollback
```bash
# Revert to previous release
git revert HEAD~1
git push origin main

# Or emergency hotfix
git checkout previous-release-tag
git checkout -b hotfix/emergency-fix
# Apply minimal fix
git push origin hotfix/emergency-fix
```

### Monitoring
- **Uptime**: DataDog monitoring
- **Errors**: Sentry error tracking
- **Performance**: New Relic APM

## Post-Deployment Checklist

- [ ] Verify all critical paths working
- [ ] Check error rates in monitoring
- [ ] Validate accessibility testing
- [ ] Update release documentation
- [ ] Communicate to stakeholders

## Emergency Contacts

- **On-call Engineer**: #platform-support
- **Team Lead**: #design-system-team
- **Platform Support**: #vfs-platform-support

---

*Last updated: January 2025*