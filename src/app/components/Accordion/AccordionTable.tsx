import Image from 'next/image';
import Typography from '../Typography';
import './accordion.scss'
import Edit from '@/app/assets/images/svg/Edit.svg'
type AccordionProps = {
    id: string;
    className?: string;
    title?: string;
    decs?: string;
};

const Accordion = ({ id, className, title, decs, ...rest }: AccordionProps) => {
    const classes = `${className || ''}`;
    return (
        <>
            <table className={` ${classes} accordionBox accordionTable collapse collapse-arrow overflow-visible rounded-none border border-neutral-content`} {...rest}>
                <input type="radio" name={id} />
                <tr className="collapse-title text-base font-medium text-base-200 bg-base-100 pt-5 ">
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <Typography
                                        size="text-base"
                                        weight="font-medium	"
                                    >
                                        Paper Reel
                                    </Typography>
                                </td>
                                <td>
                                    <Typography
                                        size="text-base"
                                        weight="font-medium	"
                                    >
                                        205mm-205-FiloBev-1P
                                    </Typography>
                                </td>
                                <td>
                                    <Typography
                                        size="text-base"
                                        weight="font-medium	"
                                    >
                                        16/04/2024
                                    </Typography>
                                </td>
                                <td>
                                    <Typography
                                        size="text-base"
                                        weight="font-medium	"
                                    >
                                        3000kg
                                    </Typography>
                                </td>
                                <td>
                                    <Typography
                                        size="text-base"
                                        weight="font-medium	"
                                    >
                                        Action
                                    </Typography>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr className="collapse-content bg-neutral border-neutral-content border-t-[1px]">
                    <td><p>{decs}</p></td>
                </tr>
            </table>
        </>
    );
};

export default Accordion;