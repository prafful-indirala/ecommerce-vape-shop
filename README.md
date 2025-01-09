# Next.js Ecommerce-vape-shop  Project

This project implements a full-featured authentication system using Next.js 14, NextAuth.js, and TypeScript.

## Project Structure

src/
├── app/
│ ├── api/
│ │ └── auth/
│ │ ├── [...nextauth]/
│ │ └── register/
│ ├── auth/
│ │ ├── signin/
│ │ └── register/
│ └── layout.tsx
├── components/
│ ├── layout/
│ │ └── Navbar/
│ ├── providers/
│ │ └── AuthProvider.tsx
│ └── ui/
│ └── Navbar.tsx

## Features

- User authentication with NextAuth.js
- Sign in functionality
- User registration
- Protected routes
- Persistent sessions
- Responsive navigation with authentication state

## Setup

1. Clone the repository
2. Install dependencies:
```

## Authentication Flow

The authentication system uses NextAuth.js for handling user sessions and authentication state. The `AuthProvider` component wraps the application to provide authentication context throughout the app.

### Key Components

- `AuthProvider`: Manages authentication state across the application
- `TopNavbar`: Displays different navigation options based on authentication status
- `SignIn`: Handles user login
- `Register`: Manages new user registration

### API Routes

- `/api/auth/[...nextauth]`: Handles NextAuth.js authentication
- `/api/auth/register`: Processes new user registration

## Usage

1. Users can sign in through the `/auth/signin` route
2. New users can register through the `/auth/register` route
3. Protected routes can be implemented using the `useSession` hook or middleware

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.