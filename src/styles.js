import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get("window")

const styles = {
    components: {
        cityItem: StyleSheet.create({
            container: {
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            text: {
                fontSize: 20,
            }
        }),
        restaurantItem: StyleSheet.create({
            container: {
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            name: {
                fontSize: 20,
            }
        })
    },
    pages: {
        cityList: StyleSheet.create({
            selectCityText:
            {
                fontSize: 25,
                margin: 10,
                fontWeight: 'bold'
            }
        }),
        restaurantList: StyleSheet.create({
            cityContainer: {
                padding: 10,
                borderBottomWidth: 1,
                borderColor: '#bdbdbd'
            },
            cityText: {
                fontWeight: 'bold',
                fontSize: 25
            },
        })

    }
}

export default styles