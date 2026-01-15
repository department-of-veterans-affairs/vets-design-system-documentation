# Code Review Process

## Overview

Our code review process ensures quality, knowledge sharing, and consistency across the platform.

## Guidelines

### For Authors

1. **Create focused PRs**
   - Keep changes small and focused on a single feature/fix
   - Include descriptive title and detailed description
   - Link related issues or tickets

2. **Self-review first**
   - Review your own code before requesting review
   - Check for obvious errors, typos, and formatting
   - Ensure tests pass locally

3. **Provide context**
   - Include screenshots for UI changes
   - Document any breaking changes
   - Explain complex business logic

### For Reviewers

1. **Review promptly**
   - Aim to review within 24 hours
   - Use "Request changes" only for blocking issues
   - Leave constructive, specific feedback

2. **Focus areas**
   - Code quality and maintainability
   - Security and performance implications
   - Accessibility compliance
   - Test coverage

## Process

### 1. Create Pull Request
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes and commit
git add .
git commit -m "feat: add new component with accessibility features"

# Push and create PR
git push origin feature/new-component
gh pr create --title "feat: Add new component" --body "Description..."
```

### 2. Request Review
- Assign at least 2 reviewers
- Add appropriate labels (feature, bug, docs, etc.)
- Set milestone if applicable

### 3. Review Cycle
- Address reviewer feedback
- Update PR with requested changes
- Re-request review after significant changes

### 4. Approval & Merge
- Minimum 2 approvals required for production code
- Squash commits for clean history
- Delete feature branch after merge

## Standards

### Accessibility
- [ ] WCAG 2.1 AA compliance verified
- [ ] Screen reader testing completed
- [ ] Keyboard navigation tested

### Testing
- [ ] Unit tests for new functionality
- [ ] Integration tests for user flows
- [ ] Manual testing on multiple browsers

### Documentation
- [ ] README updated if needed
- [ ] API documentation current
- [ ] Design system guidance provided

## Tools

- **GitHub PR Templates**: Automated checklists
- **Code Climate**: Automated quality checks
- **Accessibility Testing**: aXe, WAVE tools
- **Performance**: Lighthouse audits

## Escalation

If reviews are blocked or controversial:
1. Tag team lead in comments
2. Schedule discussion meeting
3. Document decision rationale

---

*For questions, reach out in #platform-design-system*