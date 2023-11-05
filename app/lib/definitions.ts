// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Activite = {
  image: string;
  title: string;
  description: string;
  ville: string;
  longitude: Float32Array;
  latitude: Float32Array;
  budget: Float32Array;
  rating: Float32Array;
  type: string;
  parcours: boolean;
};