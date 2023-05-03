import { View, Text } from 'react-native';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {});


  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$177.95</Text>  
    </View>
  );
}

export default ExpensesSummary;