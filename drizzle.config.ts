import type { Config } from 'drizzle-kit';

const config: Config = {
  schema: ['./src/server/schema/*.ts'],
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL ?? process.env.DATABASE_URL!,
  },
};

export default config;
