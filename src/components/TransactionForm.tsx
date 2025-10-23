import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap/";

import { InputsFieds  } from "../interfaces/interfaces"
import { useExpenseState } from "../store/expenseState";
import { InputErrorMessage } from "./InputErrorMessage";

import "../index.css";

export const TransactionForm = () => {

    const {register, formState : {errors}, handleSubmit} = useForm<InputsFieds>();
    const { addTransaction, getBalance,getIncome, getExpense}  = useExpenseState()

    const createTransaction = ({inputDesc, inputAmount, inputConcept} : InputsFieds) => {
        let amount = parseFloat( inputAmount )
        if (inputConcept === 'income' && amount < 0) {
            amount = amount * -1
            
        }else if(inputConcept === 'expense' && amount > 0) {
            amount = amount * -1
        }
      
        return {
            id : window.crypto.randomUUID(),
            desc: inputDesc,
            amount,
            concept : inputConcept
        }
    }

    const onSubmit = handleSubmit((data, ev)  => {
      const newTransaction = createTransaction(data);
      addTransaction( newTransaction );
      getBalance();
      getIncome();
      getExpense();
      ev?.target.reset();
    })

  return (
    
    <Form  onSubmit={onSubmit}  >
      <h4 className="subtitle">Añadir transacción</h4>
      <Form.Group>
        <Form.Label htmlFor="desc" className="txt-secondary">Concepto de la transacción:</Form.Label>
        <Form.Control type="text"
              autoComplete="off"
              className="m-1"
                {...register("inputDesc", {
                  required : true,
                  minLength : 4
                })} />
        { errors.inputDesc?.type === 'required' && <InputErrorMessage text="Descripción requerida"/> }
        { errors.inputDesc?.type === 'minLength' &&  <InputErrorMessage text="Descripción muy corta"/>}
        </Form.Group>

      <Form.Group>
      <Form.Label htmlFor="amount" className="txt-secondary">Monto de la transacción:</Form.Label>
      <Form.Control type="number"
             step="0.01"
             autoComplete="off"
             className="m-1"
              {...register("inputAmount", {
                required: true
              })} />
      { errors.inputAmount && <InputErrorMessage text="Monto requerido"/> }
      </Form.Group>

      <Form.Group>
      <p className="txt-secondary">Transacción: </p>
      <Form.Select defaultValue={""}
          className="m-1 w-50"
           {...register("inputConcept", {
             required : true
      })}>
          <option value="" disabled >Elige una ...</option>
          <option value="income">Ingreso</option>
          <option value="expense">Gasto</option>
      </Form.Select>
      { errors.inputConcept && <InputErrorMessage text="Transacción requerida"/>}
      </Form.Group>
      
        <Button type="submit" className="mt-4 mb-4 neutral">
           Guardar
        </Button> 
     
    </Form>
  )
}
