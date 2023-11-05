// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const activite = [
  {
      image: 'https://www.nice.fr/uploads/media/paysage/0001/01/musee_matisse_1.jpg',
      title: 'Musée Matisse',
      description: 'Le musée Matisse à Nice est dédié au célèbre artiste Henri Matisse.',
      ville: 'Nice',
      longitude: 7.2551,
      latitude: 43.7102,
      budget: 10,
      rating: 4.5,
      type: 'Musée',
      parcours: false,
  },
  {
      image: 'https://www.francebleu.fr/s3/cruiser-production/2023/09/9bdf8760-955b-4228-9374-1f48fec93491/1200x680_sc_csm-header-nice-patrimoine-188bdb26bd.jpg',
      title: 'Promenade des Anglais',
      description: "La Promenade des Anglais est l'endroit idéal pour une belle balade au bord de la mer.",
      ville: 'Nice',
      longitude: 6.2510,
      latitude: 43.6950,
      budget: 0,
      rating: 4.8,
      type: 'Extérieur',
      parcours: false,
  },
  {
      image: 'https://cdn.getyourguide.com/img/tour/58eb86acaeeb1.jpeg/98.jpg',
      title: 'Vieux-Nice',
      description: 'Le Vieux-Nice est un quartier pittoresque avec des rues étroites, des marchés et de la cuisine délicieuse.',
      ville: 'Nice',
      longitude: 7.2770,
      latitude: 43.6974,
      budget: 0,
      rating: 4.3,
      type: 'Extérieur',
      parcours: false,
  },
  {
      image: 'https://www.geolithe.fr/wp-content/uploads/2020/04/Pano1-scaled.jpg',
      title: 'Colline du Château',
      description: "La Colline du Château offre une vue panoramique sur la ville de Nice et la Méditerranée.",
      ville: 'Nice',
      longitude: 7.2872,
      latitude: 43.6973,
      budget: 0,
      rating: 4.6,
      type: 'Chateau',
      parcours: false,
  },
  {
      image: 'https://frenchriviera.travel/wp-content/uploads/2018/09/Parc-Phoenix1.jpg',
      title: 'Parc Phoenix',
      description: 'Le Parc Phoenix est un jardin botanique et un parc zoologique à Nice.',
      ville: 'Nice',
      longitude: 7.2073,
      latitude: 43.6622,
      budget: 5,
      rating: 4.4,
      type: 'Zoo',
      parcours: false,
  },
];

module.exports = {
  activite,
};