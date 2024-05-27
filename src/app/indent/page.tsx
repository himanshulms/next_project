import Breadcrumbs from "@/app/components/Breadcrumbs";
import NoItems from "@/app/components/NoItems";
import TableBadge from "@/app/components/Table/TableBadge";

export default function Indent() {
    return (
      <>
        <Breadcrumbs 
          title="Indent"
          className="mb-6"
          btnPrimaryLabel="Create"
        />
        {/* <NoItems 
          title="No Item Added!"
          btnLabel="ADD NOW"
        /> */}
        
        {/* table start with badge */}

          <TableBadge />

        {/* table end */}
      </>
    );
  }
  