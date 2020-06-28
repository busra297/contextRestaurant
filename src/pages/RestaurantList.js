import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'

import Context from '../context/store'
import { RestaurantItem } from '../components'
import styles from '../styles'

const RestaurantList = props => {
    const { state, dispatch } = useContext(Context)
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        let response = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + state.selectedCity)
        setRestaurants(response.data.restaurants)
    }

    const renderRestaurants = ({ item }) => <RestaurantItem restaurantData={item} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.pages.restaurantList.cityContainer}>
                    <Text style={styles.pages.restaurantList.cityText}>{state.selectedCity} Restoranları</Text>
                </View>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={restaurants}
                    renderItem={renderRestaurants}
                    ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />}
                />
            </View>
        </SafeAreaView>
    )
}

export { RestaurantList }