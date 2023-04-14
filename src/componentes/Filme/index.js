import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.filme.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.titulo}>Título: {props.filme.titulo}</Text>
                <Text style={styles.atauqe}>Poder de Ataque: {props.filme.ataque}</Text>
                <Text style={styles.defesa}>Poder de Defesa: {props.filme.defesa}</Text> 
                <Text style={styles.especial}>Poder Especial: {props.filme.especial}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}