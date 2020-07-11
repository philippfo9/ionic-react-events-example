import React from 'react';
import { IEvent } from '../service/events';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const EventCard: React.FC<{ event: IEvent; cardClassNames?: string }> = (props) => {
    const event = props.event;
    return (
        <IonCard className={props.cardClassNames}>
            <img src={event.titlePic} alt={event.name} />
            <IonCardHeader>
                <IonCardSubtitle>{event.location.name}</IonCardSubtitle>
                <IonCardTitle>{event.name}</IonCardTitle>
            </IonCardHeader>
            {props.children && <IonCardContent>{props.children}</IonCardContent>}
        </IonCard>
    );
};

export default EventCard;
