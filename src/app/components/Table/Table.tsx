import './table.scss';

type TableProps = {
  className?: string; // Add className prop to allow passing custom classes
};

const Table = ({
  className,
  ...rest
}: TableProps) => {
  const classes = `${className || ""}`;
  return (
    <div className="overflow-x-auto">
      <table className="table table-custom text-base-content  text-sm">
        {/* head */}
        <thead className="bg-base-content opacity-60 text-secondary-content">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
