import { StyleSheet } from 'react-native';
import { white } from 'ansi-colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292a38',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    },
    type: {
        fontSize: 15,
        color: 'white',
        margin: 10,
    },
    name: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#515470',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 5,
        margin: 30,
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});

export default styles;