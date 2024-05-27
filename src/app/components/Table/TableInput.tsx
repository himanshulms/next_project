// this table is used in inward add items it has accordion with input

"use client"
import './table.scss';
import Image from 'next/image';
import Typography from '@/app/components/Typography';
import Input from "@/app/components/Input";
import AngleDown from '@/app/assets/images/svg/doubleAngle.svg';
import { useState } from 'react';
import Button from '@/app/components/Button';
type TableProps = {
  className?: string; // Add className prop to allow passing custom classes
};

const Table = ({
  className,
}: TableProps) => {
  const classes = `${className || ""}`;
  const [openRow, setOpenRow] = useState<string | null>(null);
  const toggleRow = (rowId: string) => {
    setOpenRow(openRow === rowId ? null : rowId);
  };
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
                Paper Board
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
                WebWidth
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
                PO No.
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
                Inward qty
              </Typography>
            </th>
            <th className='w-14 opacity-0'>
              <Typography
                size="text-base"
                weight="font-medium	"
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {/* row 1 */}
          <tr >
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
                1PE
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
              >
                775mm
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
              >
                205
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-semibold"
                color='text-primary'
              >
                OD256-9424
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
              >
                1500kg
              </Typography>
            </td>
            <td>
              <Input
                id="qty"
                type="text"
                inputSize='input-xs'
                className='w-36'
              />
            </td>
            <td className='accordion-icon w-12  text-right'>
              <Image
                src={AngleDown}
                alt="accordion-icon"
                className={`${openRow == 'r1' ? 'show' : ''} cursor-pointer ml-auto dropdown`}
                onClick={() => toggleRow('r1')}
              />
            </td>
          </tr>
          <tr className={`accordion-collapse ${openRow !== 'r1' ? 'hidden' : ''}`} id="r1">
            {/* colSpan should be dynamic it is number of above row's column */}
            <td colSpan={8} className='py-0 bg-neutral'>
              <table className='w-full'>
                <tbody>
                  <tr >
                    <td className='w-12	ps-0'>
                      <Typography
                        size="text-sm"
                        weight="font-normal"
                      >
                        1.
                      </Typography>
                    </td>
                    <td className='w-60	ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Sr No
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="12344"
                        />
                      </div>
                    </td>
                    <td className='w-60 ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Weight
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="750 Kg"
                        />
                      </div>
                    </td>
                    <td className='text-end pe-0 hidden'>
                      <Button
                        variant="btn-primary"
                        size='btn-sm'
                        className="sm:min-w-36 min-w-28"
                      >
                        add
                      </Button>
                    </td>
                  </tr>
                  <tr >
                    <td className='w-12	ps-0'>
                      <Typography
                        size="text-sm"
                        weight="font-normal"
                      >
                        2.
                      </Typography>
                    </td>
                    <td className='w-60	ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Sr No
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="12344"
                        />
                      </div>
                    </td>
                    <td className='w-60 ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Weight
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="750 Kg"
                        />
                      </div>
                    </td>
                    <td className='text-end pe-0'>
                      <Button
                        variant="btn-primary"
                        size='btn-sm'
                        className="sm:min-w-36 min-w-28"
                      >
                        add
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
                className='text-nowrap'
              >
                Indobev
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
                className='text-nowrap'
              >
                1PE
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
                className='text-nowrap'
              >
                775mm
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
                className='text-nowrap'
              >
                205
              </Typography>
            </td>
            <td>
            <Typography
                size="text-sm"
                weight="font-semibold"
                color='text-primary'
              >
                OD256-9424
              </Typography>
            </td>
            <td>
              <Typography
                size="text-sm"
                weight="font-normal"
              >
                1500kg
              </Typography>
            </td>
            <td>
              <Input
                id="qty"
                type="text"
                inputSize='input-xs'
                className='w-36'
              />
            </td>
            <td className='w-12 accordion-icon  text-right'>
              <Image
                src={AngleDown}
                alt="accordion-icon"
                className={`${openRow == 'r2' ? 'show' : ''} cursor-pointer ml-auto dropdown`}
                onClick={() => toggleRow('r2')}
              />
            </td>
          </tr>
          <tr className={`accordion-collapse ${openRow !== 'r2' ? 'hidden' : ''}`} id="r2">
            <td colSpan={8} className='py-0 bg-bg-neutral'>
              <table className='w-full'>
                <tbody>
                  <tr >
                    <td className='w-12	ps-0'>
                      <Typography
                        size="text-sm"
                        weight="font-normal"
                      >
                        1.
                      </Typography>
                    </td>
                    <td className='w-60	ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Sr No
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="12344"
                        />
                      </div>
                    </td>
                    <td className='w-60 ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Weight
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="750 Kg"
                        />
                      </div>
                    </td>
                    <td className='text-end pe-0 hidden'>
                      <Button
                        variant="btn-primary"
                        size='btn-sm'
                        className="sm:min-w-36 min-w-28"
                      >
                        add
                      </Button>
                    </td>
                  </tr>
                  <tr >
                    <td className='w-12	ps-0'>
                      <Typography
                        size="text-sm"
                        weight="font-normal"
                      >
                        2.
                      </Typography>
                    </td>
                    <td className='w-60	ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Sr No
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder="12344"
                        />
                      </div>
                    </td>
                    <td className='w-60 ps-0'>
                      <div className='flex gap-4 items-center'>
                        <Typography
                          size="text-sm"
                          weight="font-normal"
                          color='text-base-300'
                        >
                          Weight
                        </Typography>
                        <Input
                          id="qty"
                          type="text"
                          inputSize='input-xs'
                          className='w-36'
                          placeholder='750 Kg'
                        />
                      </div>
                    </td>
                    <td className='text-end pe-0'>
                      <Button
                        variant="btn-primary"
                        size='btn-sm'
                        className="sm:min-w-36 min-w-28"
                      >
                        add
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Table;
