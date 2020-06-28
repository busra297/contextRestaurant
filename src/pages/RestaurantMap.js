import React, { useContext } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Context from '../context/store'

const RestaurantMap = props => {

    const { state, dispatch } = useContext(Context)

    return (
        <SafeAreaView>
            <View>
                <Text>RestaurantMap</Text>
            </View>
        </SafeAreaView>
    )
}

export { RestaurantMap }