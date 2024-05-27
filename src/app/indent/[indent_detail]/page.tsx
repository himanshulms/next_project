import Breadcrumbs from "@/app/components/Breadcrumbs";
import Button from "@/app/components/Button";
import ProductDetail from "@/app/components/ProductDetail";
import Table from "@/app/components/Table/TableBadge";
import Typography from "@/app/components/Typography";

export default function IndentDetail() {
    return (
      <>
        <Breadcrumbs 
          title="Indent Details"
          className="mb-4"
        />

        <div className="grid md:grid-cols-5 grid-cols-1 gap-4 productDetails bg-neutral p-6 mt-6">
          <ProductDetail 
            title='ID'
            decs="8493986"
          />
          <ProductDetail 
            title='Date'
            decs="01/04/2024"
          />
          <ProductDetail 
            title='Status'
            badge="Partially Approved"
            badgeColor="badge-success"
          />
          <ProductDetail 
            title='PO number'
            po_no="OD256-9424"
          />
          
        </div>

        {/* table start with badge */}

        <Typography
            tag="p"
            className="pt-6 pb-2"
            size="text-xl"
            weight="font-medium"
            color="text-base-content"
        >
            List
        </Typography>
        
        <Table />

        {/* table end */}


        <Typography
            tag="p"
            className="pt-6"
            size="text-base"
            weight="font-medium"
            color="text-base-300"
        >
            Note
        </Typography>
        <Typography
            tag="p"
            className=""
            size="text-sm"
            weight="font-normal"
            color="text-base-content"
        >
            Lorem ipsum dolor sit amet consectetur. Mattis sagittis volutpat sed maecenas eget. Eleifend porta at egestas habitasse. Nibh platea non duis enim faucibus neque leo libero mauris. Ultrices quis nisi mi urna arcu. Amet ut dolor adipiscing iaculis ut vitae. Eget non ac tellus ornare.
        </Typography>
        <Typography
            tag="p"
            className=""
            size="text-sm"
            weight="font-normal"
            color="text-base-content"
        >
            In faucibus ultricies iaculis scelerisque cursus ipsum faucibus adipiscing magna. Convallis ac convallis ornare mi eget malesuada pellentesque cras turpis. Cras.
        </Typography>

        {/* button */}
        <div className="flex gap-4 mt-9">

            <Button
                variant="btn-outline"
                className="sm:min-w-36 min-w-28"
            >
                Back
            </Button>
            
        </div>
      </>
    );
  }
  