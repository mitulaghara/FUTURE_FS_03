const mongoose = require('mongoose');
require('dotenv').config();

// ─── Connection URIs ───────────────────────────────────────────────────────────
const OLD_URI = 'mongodb+srv://mitulaghara270105:Am270105@mitulmarket.c0jgnit.mongodb.net/ecommerce_project?appName=MitulMarket';
const NEW_URI = 'mongodb+srv://mitulaghara270105:Am270105@mitulmarket.c0jgnit.mongodb.net/indian_kart?appName=IndianKart';

// ─── Collections to migrate ────────────────────────────────────────────────────
const COLLECTIONS = ['products', 'orders', 'users', 'carts', 'wishlists'];

const migrate = async () => {
    console.log('\n🚀 Starting migration: ecommerce_project → indian_kart\n');

    // Connect to old DB
    const oldConn = await mongoose.createConnection(OLD_URI).asPromise();
    console.log('✅ Connected to OLD database: ecommerce_project');

    // Connect to new DB
    const newConn = await mongoose.createConnection(NEW_URI).asPromise();
    console.log('✅ Connected to NEW database: indian_kart\n');

    let totalCopied = 0;

    for (const collectionName of COLLECTIONS) {
        try {
            const oldCollection = oldConn.collection(collectionName);
            const newCollection = newConn.collection(collectionName);

            // Fetch all documents from old DB
            const docs = await oldCollection.find({}).toArray();

            if (docs.length === 0) {
                console.log(`⚠️  ${collectionName}: No documents found, skipping.`);
                continue;
            }

            // Count existing docs in new DB
            const existingCount = await newCollection.countDocuments();

            if (existingCount > 0) {
                console.log(`ℹ️  ${collectionName}: ${existingCount} docs already exist in new DB.`);
                // Delete existing ones before copying (fresh copy)
                await newCollection.deleteMany({});
                console.log(`   🗑️  Cleared existing ${existingCount} docs from new DB.`);
            }

            // Insert all docs from old DB into new DB
            const result = await newCollection.insertMany(docs, { ordered: false });
            console.log(`✅ ${collectionName}: Copied ${result.insertedCount} / ${docs.length} documents.`);
            totalCopied += result.insertedCount;

        } catch (err) {
            console.error(`❌ Error migrating collection "${collectionName}":`, err.message);
        }
    }

    console.log(`\n🎉 Migration complete! Total documents copied: ${totalCopied}`);
    console.log('─────────────────────────────────────────────\n');

    await oldConn.close();
    await newConn.close();
    process.exit(0);
};

migrate().catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
});
