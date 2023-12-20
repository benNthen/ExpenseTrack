import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

// used to calculates and returns the total of the sum and expense amount
function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    // reduce() combines both sum & expense
    return sum + expense.amount
  }, 0) // second arguement - starting value, displays 0 rather than an 'undefined'

  return (
    // this is where periodName and expensesSum() w/2 dp are outputted
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
})
