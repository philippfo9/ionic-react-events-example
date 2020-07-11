import React from 'react';
import { IEvent, formatEventDate } from '../service/events';
import { IonCol, IonText } from '@ionic/react';
import EventCard from './EventCard';

const EventListItem: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <IonCol size="12" sizeMd="4">
            <EventCard event={event}>
                <div>
                    <IonText color="primary" style={{ fontWeight: '700' }}>
                        {formatEventDate(event)}
                    </IonText>
                </div>
                <div>
                    <IonText style={{ fontSize: '0.8rem', fontWeight: '800' }}>In {event.distance} km Distanz</IonText>
                </div>
            </EventCard>
        </IonCol>
    );
};

export default EventListItem;
