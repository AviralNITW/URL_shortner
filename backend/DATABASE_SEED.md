# 📊 Database Structure & Seeding Guide

## 📋 Data Structure

### User Collection (`users`)
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed with bcrypt),
  refresh_token: String (optional)
}
```

### URL Collection (`urls`)
```javascript
{
  long_url: String (required),
  short_url: String (required, unique, indexed),
  user: ObjectId (reference to User, indexed),
  createdAt: Date (default: now),
  clicks: Number (default: 0)
}
```

## 🌱 Seeding the Database

### Step 1: Create `.env` file

Create `backend/.env` file with the following content:

```env
# MongoDB Connection String
# IMPORTANT: Replace 'your-cluster-name' with your actual MongoDB Atlas cluster name
# You can find it in MongoDB Atlas → Connect → Connect your application
MONGO_URI=mongodb+srv://maviral456_db_user:TpW1OKD7dimQKy1v@your-cluster-name.mongodb.net/url_shortener?retryWrites=true&w=majority

# JWT Secret Key
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Server Port
PORT=8080

# Environment
NODE_ENV=development

# Request body size limit
LIMIT=10mb
```

**⚠️ Important:** 
- Replace `your-cluster-name` with your actual MongoDB Atlas cluster hostname
- Example: If your cluster is `cluster0.abc123.mongodb.net`, use that instead
- Make sure your IP is whitelisted in MongoDB Atlas Network Access

### Step 2: Run the seed script

```bash
cd backend
npm run seed
```

## 📦 Seed Data

The seed script will create:

### 👥 3 Sample Users
1. **John Doe** - `john.doe@example.com` / `password123`
2. **Jane Smith** - `jane.smith@example.com` / `password123`
3. **Bob Johnson** - `bob.johnson@example.com` / `password123`

### 🔗 6 Sample URLs
- Distributed across the 3 users
- Includes popular websites (Google, GitHub, Stack Overflow, YouTube, LinkedIn, Twitter)
- Each URL has random click counts and creation dates

## 🔍 Verifying Seed Data

After running the seed script, you can verify in MongoDB Atlas:

1. Go to your cluster → Collections
2. You should see:
   - Database: `url_shortener`
   - Collections: `users` (3 documents), `urls` (6 documents)

## 🧹 Clearing Seed Data

The seed script automatically clears existing data before seeding. If you want to keep existing data, edit `backend/src/scripts/seed.js` and comment out the delete operations:

```javascript
// await User.deleteMany({});
// await URL.deleteMany({});
```

## 🔐 Security Notes

- Passwords are hashed using bcrypt (10 rounds)
- Never commit `.env` file to Git (already in `.gitignore`)
- Change default passwords in production
- Use strong JWT_SECRET in production

