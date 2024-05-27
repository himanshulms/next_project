import Badge from '@/app/components/Badge';
import './table.scss';
import ForwardIcon from '@/app/assets/images/svg/forwardIcon.svg'
import Image from 'next/image';
import Typography from '../Typography';

type TableProps = {
  className?: string; // Add className prop to allow passing custom classes
};

const Table = ({
  className,
  ...rest
}: TableProps) => {
  const classes = `${className || ""}`;
  return (
<div className={`overflow-x-auto ${classes}`}>
      <table className="table table-custom text-base-content text-sm">
        {/* head */}
        <thead className="bg-base-content opacity-60 text-secondary-content">
          <tr>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Category
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Web widht
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  GSM
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Baseboard
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Coating
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Requested qty
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Qty
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Status
              </Typography>
            </th>
            <th>
              <Typography
                  size="text-base"
                  weight="font-medium	"
              >
                  Date
              </Typography>
            </th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  Indobev
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  1000mm
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  152
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  Indobev
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  1 PE
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  4000kg
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  3000kg
              </Typography>
            </td>
            <td>
                <Badge
                    size="text-sm"
                    weight="font-normal"
                    variant="badge-success"
                    className="min-w-24"
                >
                    Approved
                </Badge>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  02/03/2024
              </Typography>
            </td>
            {/* <td >
              <div className='flex justify-end w-5 ml-auto'>
                <Image src={ForwardIcon} alt="forword" className='cursor-pointer'/>
              </div>
            </td> */}
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  Indobev Primum
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  1000mm
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  152
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  Indobev primum
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  1 PE
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  3000kg
              </Typography>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  2000kg
              </Typography>
            </td>
            <td>
                <Badge
                    size="text-sm"
                    weight="font-normal"
                    variant="badge-error"
                    className="min-w-24"
                >
                    Rejected
                </Badge>
            </td>
            <td>
              <Typography
                  size="text-sm"
                  weight="font-normal"
              >
                  02/03/2024
              </Typography>
            </td>
            {/* <td >
              <div className='flex justify-end w-5 ml-auto'>
                <Image src={ForwardIcon} alt="forword" className='cursor-pointer'/>
              </div>
            </td> */}
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
