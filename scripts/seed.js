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
    CREATE TABLE IF NOT EXISTS activite (
    id INT NOT NULL,
    Nom_du_POI VARCHAR(255) NOT NULL,
    Latitude FLOAT NOT NULL,
    Longitude FLOAT NOT NULL,
    Adresse_postale VARCHAR(255),
    Code_postal_et_commune VARCHAR(255),
    Createur_de_la_donnee VARCHAR(255),
    SIT_diffuseur VARCHAR(255),
    Date_de_mise_a_jour DATE,
    Contacts_du_POI VARCHAR(255),
    Classements_du_POI VARCHAR(255),
    Description VARCHAR(255),
    URI_ID_du_POI VARCHAR(255)
  );
`;

    console.log(`Created "activite" table`);

    // Insert data into the "activite" table
    const insertedActivite = await Promise.all(
      activite.map(
        (activite) => client.sql`
        INSERT INTO activite (id, Nom_du_POI, Latitude, Longitude, Adresse_postale, Code_postal_et_commune, Createur_de_la_donnee, SIT_diffuseur, Date_de_mise_a_jour, Contacts_du_POI, Classements_du_POI, Description, URI_ID_du_POI)
        VALUES (${activite.id}, ${activite.Nom_du_POI}, ${activite.Latitude}, ${activite.Longitude}, ${activite.Adresse_postale}, ${activite.Code_postal_et_commune}, ${activite.Createur_de_la_donnee}, ${activite.SIT_diffuseur}, ${activite.Date_de_mise_a_jour}, ${activite.Contacts_du_POI}, ${activite.Classements_du_POI}, ${activite.Description}, ${activite.URI_ID_du_POI})
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