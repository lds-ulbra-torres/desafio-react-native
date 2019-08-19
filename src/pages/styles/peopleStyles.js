import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
                backgroundColor: '#292a38',
        },
        button: {
                height: 50,
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderColor: '#515470',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                margin: 5,
        },
        textButton: {
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold'
        },
        containerName: {
                padding: 10,
        },
        card: {
                borderWidth: 4,
                borderColor: '#515470',
                borderRadius: 10,
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
                
        },
        name: {
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white'
        },
        info: {
                padding: 10,
        },
        textInfo: {
                color: 'white',
                fontSize: 15,
        },
        linha: {
                borderColor: '#515470',
                borderWidth: 1,
                alignSelf: 'stretch',
        }
});

export default styles;