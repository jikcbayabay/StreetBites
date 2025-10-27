import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

const MapsPage = () => {
    const [activeNav, setActiveNav] = useState('maps');
    const [hoveredNav, setHoveredNav] = useState(null);
    const [isHoveringLocation, setIsHoveringLocation] = useState(false);
    const [isHoveringRemove, setIsHoveringRemove] = useState(false);
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [userMarker, setUserMarker] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [vendorMarkers, setVendorMarkers] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    const GOOGLE_MAPS_API_KEY = 'AIzaSyAZ9U8zQf_jssNXF0FtBQBp_q8ttV0yRVI';

    useEffect(() => {
        fetchVendors();
    }, []);

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                initializeMap();
                setIsMapLoaded(true);
            };
            document.head.appendChild(script);
        } else {
            initializeMap();
            setIsMapLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (map && vendors.length > 0 && isMapLoaded) {
            addVendorMarkers();
        }
    }, [map, vendors, isMapLoaded]);

    const initializeMap = () => {
        if (mapRef.current) {
            const defaultLocation = { lat: 14.5764, lng: 121.0237 };

            const newMap = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: defaultLocation,
                mapTypeControl: true,
                fullscreenControl: true,
                streetViewControl: false,
                zoomControl: true,
                mapTypeId: 'roadmap',
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'labels',
                        stylers: [{ visibility: 'off' }]
                    }
                ]
            });

            setMap(newMap);
        }
    };

    const fetchVendors = async () => {
        try {
            const vendorsCollection = collection(db, 'vendor_list');
            const vendorSnapshot = await getDocs(vendorsCollection);
            
            const vendorData = [];
            vendorSnapshot.forEach((doc) => {
                const data = doc.data();
                vendorData.push({ id: doc.id, ...data });
            });
            
            setVendors(vendorData);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };

    const geocodeAddress = async (address) => {
        return new Promise((resolve, reject) => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address + ', Manila, Philippines' }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const location = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                    resolve(location);
                } else {
                    reject(new Error(`Geocoding failed: ${status}`));
                }
            });
        });
    };

    const addVendorMarkers = async () => {
        vendorMarkers.forEach(marker => marker.setMap(null));
        const newMarkers = [];

        for (const vendor of vendors) {
            try {
                const location = await geocodeAddress(vendor.address);
                
                const marker = new window.google.maps.Marker({
                    position: location,
                    map: map,
                    title: vendor.businessName,
                    icon: {
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: '#dc2626',
                        fillOpacity: 1,
                        strokeColor: '#ffffff',
                        strokeWeight: 2,
                    },
                    animation: window.google.maps.Animation.DROP
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div style="padding: 12px; font-family: Arial, sans-serif;">
                        <strong style="font-size: 15px; color: #1f2937; display: block; margin-bottom: 6px;">${vendor.businessName}</strong>
                        <span style="font-size: 13px; color: #6b7280; display: block; margin-bottom: 4px;">${vendor.address}</span>
                        <span style="font-size: 12px; color: #dc2626; font-weight: 600;">${vendor.category || 'Street Food'}</span>
                    </div>`
                });

                marker.addListener('click', () => {
                    newMarkers.forEach(m => {
                        if (m.infoWindow) m.infoWindow.close();
                    });
                    infoWindow.open(map, marker);
                    marker.setAnimation(window.google.maps.Animation.BOUNCE);
                    setTimeout(() => marker.setAnimation(null), 700);
                });

                marker.infoWindow = infoWindow;
                newMarkers.push(marker);
            } catch (error) {
                console.error(`Error geocoding address for ${vendor.businessName}:`, error);
            }
        }

        setVendorMarkers(newMarkers);
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by your browser');
            alert('Geolocation is not supported by your browser');
            return;
        }

        setIsLocating(true);
        setLocationError('Getting your location...');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude, accuracy } = position.coords;
                const newLocation = { lat: latitude, lng: longitude };

                setUserLocation(newLocation);
                setLocationError(null);
                setIsLocating(false);

                if (map) {
                    map.panTo(newLocation);
                    map.setZoom(18);

                    if (userMarker) {
                        userMarker.setMap(null);
                        if (userMarker.accuracyCircle) {
                            userMarker.accuracyCircle.setMap(null);
                        }
                    }

                    const newMarker = new window.google.maps.Marker({
                        position: newLocation,
                        map: map,
                        title: `Your Location (±${Math.round(accuracy)}m)`,
                        animation: window.google.maps.Animation.DROP,
                        icon: {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            scale: 10,
                            fillColor: '#4285F4',
                            fillOpacity: 1,
                            strokeColor: '#ffffff',
                            strokeWeight: 3,
                        }
                    });

                    const accuracyCircle = new window.google.maps.Circle({
                        map: map,
                        center: newLocation,
                        radius: accuracy,
                        fillColor: '#4285F4',
                        fillOpacity: 0.1,
                        strokeColor: '#4285F4',
                        strokeOpacity: 0.3,
                        strokeWeight: 1,
                    });

                    newMarker.accuracyCircle = accuracyCircle;
                    setUserMarker(newMarker);

                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div style="padding: 10px; font-family: Arial, sans-serif;">
                            <strong style="color: #1f2937;">Your Location</strong><br/>
                            <small style="color: #6b7280;">Accuracy: ±${Math.round(accuracy)}m</small>
                        </div>`
                    });

                    newMarker.addListener('click', () => {
                        infoWindow.open(map, newMarker);
                    });
                }
            },
            (error) => {
                setIsLocating(false);
                let errorMessage = 'Unable to retrieve your location';

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable. Make sure location services are enabled.';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Location request timed out. Please try again.';
                        break;
                    default:
                        errorMessage = 'An unknown error occurred while getting your location.';
                }

                setLocationError(errorMessage);
                alert(errorMessage);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    };

    const removeUserMarker = () => {
        if (userMarker) {
            userMarker.setMap(null);
            if (userMarker.accuracyCircle) {
                userMarker.accuracyCircle.setMap(null);
            }
            setUserMarker(null);
            setUserLocation(null);
            setLocationError(null);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'maps', label: 'Maps', path: '/maps' },
        { id: 'favorites', label: 'Favorites', path: '/favorites' },
        { id: 'profile', label: 'Profile', path: '/profile' }
    ];

    const styles = {
        mapsPage: {
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f5f5f5',
            overflow: 'hidden'
        },
        header: {
            position: 'relative',
            zIndex: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        breadcrumb: {
            color: '#9ca3af',
            fontSize: '14px',
            fontWeight: '500'
        },
        mapContainer: {
            flex: 1,
            width: '100%',
            position: 'relative',
            zIndex: 10
        },
        mapElement: {
            width: '100%',
            height: '100%'
        },
        locationButton: {
            position: 'absolute',
            bottom: '100px',
            right: '16px',
            width: '56px',
            height: '56px',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: 'none',
            cursor: isLocating ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 30,
            transition: 'all 0.3s',
            opacity: isLocating ? 0.6 : 1,
            transform: isHoveringLocation && !isLocating ? 'scale(1.1)' : 'scale(1)'
        },
        locationButtonHover: {
            backgroundColor: '#f9fafb',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)'
        },
        removeButton: {
            position: 'absolute',
            bottom: '170px',
            right: '16px',
            width: '56px',
            height: '56px',
            backgroundColor: '#dc2626',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
            zIndex: 30,
            transition: 'all 0.3s',
            transform: isHoveringRemove ? 'scale(1.1)' : 'scale(1)'
        },
        removeButtonHover: {
            backgroundColor: '#b91c1c',
            boxShadow: '0 6px 16px rgba(220, 38, 38, 0.4)'
        },
        bottomNav: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '8px 16px 12px',
            zIndex: 40,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
        },
        navContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0'
        },
        navItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 12px',
            minWidth: '60px',
            transition: 'all 0.3s',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#6b7280'
        },
        navItemActive: {
            color: '#dc2626'
        },
        navItemHover: {
            backgroundColor: '#f9fafb'
        },
        statusBadge: {
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '13px',
            zIndex: 25,
            maxWidth: '80%',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 0.3s ease-in'
        },
        loadingContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
        },
        spinner: {
            width: '40px',
            height: '40px',
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #dc2626',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        },
        loadingText: {
            color: '#6b7280',
            fontSize: '14px',
            fontWeight: '500'
        }
    };

    return (
        <div style={styles.mapsPage}>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
                        to { opacity: 1; transform: translateX(-50%) translateY(0); }
                    }
                `}
            </style>
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <span style={styles.breadcrumb}>StreetBites</span>
                </div>
                <div style={styles.headerLeft}>
                    <span style={styles.breadcrumb}>Maps</span>
                </div>
            </div>

            <div style={styles.mapContainer}>
                {!isMapLoaded && (
                    <div style={styles.loadingContainer}>
                        <div style={styles.spinner}></div>
                        <p style={styles.loadingText}>Loading map...</p>
                    </div>
                )}
                <div ref={mapRef} style={styles.mapElement}></div>

                {locationError && isLocating && (
                    <div style={styles.statusBadge}>
                        {locationError}
                    </div>
                )}

                {userMarker && (
                    <button
                        style={{
                            ...styles.removeButton,
                            ...(isHoveringRemove ? styles.removeButtonHover : {})
                        }}
                        onClick={removeUserMarker}
                        onMouseEnter={() => setIsHoveringRemove(true)}
                        onMouseLeave={() => setIsHoveringRemove(false)}
                        title="Remove location pin"
                    >
                        <svg
                            style={{ width: '28px', height: '28px', color: 'white' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}

                <button
                    style={{
                        ...styles.locationButton,
                        ...(isHoveringLocation && !isLocating ? styles.locationButtonHover : {})
                    }}
                    onClick={getCurrentLocation}
                    onMouseEnter={() => setIsHoveringLocation(true)}
                    onMouseLeave={() => setIsHoveringLocation(false)}
                    title="Get current location"
                    disabled={isLocating}
                >
                    <svg
                        style={{
                            width: '28px',
                            height: '28px',
                            color: isLocating ? '#9ca3af' : '#374151'
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
            </div>

            <div style={styles.bottomNav}>
                <div style={styles.navContainer}>
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            style={{
                                ...styles.navItem,
                                ...(activeNav === item.id ? styles.navItemActive : {}),
                                ...(hoveredNav === item.id ? styles.navItemHover : {})
                            }}
                            onClick={() => setActiveNav(item.id)}
                            onMouseEnter={() => setHoveredNav(item.id)}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {item.id === 'home' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>}
                                {item.id === 'maps' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>}
                                {item.id === 'favorites' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>}
                                {item.id === 'profile' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>}
                            </svg>
                            <span style={{ fontSize: '11px', fontWeight: '500' }}>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MapsPage;