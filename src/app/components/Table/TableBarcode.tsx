// this table is used in inward add items it has barcode 

"use client"

import './table.scss';
import { useState } from 'react';
import Edit from '@/app/assets/images/svg/Edit.svg';
import Image from 'next/image';
import Typography from '@/app/components/Typography';
import AngleDown from '@/app/assets/images/svg/doubleAngle.svg';
import BarCode from '@/app/assets/images/barcode.png'
import ProductDetail from '../ProductDetail';


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
                                Item
                            </Typography>
                        </th>
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
                        <th className='w-14 '>
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
                                Paper Reel
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
                            <Typography
                                size="text-sm"
                                weight="font-normal"
                            >
                                1492kg
                            </Typography>
                        </td>
                        <td className='accordion-icon flex justify-between'>
                            <Image
                                src={Edit}
                                alt="edit"
                                className="cursor-pointer"
                            />
                            <Image
                                src={AngleDown}
                                alt="accordion-icon"
                                className={`${openRow == 'r1' ? 'show' : ''} cursor-pointer dropdown`}
                                onClick={() => toggleRow('r1')}
                            />
                        </td>
                    </tr>
                    <tr className={`accordion-collapse ${openRow !== 'r1' ? 'hidden' : ''}`} id="r1">
                        {/* colSpan should be dynamic it is number of above row's column */}
                        <td colSpan={9} className='pb-0'>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr >
                        <td>
                            <Typography
                                size="text-sm"
                                weight="font-normal"
                            >
                                Paper Reel
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
                            <Typography
                                size="text-sm"
                                weight="font-normal"
                            >
                                1492kg
                            </Typography>
                        </td>
                        <td className='accordion-icon flex justify-between'>
                            <Image
                                src={Edit}
                                alt="edit"
                                className="cursor-pointer"
                            />
                            <Image
                                src={AngleDown}
                                alt="accordion-icon"
                                className={`${openRow == 'r2' ? 'show' : ''} cursor-pointer dropdown`}
                                onClick={() => toggleRow('r2')}
                            />
                        </td>
                    </tr>
                    <tr className={`accordion-collapse ${openRow !== 'r2' ? 'hidden' : ''}`} id="r2">
                        {/* colSpan should be dynamic it is number of above row's column */}
                        <td colSpan={9} className='pb-0'>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 productDetails bg-neutral p-6 mb-4">
                                <ProductDetail
                                    title='ID'
                                    decs="PA374J82"
                                />
                                <ProductDetail
                                    title='PO No.'
                                    po_no="PO#001"
                                />
                                <ProductDetail
                                    title='Weight'
                                    decs="750kg"
                                />
                                <ProductDetail
                                    barcode={BarCode}
                                />
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default Table;
