// [
//     { id: 1, description: "aaa", Amount: 10, category: "A" },
//     { id: 2, description: "bbb", Amount: 11, category: "A" },
//     { id: 3, description: "ccc", Amount: 12, category: "A" },
//     { id: 4, description: "ddd", Amount: 13, category: "A" },
//   ]

interface Expanse {
  id: number;
  description: string;
  Amount: number;
  category: string;
}

interface Props {
  expenses: Expanse[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length == 0) return null;
  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.Amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            ${expenses.reduce((acc, item) => item.Amount + acc, 0).toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
