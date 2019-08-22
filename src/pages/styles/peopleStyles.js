import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#292a38',
        },
        scroll: {
                flex: 1,
                alignSelf: 'stretch',
        },
        content: {
                flex: 1,
                padding: 30,
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
        },
        textButton: {
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold'
        },
        buttonContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
        },
        navButton: {
                flex: 1,
                margin: 5,
                alignSelf: 'stretch',
                backgroundColor: '#515470',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
        },
        navText: {
                color: 'white',
        },
        textPage: {
                color: 'white',
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
        }
});

export default styles;