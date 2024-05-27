import Breadcrumbs from "@/app/components/Breadcrumbs";
import NoItems from "@/app/components/NoItems";
import Pagination from "@/app/components/Pagination/Pagination";
import Table from "@/app/components/Table/TableBarcode";

export default function History() {
    return (
      <>
        <Breadcrumbs
            title="History"
            className="mb-6"
            btnPrimaryLabel="ADD"
            btnSecondaryLabel="HISTORY"
        />
        {/* <NoItems 
          title="No Item Added!"
          btnLabel="ADD NOW"
        /> */}

        <Table  />
        <Pagination />

      </>
    );
  }
  