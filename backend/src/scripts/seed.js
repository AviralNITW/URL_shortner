import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../models/user_schema.model.js";
import URL from "../models/url_schema.model.js";

dotenv.config();

// Sample users data
const sampleUsers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123", // Will be hashed
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123", // Will be hashed
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "password123", // Will be hashed
  },
];

// Sample URLs data (will be linked to users after they're created)
const sampleUrls = [
  {
    long_url: "https://www.google.com",
    short_url: "google",
    clicks: 15,
  },
  {
    long_url: "https://www.github.com",
    short_url: "github",
    clicks: 8,
  },
  {
    long_url: "https://www.stackoverflow.com",
    short_url: "stack",
    clicks: 23,
  },
  {
    long_url: "https://www.youtube.com",
    short_url: "yt",
    clicks: 45,
  },
  {
    long_url: "https://www.linkedin.com",
    short_url: "linkedin",
    clicks: 12,
  },
  {
    long_url: "https://www.twitter.com",
    short_url: "twitter",
    clicks: 30,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log("\n🗑️  Clearing existing data...");
    await User.deleteMany({});
    await URL.deleteMany({});
    console.log("✅ Existing data cleared");

    // Create users with hashed passwords
    console.log("\n👥 Creating users...");
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = new User({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      });
      const savedUser = await user.save();
      createdUsers.push(savedUser);
      console.log(`   ✅ Created user: ${savedUser.email} (Password: ${userData.password})`);
    }

    // Create URLs and assign them to users
    console.log("\n🔗 Creating URLs...");
    const urlsPerUser = Math.ceil(sampleUrls.length / createdUsers.length);
    
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
      const startIndex = i * urlsPerUser;
      const endIndex = Math.min(startIndex + urlsPerUser, sampleUrls.length);
      const userUrls = sampleUrls.slice(startIndex, endIndex);

      for (const urlData of userUrls) {
        const url = new URL({
          long_url: urlData.long_url,
          short_url: urlData.short_url,
          user: user._id,
          clicks: urlData.clicks,
          createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
        });
        await url.save();
        console.log(`   ✅ Created URL: ${urlData.short_url} -> ${urlData.long_url} (User: ${user.email})`);
      }
    }

    // Summary
    console.log("\n📊 Seeding Summary:");
    console.log(`   👥 Users created: ${createdUsers.length}`);
    const totalUrls = await URL.countDocuments();
    console.log(`   🔗 URLs created: ${totalUrls}`);
    
    console.log("\n✅ Database seeding completed successfully!");
    console.log("\n📝 Test Credentials:");
    sampleUsers.forEach((user, index) => {
      console.log(`   User ${index + 1}: ${user.email} / ${user.password}`);
    });

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("\n🔌 Database connection closed");
    process.exit(0);
  }
};

// Run the seed function
seedDatabase();

