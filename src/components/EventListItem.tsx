import React from 'react';
import { IEvent } from '../service/events';
import { IonCol } from '@ionic/react';
import EventCard from './EventCard';

const EventListItem: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <IonCol size="12" sizeMd="4">
            <EventCard event={event}>
                {event.startDate.toDateString()} - {event.endDate.toDateString()}
                {event.distance}
            </EventCard>
        </IonCol>
    );
};

export default EventListItem;
