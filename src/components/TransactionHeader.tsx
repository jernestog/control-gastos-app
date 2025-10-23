
import { useExpenseState } from "../store/expenseState";
import '../index.css';

export const TransactionHeader = () => {
    const { balance , income, expense} = useExpenseState();
  return (
    <>
        <div className="d-flex flex-wrap align-items-end px-4 neutral rounded">
          <img src={`${import.meta.env.BASE_URL}wallet.png`} alt="icon wallet for transaction header"
          className="w-25 w-md-40" style={{maxWidth : 100}}/>
          <h2 className="mx-2 text-light title">Tu Balance:<strong><br />
          $ { balance }</strong></h2>
        </div>

        <div className="d-flex flex-wrap justify-content-around m-2">
          <div className="d-flex">
              <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="24" height="24" stroke="none" fill="#000000" opacity="0" /><g transform="matrix(1.11 0 0 1.11 12 12)">
              <path style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: 0, strokeLinejoin: "miter", strokeMiterlimit: 4, fill: "rgba(0, 134, 40, 1)", fillRule: "nonzero", opacity: 1}} transform="translate(-12, -12)" d="M 12 7 L 3 13 L 3 17 L 12 11 L 21 17 L 21 13 L 12 7 z" strokeLinecap="round" /></g></svg>
              <h3 className="title">Ingreso : $ { income } </h3>
          </div>
          <div className="d-flex">
              <svg id="Chevron_Down_48" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" stroke="none" fill="#000000" opacity="0" /><g transform="matrix(1.11 0 0 1.11 12 12)">
              <path d="M 3 8 L 3 12 L 12 18 L 21 12 L 21 8 L 12 14 L 3 8 z" transform="translate(-12, -13)" fill="rgba(194, 28, 28, 1)" fillRule="nonzero" opacity="1" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeDashoffset="0" strokeLinejoin="miter" strokeMiterlimit="4" /></g></svg>
              <h3 className="title">Gasto : $ { expense }</h3>
         </div>
        </div>
        <hr />
    </>
  )
}
