import { useEffect } from "react";
import { useExpenseState } from "../store/expenseState";
import {Container, Col, Row} from "react-bootstrap";

import { TransactionHeader } from "../components/TransactionHeader"; 
import { TransactionForm } from "../components/TransactionForm";
import { TransactionList } from "../components/TransactionList";
import { TransactionChart } from "../components/TransactionChart";
import '../index.css';

export const TransactionMain = () => {

  const { transactions } = useExpenseState()
  const { getBalance, getIncome, getExpense } = useExpenseState();

  useEffect(()=> {
      getBalance()
      getIncome()
      getExpense()
  },[])
  return (
    <Container className="p-2">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="p-3">
        <Col xs={18} md={18}>
         <TransactionHeader/>
        </Col>
      </Row>


      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row style = {{
        display : "flex",
        justifyContent : 'center',
       
      }}>
        <Col xs={18} md={5}>
          <TransactionForm/>
        </Col>
        <Col xs={18} md={7} >
          <TransactionChart/>
        </Col>
        <Col xs={18} md={7} >
            { (transactions.length > 0  ) ? <TransactionList/> : <h4 className="subtitle">Historial <br/>No hay transacciones</h4>}        
        </Col>
      </Row>
    </Container>
    
  )
}
