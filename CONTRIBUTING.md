# Contributing to Universal AI Dividend

Thank you for your interest in contributing to UAD! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Universal-AI-Dividend.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Run tests and linting: `npm run type-check && npm run lint`
6. Commit your changes: `git commit -m "Add feature: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible

### React/Next.js
- Use functional components with hooks
- Prefer server components unless client interactivity is needed
- Use `'use client'` directive only when necessary

### Styling
- Use Tailwind CSS utility classes
- Follow the existing color scheme and design system
- Ensure responsiveness (mobile-first approach)
- Test with various screen sizes

### Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers when possible
- Maintain WCAG AA compliance

### Performance
- Optimize images and assets
- Minimize client-side JavaScript
- Use proper caching headers
- Lazy load components when appropriate

## Commit Messages

Follow conventional commits format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add wallet connection to enter page
fix: resolve mobile navigation issue
docs: update API endpoint documentation
```

## Pull Request Process

1. Update README.md if you've changed functionality
2. Ensure all tests pass and there are no linting errors
3. Update documentation as needed
4. Add screenshots for UI changes
5. Request review from maintainers
6. Address any feedback from code review

## Areas for Contribution

### High Priority
- Blockchain integration (Web3 wallet connection)
- Smart contract interactions
- Database integration for persistent data
- Email service integration
- Additional interactive features

### Medium Priority
- Additional page templates (About, Blog, etc.)
- Enhanced animations and transitions
- Additional testing coverage
- Performance optimizations
- Internationalization (i18n)

### Low Priority
- Additional UI components
- Code documentation improvements
- Example configurations
- Development tooling improvements

## Questions or Issues?

- Open an issue for bugs or feature requests
- Join our Discord for discussions
- Email us at dev@universalaidividend.org

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

Thank you for contributing to the future of universal basic income!
