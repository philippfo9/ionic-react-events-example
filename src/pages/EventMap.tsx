import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './EventMap.scss';
import MapWithEvents from '../components/MapWithEvents';
import events, { IEvent } from '../service/events';
import MapEventCard from '../components/MapEventCard';

const EventMapPage: React.FC = () => {
    const [eventForDetailView, setEventForDetailView] = useState<IEvent>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Suche nach Events auf der Map</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Events Map</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div style={{ height: '100%', width: '100%' }}>
                    <MapWithEvents
                        openEventCard={(event) => {
                            setEventForDetailView(event);
                        }}
                        center={{ lat: 48.210033, lng: 16.363449 }}
                        events={events}
                        zoom={11}
                    ></MapWithEvents>
                </div>
                {eventForDetailView && (
                    <div
                        style={{
                            position: 'absolute',
                            left: '0',
                            width: '100vw',
                            bottom: '0',
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <MapEventCard event={eventForDetailView}></MapEventCard>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default EventMapPage;
