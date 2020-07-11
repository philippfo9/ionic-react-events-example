import React from 'react';
import { IEvent } from '../service/events';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const EventCard: React.FC<{ event: IEvent }> = (props) => {
    const event = props.event;
    return (
        <IonCard>
            <img src={event.titlePic} alt={event.name} />
            <IonCardHeader>
                <IonCardSubtitle>{event.location.name}</IonCardSubtitle>
                <IonCardTitle>{event.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{props.children}</IonCardContent>
        </IonCard>
    );
};

export default EventCard;
