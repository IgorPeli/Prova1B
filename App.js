import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Filme from './src/componentes/Filme';

export default function App() {

  const filmes = [
    {
      titulo: 'Dragão',
      ataque: '20 ',
      defesa: '15',
      especial: 'Bola de Fogo',
      imgUrl: "https://img.quizur.com/f/img6108547d1d0910.01091389.jpg?lastEdited=1627935876"
    },
    {
      titulo: 'Orc',
      ataque: '4 ',
      defesa: '6',
      especial: 'Regeneração',
      imgUrl: "http://t3.gstathttps://ae01.alicdn.com/kf/HTB1m.60PVXXXXbGXXXXq6xXFXXXo/X-116-orcs-comando-orgrim.jpg_Q90.jpg_.webpic.com/licensed-image?q=tbn:ANd9GcRqrKJZDdztbandY01Awn8oJQmk1EPRugfnpn3FfgKZ7iwO5t0lyAPYN2zjz2TOkzKr"
    },
    {
      titulo: 'Bruxo',
      ataque: '15 ',
      defesa: '10',
      especial: 'Magia',
      imgUrl: "https://3.bp.blogspot.com/_36x37e5S95A/S-Hcs8BYUgI/AAAAAAAAAbg/v03NVswVY0Q/s1600/magical-merlin-sundara-fawn.jpg"
    } 
   
  ]

  return (
    <View style={styles.container}>
      {filmes.map(f => <Filme filme={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});