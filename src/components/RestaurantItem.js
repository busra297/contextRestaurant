import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const RestaurantItem = props => {
    return (
        <TouchableOpacity style={styles.components.restaurantItem.container}>
            <Text style={styles.components.restaurantItem.name}>{props.restaurantData.name}</Text>
        </TouchableOpacity>
    )
}

export { RestaurantItem }

// address: "29008 Agoura Road"
// area: "Los Angeles / Orange County"
// city: "Agoura Hills"
// country: "US"
// id: 14575
// image_url: "https://www.opentable.com/img/restimages/14575.jpg"
// lat: 34.143447
// lng: -118.756444
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=14575"
// name: "Padri Restaurant"
// phone: "8188653700"
// postal_code: "91301"
// price: 2
// reserve_url: "http://www.opentable.com/single.aspx?rid=14575"
// state: "CA"