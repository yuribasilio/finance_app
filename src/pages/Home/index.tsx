import { StyleSheet, View, Text, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "150,00",
    date: "10/10/2020",
    type: 0, //saida
  },
  {
    id: 2,
    label: "PIX cliente X",
    value: "2500,00",
    date: "10/10/2020",
    type: 1, //entrada
  }
  ,
  {
    id: 3,
    label: "Salário",
    value: "7200,00",
    date: "10/10/2020",
    type: 1, //entrada
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Yuri Basilio" />
      <Balance balance="9.250,00" expense="390,00"/>

      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>
      
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  }, 
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
    

});
