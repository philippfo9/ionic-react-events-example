import React from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import './MapWithEvents.scss';
import { IEvent } from '../service/events';
import { IonIcon } from '@ionic/react';
import { headsetOutline } from 'ionicons/icons';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '';

const EventMapMarker: React.FC<{ event: IEvent; lat: number; lng: number; markerClicked: () => any }> = ({ event, markerClicked }) => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                markerClicked();
            }}
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
                    marginTop: '2px',
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
            onClick={() => {
                console.log('map clicked');
            }}
            onChildClick={(e, o) => {
                console.log('on child click', e, o);
            }}
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
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
