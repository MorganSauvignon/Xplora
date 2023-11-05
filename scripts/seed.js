const { db } = require('@vercel/postgres');
const {
  activite,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedActivite(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "activite" table if it doesn't exist
    const createTable = await client.sql`
    DROP TABLE activite;
    CREATE TABLE IF NOT EXISTS activite (
    image VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ville VARCHAR(255),
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    budget FLOAT,
    rating FLOAT,
    type VARCHAR(255),
    parcours BOOLEAN
  );
`;

    console.log(`Created "activite" table`);

    // Insert data into the "activite" table
    const insertedActivite = await Promise.all(
      activite.map(
        (activite) => client.sql`
        INSERT INTO activite (image, title, description, ville, longitude, latitude, budget, rating, type, parcours)
        VALUES (${activite.image}, ${activite.title}, ${activite.description}, ${activite.ville}, ${activite.longitude}, ${activite.latitude}, ${activite.budget}, ${activite.rating}, ${activite.type}, ${activite.parcours})
      `,
      ),
    );

    console.log(`Seeded ${insertedActivite.length} activite`);

    return {
      createTable,
      activite: insertedActivite,
    };
  } catch (error) {
    console.error('Error seeding activite:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedActivite(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});