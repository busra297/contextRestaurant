import React, { useContext } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Context from '../context/store'
import MapView, { Marker } from 'react-native-maps';

const RestaurantMap = props => {

    const { state, dispatch } = useContext(Context)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                provider="google"
            >
                {
                    state.restaurantList.map((restaurants, index) => {
                        return (
                            <Marker
                                coordinate={{
                                    latitude: restaurants.lat,
                                    longitude: restaurants.lng
                                }}
                                tracksViewChanges={false}
                            />
                        )
                    })
                }
            </MapView>
        </SafeAreaView>
    )
}

export { RestaurantMap }