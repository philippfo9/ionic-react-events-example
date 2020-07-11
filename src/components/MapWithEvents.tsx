import React from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import './MapWithEvents.css';
import { IEvent } from '../service/events';
import { IonIcon } from '@ionic/react';
import { pinOutline, headsetOutline } from 'ionicons/icons';

const EventMapMarker: React.FC<{ event: IEvent; lat: number; lng: number; markerClicked: () => any }> = ({ event, markerClicked }) => {
    return (
        <div
            onClick={markerClicked}
            style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                backgroundColor: '#4854e0',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            <IonIcon
                style={{
                    width: '20px',
                    height: '20px',
                }}
                color="light"
                icon={headsetOutline}
            ></IonIcon>
        </div>
    );
};

interface IEventsMapProps {
    events: IEvent[];
    openEventCard: (event: IEvent) => any;
    center: Coords;
    zoom: number;
}

const MapWithEvents: React.FC<IEventsMapProps> = ({ events, center, zoom, openEventCard }) => {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA2QvNXuMtGwEFa1JpJ-5ePXVccLvRilEM' }}
            defaultCenter={center}
            zoom={zoom}
            options={{ fullscreenControl: false }}
        >
            {events.map((ev) => (
                <EventMapMarker
                    markerClicked={() => openEventCard(ev)}
                    key={ev.name}
                    lat={ev.location.lat!}
                    lng={ev.location.lng!}
                    event={ev}
                ></EventMapMarker>
            ))}
        </GoogleMapReact>
    );
};

export default MapWithEvents;
