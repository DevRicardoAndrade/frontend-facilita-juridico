import "./DataGrid.css";
function DataGrid({ datatable, column }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {column.map((item, index) => (
              <ThItem key={index} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {datatable.length > 0 ? (
            datatable.map((item, index) => (
              <TrItem key={index} item={item} column={column} />
            ))
          ) : (
            <tr>
              <td colSpan={column.length}>Nenhum dado encontrado!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
const ThItem = ({ item }) => <th>{item.heading}</th>;
const TrItem = ({ item, column }) => {
  return (
    <tr id={item["id"]}>
      {column.map((columnItem, index) => {
        return (
          <td id={columnItem.value} key={index}>
            {item[`${columnItem.value}`]}
          </td>
        );
      })}
    </tr>
  );
};

export default DataGrid;
