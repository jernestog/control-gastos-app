import { useExpenseState } from "../store/expenseState"

import { TransactionItem } from "../components/TransactionItem";
import { Table, Button } from "react-bootstrap";

import '../index.css';

export const TransactionList = () => {
    const { transactions, cleanBalance } = useExpenseState();
  return (
   <>   
    <h4 className="subtitle">Historial</h4>
    <Table className="table-responsive-md ">
      <thead className="table-dark">
        <tr>
          <th>Concepto</th>
          <th>Monto</th>
          <th>Transacción</th>
        </tr>
      </thead>
       <tbody>
          {
              transactions.map( transaction => (
                  <TransactionItem 
                  key={transaction.id}
                  transaction={ transaction }
                  /> ))}
        </tbody>
    </Table>
        <Button className="mb-4 neutral"
                onClick={() => cleanBalance(0)} >
                Limpiar 
        </Button>
   </>
  )
}
