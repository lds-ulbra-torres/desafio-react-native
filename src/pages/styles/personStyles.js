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
        },
        button: {
                flex: 1,
                height: 50,
                minWidth: 80,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: '#515470',
                margin: 5,
        },
        infoButton: {
                flex: 1,
                flexWrap: 'wrap',
                alignSelf: 'stretch',
                padding: 5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
        },
        textButton: {
                color: 'white'
        },
        mensagemVazio:{
                margin:5,
                color: 'white',
                fontSize: 15, 
        }
});

export default styles;