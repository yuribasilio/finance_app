import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {MotiText, MotiView} from 'moti'

export interface BalanceProps {
  balance: String,
  expense: String,
}

export default function Balance(props: BalanceProps) {
  
  const { balance, expense } = props;

  return (
    <MotiView 
      style={[styles.container, styles.shadowProp]}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 200,
        delay: 600,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{expense}</Text>
        </View>
      </View>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  itemTitle: {
    color: '#aeaeae',
    fontSize: 20,
    fontWeight: 'bold',
  },
  currencySymbol: {
    color: '#aeaeae',
    fontSize: 12,
    fontWeight: 'bold',
  },
  balance: {
    color: '#149600',
    fontSize: 18,
    fontWeight: 'bold',
  },
  expenses: {
    color: '#cb0e0e',
    fontSize: 18,
    fontWeight: 'bold',
  },

})