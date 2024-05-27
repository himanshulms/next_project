import Breadcrumbs from "@/app/components/Breadcrumbs";
import NoItems from "@/app/components/NoItems";
import Table from "@/app/components/Table/TableBarcode";

export default function Inward() {
    return (
      <>
        <Breadcrumbs
            title="Inward"
            className="mb-6"
            btnPrimaryLabel="ADD"
            btnSecondaryLabel="HISTORY"
        />
        {/* <NoItems 
          title="No Item Added!"
          btnLabel="ADD NOW"
        /> */}

        <Table  />

      </>
    );
  }
  