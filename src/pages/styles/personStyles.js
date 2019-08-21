import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
                backgroundColor: '#292a38',
        },
        scroll:{
                flex: 1,
                backgroundColor: '#292a38',
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
                padding: 5,
        },
        textInfo: {
                color: 'white',
                textAlign: 'center'
        },
        linha: {
                borderColor: '#515470',
                borderWidth: 1,
                alignSelf: 'stretch',
        },
        mensagemVazio:{
                margin:5,
                color: 'white',
                fontSize: 15, 
        },
        containerActivity: {
                flex:1,
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#292a38',
                paddingTop: 40,
                justifyContent: 'flex-start',
                alignItems: 'center',
                
        },
        textActivity: {
                color: 'white',
        },
});

export default styles;