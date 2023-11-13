'use client';
import './styles.css';

import { useState, useEffect } from 'react';

const { open } = window;

const myStyle = { marginTop: '20px' };

export default function Page() {

    const apiKey = 'jYPSvVtAnPS4Pq1xdcbwo6v21NMhBesBQ1Jq87YzBCuW97OIHLAJBJ6xLlkKfN8v';

    const fetchDistance = async (origin: any, destination: any) => {
        try {
            const response = await fetch(
                `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&key=${apiKey}`
            );
            if (response.ok) {
                return await response.json();
            } else {
                console.error('Erreur lors de la requête vers l\'API de distance.');
            }
        } catch (error) {
            console.error('Erreur lors de la requête vers l\'API de distance :', error);
        }
    };


    const [activities, setActivities] = useState([
        {
            image: 'https://www.nice.fr/uploads/media/paysage/0001/01/musee_matisse_1.jpg',
            title: 'Musée Matisse',
            description: 'Le musée Matisse à Nice est dédié au célèbre artiste Henri Matisse.',
            longitude: 7.27617,
            latitude: 43.719543,
            budget: '10 €',
            rating: 4.5,
        },
        {
            image: 'https://www.francebleu.fr/s3/cruiser-production/2023/09/9bdf8760-955b-4228-9374-1f48fec93491/1200x680_sc_csm-header-nice-patrimoine-188bdb26bd.jpg',
            title: 'Promenade des Anglais',
            description: "La Promenade des Anglais est l'endroit idéal pour une belle balade au bord de la mer.",
            longitude: 6.252095,
            latitude: 43.693177,
            budget: 'Gratuit',
            rating: 4.8,
        },
        {
            image: 'https://cdn.getyourguide.com/img/tour/58eb86acaeeb1.jpeg/98.jpg',
            title: 'Vieux-Nice',
            description: 'Le Vieux-Nice est un quartier pittoresque avec des rues étroites, des marchés et de la cuisine délicieuse.',
            longitude: 7.280043,
            latitude: 43.694654,
            budget: 'Varie',
            rating: 4.3,
        },
        {
            image: 'https://www.geolithe.fr/wp-content/uploads/2020/04/Pano1-scaled.jpg',
            title: 'Colline du Château',
            description: "La Colline du Château offre une vue panoramique sur la ville de Nice et la Méditerranée.",
            longitude: 7.279762,
            latitude: 43.695897,
            budget: 'Gratuit',
            rating: 4.6,
        },
        {
            image: 'https://frenchriviera.travel/wp-content/uploads/2018/09/Parc-Phoenix1.jpg',
            title: 'Parc Phoenix',
            description: 'Le Parc Phoenix est un jardin botanique et un parc zoologique à Nice.',
            longitude: 7.2191984,
            latitude: 43.6687629,
            budget: '5 €',
            rating: 4.4,
        },
    ]);
    const [route, setRoute] = useState([]); // Tableau d'objets JSON
    const [trajet, setTrajet] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    const addRoute = async (activity: { image: string; title: string; description: string; longitude: number; latitude: number; budget: string; rating: number; }, index: number) => {
        if (route.length > 0) {
            // Check distance x temps
            let destination = activity;
            let origin = route[route.length - 1];
            try {
                const response = await fetchDistance(origin, destination);

                if (response && (response.rows[0].elements[0].distance.value < 20000 || response.rows[0].elements[0].duration.value < 5400)) {
                    // Fonction pour ajouter une activité au tableau route
                    setRoute([...route, { ...activity }]);
                    setTrajet([
                        ...trajet,
                        {
                            distance: response.rows[0].elements[0].distance.text,
                            duration: response.rows[0].elements[0].duration.text,
                        },
                    ]);
                    const updatedActivities = activities.filter((_, i) => i !== index);
                    setActivities(updatedActivities);
                    setErrorMessage('');
                } else {
                    setErrorMessage('La deuxième activité est trop éloignée ou prend trop de temps pour être ajoutée.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données de distance :', error);
            }
        } else {
            // Fonction pour ajouter une activité au tableau route
            setRoute([...route, { ...activity }]);
            const updatedActivities = activities.filter((_, i) => i !== index);
            setActivities(updatedActivities);
        }

    };

    const openGoogleMaps = () => {
        if (route.length > 0) {
            // Construire l'URL Google Maps avec les coordonnées de chaque activité
            const coordinates = route.map((activity) => `${activity.latitude},${activity.longitude}`);
            const googleMapsURL = `https://www.google.com/maps/dir/${coordinates.join('/')}`;

            // Ouvrir un nouvel onglet avec l'URL Google Maps
            open(googleMapsURL);
        }
    };

    return (
        <div>
            <h1>Créez un parcours ! </h1>
            <div className="content">
                <div className='activities route'>
                    <h2>Votre itinéraire</h2>
                    <ul>
                        {route.map((activity, index) => (
                            <div key={activity.title}>
                                <li key={index} className="activity">
                                    <img className='activityImage' src={activity.image} alt={activity.title} />
                                    <div className='activityContent'>
                                        <h3>{activity.title}</h3>
                                        <p>{activity.description}</p>
                                        <p style={myStyle}> <span>Coordonnées :</span> {activity.latitude}, {activity.longitude}</p>
                                        <p> <span>Budget :</span> {activity.budget}</p>
                                        <p> <span>Note :</span> {activity.rating} / 5 ⭐</p>
                                    </div>
                                </li>
                                {trajet.length > 0 && trajet[index] && (
                                    <div className="navInfo">
                                        <p>Distance de {trajet[index].distance}</p>
                                        <p>Temps de trajet de {trajet[index].duration}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ul>
                    <div className="error-message">{errorMessage}</div>
                </div>
                <div className='activities'>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index} className="activity">
                                <img className='activityImage' src={activity.image} alt={activity.title} />
                                <div className='activityContent'>
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description}</p>
                                    <p style={myStyle}> <span>Coordonnées :</span> {activity.latitude}, {activity.longitude}</p>
                                    <p> <span>Budget :</span> {activity.budget}</p>
                                    <p> <span>Note :</span> {activity.rating} / 5 ⭐</p>
                                </div>
                                <button className='ajouter' onClick={() => addRoute(activity, index)}>Ajouter activité</button> {/* Bouton pour ajouter un élément */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="itineraire-button" onClick={openGoogleMaps}>Itinéraire</button>
        </div>
    );
}