# Roseto Book Club

A modern book club website with an admin dashboard for managing memberships, books, and reviews.

## Features

### Public Features

- 📚 Browse books the club has read
- ⭐ View approved book reviews
- 📝 Submit membership applications
- 💬 Submit book reviews (pending admin approval)

### Admin Features

- 🔐 Secure admin login
- 👥 Approve/reject membership requests
- 📖 Add, edit, and delete books
- ✅ Approve/reject book reviews
- 🗑️ Delete inappropriate content

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Authentication**: Custom session-based auth
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS v4
- **Validation**: Zod

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- A Supabase account (free tier works)

### 2. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and create a new project
2. Wait for the database to be provisioned
3. Go to Project Settings > Database
4. Copy the connection string (both pooler and direct)

### 3. Environment Setup

1. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

2. Fill in your Supabase credentials in `.env`:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

    # Connection pooler (for serverless functions)
    DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true"

    # Direct connection (for migrations)
    DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"

    # Generate a random secret (use: openssl rand -base64 32)
    ADMIN_SESSION_SECRET=your-random-secret-key
    ```

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Setup Database

1. Generate Prisma Client:

    ```bash
    pnpm db:generate
    ```

2. Push the schema to your database:

    ```bash
    pnpm db:push
    ```

3. Create the first admin user:

    ```bash
    pnpm db:seed-admin
    ```

    **Default Admin Credentials:**

    - Email: `admin@rosetobookclub.com`
    - Password: `admin123`

    ⚠️ **IMPORTANT**: Change this password immediately after first login!

### 6. Run Development Server

```bash
pnpm dev
```

Visit:

- Public site: [http://localhost:3000](http://localhost:3000)
- Admin login: [http://localhost:3000/admin](http://localhost:3000/admin)

## API Endpoints

### Public Endpoints

- `POST /api/membership` - Submit membership application
- `POST /api/reviews` - Submit book review
- `GET /api/reviews` - Get approved reviews
- `GET /api/books` - Get all books with approved reviews

### Admin Endpoints (Require Authentication)

- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/membership-requests` - List all membership requests
- `PATCH /api/admin/membership-requests?id=<id>` - Approve/reject membership
- `GET /api/admin/books` - List all books (admin view)
- `POST /api/admin/books` - Create new book
- `PATCH /api/admin/books?id=<id>` - Update book
- `DELETE /api/admin/books?id=<id>` - Delete book
- `GET /api/admin/reviews` - List all reviews (admin view)
- `PATCH /api/admin/reviews?id=<id>` - Approve/reject review
- `DELETE /api/admin/reviews?id=<id>` - Delete review

## Database Schema

### Admin

- Secure authentication for admin users
- Password hashing with bcrypt

### MembershipRequest

- Track membership applications
- Status: PENDING, APPROVED, REJECTED

### Book

- Title, author, description, image URL
- Related reviews

### Review

- Book reviews with ratings (1-5)
- Status: PENDING, APPROVED, REJECTED
- Only approved reviews shown publicly

## Prisma Studio

To view and manage your database with a GUI:

```bash
pnpm db:studio
```

This opens Prisma Studio at [http://localhost:5555](http://localhost:5555)

## Deployment

### Environment Variables

Make sure to set all environment variables in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL`
- `DIRECT_URL`
- `ADMIN_SESSION_SECRET`

### Build Command

```bash
pnpm build
```

### Recommended Platforms

- Vercel (built for Next.js)
- Netlify
- Railway
- Render

## Security Notes

1. **Change Default Admin Password**: The seed script creates an admin with a default password. Change it immediately!
2. **Session Secret**: Use a strong random string for `ADMIN_SESSION_SECRET`
3. **HTTPS Only**: Use HTTPS in production for secure cookies
4. **Rate Limiting**: Consider adding rate limiting for public endpoints
5. **Input Validation**: All inputs are validated with Zod schemas

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own book club!
