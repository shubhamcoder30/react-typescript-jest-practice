import React from 'react';
import { Iface} from '../Interfaces';


interface Props {
  arr: Iface[];
}
const Tabledata = ({ arr }: Props) => {
  return (
    <div className="table-data">
      <table>
        <tbody>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Profile</th>
          </tr>
        </tbody>
        <tbody>
          {arr.map((data: Iface, key: number) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data.name}</td>
              <td>{data.profile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tabledata;
