import ItemComponent from "./ItemComponent";
import Table from 'react-bootstrap/Table';


const TableComponent = (props) => {
  const { items } = props
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>เดือน / วัน / ปี</th>
            <th>เวลา</th>
            <th>หมอ</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((element) => {
            return <ItemComponent {...element} key={element.id} />
          })}
        </tbody>
      </Table>

    </div>
  );
}

export default TableComponent;