import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
<table className={css.container}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (
    <tr key={item.id}>
      <td className={css.text}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
)
}