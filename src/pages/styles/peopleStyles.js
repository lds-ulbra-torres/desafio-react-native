import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#292a38',
        },
        content: {
                flex: 1,
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
        },
        title: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                marginBottom: 30,
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
                marginHorizontal: 30,
        },
        textButton: {
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold'
        },
        containerActivity: {
                flex:1,
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#292a38',
                justifyContent: 'center',
                alignItems: 'center',
                
        },
        textActivity: {
                color: 'white',
        },
        flatList: {
            alignSelf: 'stretch',
        },
        loadFooter: {
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
        },
        textFooter: {
                color: 'white',
                textAlign: 'center'
        }
});

export default styles;