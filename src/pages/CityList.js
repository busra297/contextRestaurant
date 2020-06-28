import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

import Context from '../context/store'
import styles from '../styles'
import { CityItem } from '../components'

const CityList = (props) => {
    const [list, setList] = useState([])
    const { state, dispatch } = useContext(Context)

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        let { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        setList(data.cities)
    }

    function selectCity(city) {
        dispatch({ type: "SET_SELECTED_CITY", city })
        props.navigation.navigate("Main")
    }

    const renderCities = ({ item }) => <CityItem cityName={item} onCitySelect={() => selectCity(item)} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <Text style={styles.pages.cityList.selectCityText}>Bir şehir seçiniz</Text>

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={renderCities}
                />

            </View>
        </SafeAreaView>
    )
}

export { CityList }