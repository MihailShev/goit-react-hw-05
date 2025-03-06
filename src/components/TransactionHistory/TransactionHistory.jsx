import css from "./TransactionHistory.module.css";
export default TransactionHistory;

function TransactionHistory({ transactions }) {
  return (
    <table className={css.border_collapse}>
      <thead className={css.border}>
        <tr className={css.background}>
          <th className={css.border}>Type</th>
          <th className={css.border}>Amount</th>
          <th className={css.border}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.border}>{type}</td>
            <td className={css.border}>{amount}</td>
            <td className={css.border}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
