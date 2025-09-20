# Surgical Training SaaS Platform

A comprehensive multi-role Software-as-a-Service platform for surgical training and education management. Built on **Next.js 15** and **Tailwind CSS**, this platform provides role-based dashboards for administrators, teachers, and students in surgical training programs.

![Surgical Training Platform Preview](./banner.png)

The platform features a modern landing page, role-based authentication, and specialized dashboards tailored to each user type's needs. Whether managing training programs as an administrator, teaching surgical techniques as an instructor, or learning as a student, the platform provides the tools and interfaces needed for effective surgical education.

## Platform Overview

This surgical training SaaS platform is designed to facilitate comprehensive surgical education with role-based access control and specialized dashboards. It's built on:

- **Next.js 15.x** - Modern React framework with App Router
- **React 19** - Latest React features with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS V4** - Utility-first styling
- **JWT Authentication** - Secure role-based access control
- **Role-Based Architecture** - Multi-tenant SaaS design

## Current Features

### 🏥 Multi-Role System
- **Administrator Dashboard** - User management, system analytics, and organization oversight
- **Teacher Dashboard** - Course management, student progress tracking, and educational tools
- **Student Dashboard** - Learning progress, course enrollment, and educational resources

### 🔐 Authentication & Authorization
- JWT-based authentication with role validation
- Middleware-enforced route protection
- Role hierarchy (Student < Teacher < Admin)
- Organization-based access control

### 🎨 Modern UI/UX
- Responsive landing page with hero section
- Dark/light mode support
- Mobile-optimized dashboards
- Consistent design system across all roles

### 📊 Dashboard Components
- Role-specific navigation and layouts
- Real-time metrics and analytics placeholders
- Educational progress tracking components
- User management interfaces (admin)

## User Roles & Access

### Administrator
- **Access Level**: Highest - can access all system areas
- **Primary Functions**: User management, system configuration, analytics
- **Dashboard Features**: User statistics, system health, organization management

### Teacher/Instructor  
- **Access Level**: Medium - can access teaching tools and student data
- **Primary Functions**: Course creation, student assessment, progress monitoring
- **Dashboard Features**: Course analytics, student progress, teaching tools

### Student
- **Access Level**: Basic - can access learning materials and progress
- **Primary Functions**: Course enrollment, progress tracking, skill assessment
- **Dashboard Features**: Learning progress, course materials, skill metrics

## Demo Credentials

For testing the multi-role system, use these demo accounts:

### Administrator
- **Email**: admin@surgsaas.com
- **Password**: admin123
- **Organization**: SurgSaaS Medical Center

### Teacher
- **Email**: teacher@surgsaas.com  
- **Password**: teacher123
- **Organization**: SurgSaaS Medical Center

### Student
- **Email**: student@surgsaas.com
- **Password**: student123
- **Organization**: SurgSaaS Medical Center

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js 18.x or later** (recommended: Node.js 20.x)
- **npm** or **yarn** package manager

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohamedRabiaChaker/surg-saas.git
   cd surg-saas
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```
   > Use `--legacy-peer-deps` flag if you encounter peer dependency issues.

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the application**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Use the demo credentials above to test different role dashboards

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin-only routes
│   ├── (full-width-pages)/ # Landing and auth pages
│   ├── api/               # API routes
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── auth/              # Authentication components
│   ├── common/            # Shared UI components
│   ├── charts/            # Data visualization
│   └── tables/            # Data tables
├── lib/                   # Utility libraries
│   ├── users.ts           # Static user management
│   ├── navigation.ts      # Role-based navigation
│   └── auth.ts            # Authentication utilities
├── layout/                # Layout components
│   ├── AppHeader.tsx      # Dashboard header
│   └── AppSidebar.tsx     # Role-based sidebar
└── middleware.ts          # Route protection
```

## Technical Architecture

### Authentication System
- **JWT Tokens**: Secure authentication with role-based claims
- **Middleware Protection**: Route-level access control based on user roles
- **Role Hierarchy**: Automatic redirection based on user permissions
- **Static User Management**: Pre-configured users for rapid development

### Role-Based Access Control
- **Route Protection**: Middleware enforces role-based route access
- **Dynamic Navigation**: Menu items adapt based on user role
- **Dashboard Customization**: Role-specific layouts and components
- **Permission Hierarchy**: Higher roles inherit lower role permissions

### Frontend Architecture
- **Server Components**: Leveraging React 19 server components
- **App Router**: Modern Next.js 15 routing with nested layouts
- **TypeScript**: Full type safety with role-based interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Development Roadmap

### Phase 1: Database Integration & User Management 🚧
**Priority**: High | **Timeline**: 2-3 weeks

#### 1.1 Database Setup & Migration
- **Implement PostgreSQL database** with proper schema design
  - Users table with role-based fields
  - Organizations table with hierarchical structure  
  - Training programs and courses tables
  - Progress tracking and assessment tables
- **Replace static user management** (`src/lib/users.ts`) with database queries
- **Create database migration scripts** for easy deployment
- **Add environment configuration** for database connections

#### 1.2 User Management System
- **Admin user management interface**
  - Create/edit/delete users across all roles
  - Bulk user import from CSV/Excel
  - Role assignment and organization mapping
  - User activity monitoring and audit logs
- **Self-registration system** with admin approval workflow
- **Password reset and email verification** flows
- **User profile management** with avatar uploads and preferences

#### 1.3 Organization Management
- **Multi-tenant organization support**
  - Organization creation and configuration
  - Custom branding per organization
  - Organization-specific user isolation
  - Billing and subscription management foundations

### Phase 2: Educational Content Management System 📚
**Priority**: High | **Timeline**: 3-4 weeks

#### 2.1 Course Management Platform
- **Teacher course creation interface**
  - Drag-and-drop course builder
  - Multimedia content upload (videos, images, documents)
  - Interactive assessments and quizzes
  - Course scheduling and prerequisites management
- **Course categorization and tagging** system
- **Version control for course content** with rollback capabilities
- **Course analytics and engagement metrics**

#### 2.2 Learning Management Features
- **Student enrollment system**
  - Self-enrollment and instructor-managed enrollment
  - Prerequisites checking and pathway recommendations  
  - Progress tracking with milestone achievements
  - Certificate generation upon course completion
- **Interactive learning components**
  - Video player with progress tracking
  - Interactive 3D surgical models integration
  - Collaborative discussion forums per course
  - Peer-to-peer learning features

#### 2.3 Assessment & Progress Tracking
- **Comprehensive assessment engine**
  - Multiple question types (MCQ, practical, video-based)
  - Timed assessments with anti-cheating measures
  - Practical skills evaluation rubrics
  - Automated grading with manual review options
- **Advanced progress analytics**
  - Learning curve analysis and predictions
  - Skill gap identification and recommendations
  - Personalized learning path optimization
  - Competency-based progression tracking

### Phase 3: Real-Time Features & Communication 💬
**Priority**: Medium | **Timeline**: 2-3 weeks

#### 3.1 Real-Time Communication System
- **Integrated messaging platform**
  - Teacher-student direct messaging
  - Group discussions and study groups
  - Announcement system with push notifications
  - Video conferencing integration (Zoom/Teams API)
- **Live classroom features**
  - Virtual surgical demonstrations with screen sharing
  - Real-time Q&A sessions during lectures
  - Collaborative whiteboard for surgical planning
  - Live polling and interactive exercises

#### 3.2 Notification & Alert System
- **Multi-channel notification delivery**
  - In-app notifications with real-time updates
  - Email notifications for important events
  - SMS alerts for urgent communications
  - Push notifications for mobile app (future)
- **Smart notification management**
  - User-customizable notification preferences
  - Automated reminders for assignments and assessments
  - Progress milestone celebrations and achievements
  - Emergency alert system for critical updates

### Phase 4: Advanced Analytics & Reporting 📊
**Priority**: Medium | **Timeline**: 3-4 weeks

#### 4.1 Comprehensive Dashboard Analytics
- **Replace static dashboard metrics** with real-time data
  - Student performance analytics with trend analysis
  - Course effectiveness and engagement metrics
  - Teacher performance and student feedback integration
  - Organization-wide training program success rates
- **Interactive data visualization**
  - Customizable charts and graphs with drill-down capabilities
  - Comparative analysis tools for performance benchmarking
  - Predictive analytics for student success forecasting
  - Export capabilities for external reporting

#### 4.2 Advanced Reporting Engine
- **Automated report generation**
  - Scheduled reports delivered via email
  - Custom report builder with drag-and-drop interface
  - Compliance reporting for accreditation bodies
  - Financial reporting for subscription and usage metrics
- **Data export and integration**
  - API endpoints for third-party integrations
  - Bulk data export in multiple formats (PDF, Excel, CSV)
  - Integration with hospital information systems
  - Learning Record Store (LRS) compatibility for xAPI

### Phase 5: Mobile Optimization & Accessibility 📱
**Priority**: Low | **Timeline**: 2-3 weeks

#### 5.1 Progressive Web App (PWA) Development
- **Mobile-optimized interface**
  - Touch-friendly navigation and interactions
  - Offline capability for course content
  - Mobile-specific UI components and layouts
  - App-like experience with home screen installation
- **Performance optimization**
  - Image optimization and lazy loading
  - Code splitting for faster mobile load times
  - Service worker implementation for caching
  - Network-aware content delivery

#### 5.2 Accessibility & Internationalization
- **WCAG 2.1 compliance** for accessibility standards
  - Screen reader optimization
  - Keyboard navigation support
  - High contrast mode and font scaling
  - Color-blind friendly design patterns
- **Multi-language support** preparation
  - Internationalization framework setup
  - Content management for translations
  - Right-to-left (RTL) language support
  - Localized date, time, and number formatting

### Phase 6: Advanced Surgical Training Features 🏥
**Priority**: Medium | **Timeline**: 4-6 weeks

#### 6.1 Simulation Integration
- **Virtual reality training modules**
  - VR headset compatibility and integration
  - Immersive surgical procedure simulations
  - Hand tracking and haptic feedback support
  - Performance analytics for VR training sessions
- **3D model integration**
  - Interactive anatomical models
  - Surgical planning tools with 3D visualization
  - Augmented reality overlay capabilities
  - Custom model upload and sharing features

#### 6.2 Competency-Based Assessment
- **Skill-based evaluation system**
  - Detailed rubrics for surgical skills assessment
  - Video-based practical assessments with annotation tools
  - Peer review and multi-evaluator scoring systems
  - Competency pathway mapping and certification tracking
- **AI-powered assessment assistance**
  - Automated video analysis for technique evaluation
  - Pattern recognition for common surgical errors
  - Personalized improvement recommendations
  - Benchmarking against industry standards

## Technical Debt & Optimization Tasks

### Performance Optimizations
- [ ] Implement comprehensive caching strategy (Redis/Memory cache)
- [ ] Database query optimization and indexing
- [ ] Image optimization and CDN integration
- [ ] Code splitting and lazy loading implementation
- [ ] SEO optimization for marketing pages

### Security Enhancements
- [ ] Security audit and penetration testing
- [ ] OWASP compliance implementation
- [ ] Rate limiting and DDoS protection
- [ ] Data encryption at rest and in transit
- [ ] HIPAA compliance for healthcare data

### Developer Experience
- [ ] Comprehensive API documentation with Swagger/OpenAPI
- [ ] Unit test coverage increase to >90%
- [ ] Integration test suite development
- [ ] CI/CD pipeline optimization
- [ ] Docker containerization for consistent deployments

## Contributing

We welcome contributions to the surgical training platform! Please see our contributing guidelines for:
- Code style and standards
- Pull request process
- Testing requirements
- Documentation updates

## Deployment

### Production Deployment
- **Vercel**: Recommended for Next.js applications
- **Docker**: Containerized deployment for flexible hosting
- **Database**: PostgreSQL on AWS RDS or similar managed service
- **File Storage**: AWS S3 or Google Cloud Storage for multimedia content
- **CDN**: CloudFlare or AWS CloudFront for global content delivery

### Environment Variables
Configure the following environment variables for production:
```bash
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
```

## Changelog

### Version 1.0.0 - Current Version [September 2025]

#### Major Features Implemented
- **Multi-Role SaaS Architecture** - Complete role-based system with Admin, Teacher, and Student dashboards
- **JWT Authentication System** - Secure token-based authentication with role validation
- **Modern Landing Page** - Professional hero section with integrated branding and call-to-action
- **Role-Based Navigation** - Dynamic menu system that adapts to user permissions
- **Middleware Protection** - Route-level security with automatic role-based redirections
- **Responsive Design** - Mobile-optimized interface with dark/light mode support

#### Technical Improvements
- **Next.js 15 App Router** - Modern routing with server components and layouts
- **TypeScript Integration** - Full type safety with role-based interfaces and utilities
- **Static User Management** - Pre-configured user system for rapid development and testing
- **Component Architecture** - Modular, reusable components with proper separation of concerns
- **Brand Integration** - Custom logo implementation with responsive sizing

#### Current Limitations & Known Issues
- **Static User Data** - Users are currently hardcoded in `src/lib/users.ts` (database integration planned)
- **Placeholder Metrics** - Dashboard analytics show static data (real metrics implementation planned)
- **Basic Role Permissions** - Simple hierarchical access control (advanced permissions system planned)
- **Limited Content Management** - No course creation or educational content features yet

## License

This surgical training SaaS platform is released under the MIT License. Feel free to use, modify, and distribute as needed for educational and commercial purposes.

## Support & Contact

For questions, support, or collaboration opportunities:

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Join the community discussion for best practices and implementation help
- **Email**: Contact the development team for professional support and consulting

---

**Built with ❤️ for advancing surgical education and training worldwide.**
