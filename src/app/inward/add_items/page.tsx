"use client"

import Breadcrumbs from "@/app/components/Breadcrumbs";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Select from "@/app/components/Input/Select";
import Modal from "@/app/components/Modal";
import ProductDetail from "@/app/components/ProductDetail";
import Table from "@/app/components/Table/TableInput";
import Typography from "@/app/components/Typography";
import { useState } from "react";
import SuccessIcon from '@/app/assets/images/svg/success.svg'
export default function AddItems() {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <Breadcrumbs
        title="Add Items"
        className="mb-4"
      />

      <div className="grid grid-cols-5 gap-4">
        <div className="lg:col-span-5 col-span-6">

          {/* form start */}
          <div className="formWrapper">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
              <Input
                id="name"
                type="text"
                label="Select Vendor"
                className="w-full"
              />
              <Select
                label="PO No."
                className="w-full"
              />
              <Input
                id="name"
                type="text"
                label="Reference No."
                placeholder="1000mm"
                className="w-full"
              />
              <Input
                id="name"
                type="text"
                label="Supp. invoice number"
                placeholder="565656"
                className="w-full"
              />
            </div>

          </div>

          {/* form end */}

        </div>
      </div>

      <div className="grid md:grid-cols-7 grid-cols-1 gap-4 productDetails bg-light-blue p-6 mt-6">
        <ProductDetail
          title='Invoice Date'
          decs="05/04/2024"
        />
        <ProductDetail
          title='Received Date'
          decs="10/04/2024"
        />
        <ProductDetail
          title='Created Date'
          decs="01/04/2024"
        />
        <ProductDetail
          title='PO Raised Date'
          decs="02/04/2024"
        />
        <ProductDetail
          title='Vendor'
          decs="Hansal"
        />
        <ProductDetail
          title='Total qty'
          decs="22"
        />
        <ProductDetail
          title='PO No.'
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
        Paper Reel
      </Typography>


      <Table />

      {/* table end */}

      {/* table start with badge */}

      <Typography
        tag="p"
        className="pt-6 pb-2"
        size="text-xl"
        weight="font-medium"
        color="text-base-content"
      >
        Coorgated Box
      </Typography>

      <Table />

      {/* table end */}

      <div className="flex gap-4 mt-9">

        <Button
          variant="btn-outline"
          className="sm:min-w-36 min-w-28"
        >
          CANCEL
        </Button>

        <Button
          variant="btn-primary"
          className="sm:min-w-36 min-w-28"
          onClick={openModal}
        >
          add
        </Button>

      </div>


      {/* update modal */}

      {
        showModal &&
        <Modal
          modalImage={SuccessIcon}
          modalTitle="Your PO items added successfully!"
          btnPrimaryLabel="ok"
          className="max-w-428"
        />
      }

    </>
  );
}
