import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

// Configure connection options explicitly
const connectionConfig = {
  max: 1,
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'website',
  ssl: false, // Disable SSL for local development
};
const client = postgres(process.env.DATABASE_URL, connectionConfig);

export const db = drizzle(client, { schema });

// For clean shutdown
process.on('exit', () => {
  client.end().catch(console.error);
});