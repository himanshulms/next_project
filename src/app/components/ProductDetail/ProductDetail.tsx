import Image from "next/image";
import Typography from "@/app/components/Typography";
import Badge from "@/app/components/Badge";
import './ProductDetail.scss'

type BadgeColor = 'badge-success' | 'badge-error' | 'badge-warning';
type ProductDetailProps = {
    title?:string
    decs?:string
    po_no?:string
    barcode?:any
    badge?:string
    badgeColor?:BadgeColor
};

const ProductDetail = ({ title, decs, po_no, barcode, badge, badgeColor }: ProductDetailProps) => {

    return (
        <>

            {(
                title &&
                <div>

                    <Typography
                        tag="p"
                        size="text-sm"
                        weight="font-medium"
                        color="text-base-300"
                    >
                        {title}
                    </Typography>
                    {(
                        decs &&
                        <Typography
                            tag="p"
                            size="text-base"
                            weight="font-semibold"
                            color="text-base-content"
                            className="pt-1"
                        >
                            {decs}
                        </Typography>
                    )}
                    {(
                        po_no &&
                        <Typography
                            tag="p"
                            size="text-base"
                            weight="font-semibold"
                            color="text-primary"
                            className="pt-1"
                        >
                            {po_no}
                        </Typography>
                    )}
                    {(
                        badge && 
                        <Badge
                            size="text-sm"
                            weight="font-normal"
                            variant={badgeColor}
                            className="min-w-24"
                        >
                            {badge}
                        </Badge>
                    )}
                </div>
            )}

            {(
                barcode &&
                <div className="barcode flex justify-end">
                    <Image src={barcode} alt="barcode" />
                </div>
            )}

        </>
    );
};

export default ProductDetail;