import React, { useContext, useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Context from '../context/store'
import MapView, { Marker } from 'react-native-maps';
import Modal from 'react-native-modal';

const RestaurantMap = props => {
    const [modalFlag, setModalFlag] = useState(false)
    const [selectedRestaurant, setSelectedRestaurant] = useState({})
    const { state, dispatch } = useContext(Context)

    function selectRestaurant(res) {
        handleModal()
        setSelectedRestaurant(res)
    }

    const handleModal = () => setModalFlag(!modalFlag)

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
                                key={index}
                                coordinate={{
                                    latitude: restaurants.lat,
                                    longitude: restaurants.lng
                                }}
                                tracksViewChanges={false}
                                onPress={() => selectRestaurant(restaurants)}
                            />
                        )
                    })
                }
            </MapView>

            <Modal
                isVisible={modalFlag}
                onBackdropPress={handleModal}
                swipeDirection="down"
                onSwipeComplete={handleModal}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <SafeAreaView style={{ backgroundColor: 'white', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <View style={{ backgroundColor: 'white', padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>{selectedRestaurant.name}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                        <Text>{selectedRestaurant.area}</Text>
                    </View>
                </SafeAreaView>
            </Modal>

        </SafeAreaView>
    )
}

export { RestaurantMap }