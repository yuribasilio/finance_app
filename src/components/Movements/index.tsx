import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import {MotiText, MotiView, AnimatePresence} from 'moti'

export interface MovementsProps {
  data: {
    id: number,
    label: string,
    value: string,
    date: string,
    type: number,
  }
}

export default function Movements(props: MovementsProps) {
 
  const { data } = props;

  const [showValue, setShowValue] = React.useState(false);

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText 
              style={ data.type === 0 ? styles.expenses : styles.value }
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: 'spring',
              }}
            >
              {data.type === 0 ? `R$ -${data.value}` : `R$ ${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <MotiView 
              style={styles.skeleton}
              from={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            ></MotiView>
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#aeaeae',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#aeaeae',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#149600",
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 16,
    color: "#cb0e0e",
    fontWeight: 'bold',
  },
  skeleton: {
    width: 80,
    height: 10,
    marginTop: 6,
    backgroundColor: '#d4d4d4',
    borderRadius: 5,
  }
})