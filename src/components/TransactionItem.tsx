import {Transaction} from "../interfaces/interfaces";

import '../index.css'

type TransactionItemProp = {
    transaction : Transaction
}

export const TransactionItem = ({transaction }: TransactionItemProp ) => {
    const { desc, amount, concept } = transaction;

    return (
    <tr>
        <td>
          { desc }
        </td>
        <td>
          {` $ ${(amount < 0 ) ? amount * -1 : amount }`}
        </td>
  
        <td>
           { (concept === 'income') ? 'Ingreso' : 'Gasto'}
         </td>
      </tr>
  
  )
}


