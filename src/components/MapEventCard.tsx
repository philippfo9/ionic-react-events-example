import React from 'react';
import './MapEventCard.scss';
import { IonCol } from '@ionic/react';
import EventCard from './EventCard';
import { IEvent } from '../service/events';

const MapEventCard: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <IonCol size="12" sizeMd="4">
            <EventCard event={event}></EventCard>
        </IonCol>
    );
};

export default MapEventCard;
