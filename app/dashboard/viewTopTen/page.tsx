import './styles.css';

export default function Page() {

  
const tabTopTen = [
  {
      image: 'https://www.nice.fr/uploads/media/paysage/0001/01/musee_matisse_1.jpg',
      title: 'Musée Matisse',
      description: 'Le musée Matisse à Nice est dédié au célèbre artiste Henri Matisse.',
      longitude: 7.2551,
      latitude: 43.7102,
      budget: '10 €',
      rating: 4.5,
  },
  {
      image: 'https://www.francebleu.fr/s3/cruiser-production/2023/09/9bdf8760-955b-4228-9374-1f48fec93491/1200x680_sc_csm-header-nice-patrimoine-188bdb26bd.jpg',
      title: 'Promenade des Anglais',
      description: "La Promenade des Anglais est l'endroit idéal pour une belle balade au bord de la mer.",
      longitude: 6.2510,
      latitude: 43.6950,
      budget: 'Gratuit',
      rating: 4.8,
  },
  {
      image: 'https://cdn.getyourguide.com/img/tour/58eb86acaeeb1.jpeg/98.jpg',
      title: 'Vieux-Nice',
      description: 'Le Vieux-Nice est un quartier pittoresque avec des rues étroites, des marchés et de la cuisine délicieuse.',
      longitude: 7.2770,
      latitude: 43.6974,
      budget: 'Varie',
      rating: 4.3,
  },
  {
      image: 'https://www.geolithe.fr/wp-content/uploads/2020/04/Pano1-scaled.jpg',
      title: 'Colline du Château',
      description: "La Colline du Château offre une vue panoramique sur la ville de Nice et la Méditerranée.",
      longitude: 7.2872,
      latitude: 43.6973,
      budget: 'Gratuit',
      rating: 4.6,
  },
  {
      image: 'https://frenchriviera.travel/wp-content/uploads/2018/09/Parc-Phoenix1.jpg',
      title: 'Parc Phoenix',
      description: 'Le Parc Phoenix est un jardin botanique et un parc zoologique à Nice.',
      longitude: 7.2073,
      latitude: 43.6622,
      budget: '5 €',
      rating: 4.4,
  },
  {
    image: 'https://static.apidae-tourisme.com/filestore/objets-touristiques/images/6/3/12714758.jpg',
    title: 'Cours Saleya',
    description: 'Le Cours Saleya est un marché en plein air à Nice, idéal pour les produits locaux et les souvenirs.',
    longitude: 7.2774,
    latitude: 43.6966,
    budget: 'Gratuit',
    rating: 4.2,
  },
  {
    image: 'https://www.opera-nice.org/media/image/cms/media/Contenu_statique/salle-opera.jpg',
    title: 'Opéra de Nice',
    description: 'L\'Opéra de Nice est un lieu prestigieux pour les arts du spectacle et l opéra.',
    longitude: 7.2640,
    latitude: 43.6960,
    budget: 'Varie',
    rating: 4.6,
  },
  {
    image: 'https://lespepitesdefrance.com/wp-content/uploads/2022/03/1646961098_63_Marche-du-Cours-Saleya-a-Nice-France.jpg',
    title: 'Marché aux Fleurs de Nice',
    description: 'Le Marché aux Fleurs est un endroit pittoresque pour acheter des fleurs, des plantes et des produits locaux.',
    longitude: 7.2727,
    latitude: 43.6971,
    budget: 'Varie',
    rating: 4.3,
  },
  {
    image: 'https://woody.cloudly.space/app/uploads/crt-paca/2021/12/thumbs/mamac-nice-saiko3p-as-1920x960.jpg',
    title: 'Musée d\'Art Moderne et d\'Art Contemporain (MAMAC)',
    description: 'Le MAMAC présente des œuvres d\'art moderne et contemporain, notamment des artistes niçois.',
    longitude: 7.2870,
    latitude: 43.7037,
    budget: '10 €',
    rating: 4.0,
  },
  {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e5/dd/22/photo2jpg.jpg?w=1200&h=-1&s=1',
    title: 'Cathédrale Saint-Nicolas',
    description: 'La cathédrale Saint-Nicolas est un exemple d\'architecture religieuse magnifique à Nice.',
    longitude: 7.2617,
    latitude: 43.7027,
    budget: 'Gratuit',
    rating: 4.5,
  }
  
];



const sortedTopTen = tabTopTen.slice().sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <h1>TOP 10 - Nice</h1>
      <ul className="card-container">
        {sortedTopTen.map((activity, index) => (
          <li key={index} className="card">
            <h2>{activity.title}</h2>
            <img src={activity.image} alt={activity.title} />
            <p>{activity.description}</p>
            <p> <span>Note : </span> {activity.rating} / 5 ⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

