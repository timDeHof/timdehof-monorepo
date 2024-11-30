import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  console.log('Starting migration...');
  console.log('Using connection URL:', process.env.DATABASE_URL);

  // Configure connection options explicitly
  const connectionConfig = {
    max: 1,
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'website',
    ssl: false,
  };

  try {
    // Create connection with explicit config
    const sql = postgres(process.env.DATABASE_URL, connectionConfig);
    const db = drizzle(sql);

    // Run migrations
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migration completed successfully');

    // Close connection
    await sql.end();
  } catch (error) {
    console.error('Migration failed:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();