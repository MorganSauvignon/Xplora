import { sql } from '@vercel/postgres';
import {
  Activite,
} from './definitions';

export async function fetchActivite() {
  try {
    const data = await sql<Activite>`
      SELECT
        image,
        title,
        description,
        ville,
        longitude,
        latitude,
        budget,
        rating,
        type,
        parcours
      FROM activite
      ORDER BY title ASC
    `;
    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all activite.');
  }
}

export async function fetchActiviteTop10(
  query: string
) {
  try {
    const data = await sql<Activite>`
      SELECT
        image,
        title,
        description,
        ville,
        longitude,
        latitude,
        budget,
        rating,
        type,
        parcours
      FROM activite WHERE
        ville ILIKE ${`%${query}%`}
      ORDER BY rating DESC
      LIMIT 10
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}