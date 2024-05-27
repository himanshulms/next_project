"use client"

import Breadcrumbs from "@/app/components/Breadcrumbs";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Select from "@/app/components/Input/Select";
import Textarea from "@/app/components/Input/Textarea";
import Modal from "@/app/components/Modal";
import Success from '@/app/assets/images/svg/success.svg'
import { useState } from "react";

export default function IndentForm() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  return (
    <>
      <Breadcrumbs
        title="Indent Form"
        className="mb-6"
      />

      <div className="grid grid-cols-6 gap-4">
        <div className="lg:col-span-5 col-span-6">

          {/* form start */}
          <div className="formWrapper">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <Select
                label="Select Category"
                className="w-full"
              />
              <Input
                id="baseboard"
                type="text"
                label="Base board"
                placeholder="Indobev"
                className="w-full"
              />
              <Input
                id="gsm"
                type="text"
                label="GSM"
                placeholder="152"
                className="w-full"
              />
              <Input
                id="webwidth"
                type="text"
                label="Web Widht"
                placeholder="1000mm"
                className="w-full"
              />
              <Input
                id="weight"
                type="text"
                label="Weight"
                placeholder="3,000kg"
                className="w-full"
              />
              <Input
                id="coating"
                type="text"
                label="Coating type"
                placeholder="1 PE"
                className="w-full"
              />
              <Input
                id="reqby"
                type="text"
                label="Required by"
                placeholder="TIC"
                className="w-full"
              />
            </div>

            <Button
              variant="btn-outline"
              className='sm:min-w-36 min-w-28 px-0 mt-8'
              size='btn-sm'
            >
              DELETE
            </Button>
          </div>

          {/* form end */}

          {/* form two start when add more */}
          <div className="divider my-9"></div>

          <div className="formWrapper">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <Select
                label="Select Category"
                className="w-full"
              />
              <Input
                id="baseboard"
                type="text"
                label="Base board"
                placeholder="Indobev"
                className="w-full"
              />
              <Input
                id="gsm"
                type="text"
                label="GSM"
                placeholder="152"
                className="w-full"
              />
              <Input
                id="webwidth"
                type="text"
                label="Web Widht"
                placeholder="1000mm"
                className="w-full"
              />
              <Input
                id="weight"
                type="text"
                label="Weight"
                placeholder="3,000kg"
                className="w-full"
              />
              <Input
                id="coating"
                type="text"
                label="Coating type"
                placeholder="1 PE"
                className="w-full"
              />
              <Input
                id="reqby"
                type="text"
                label="Required by"
                placeholder="TIC"
                className="w-full"
              />
            </div>

            <Button
              variant="btn-secondary"
              className='sm:min-w-36 min-w-28 px-0 my-8'
              size='btn-sm'
            >
              ADD MORE
            </Button>
          </div>

          {/* form two end */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
            <Input
              id="date"
              type="date"
              label="Required by Date"
              placeholder="02/03/2024"
              className="mb-4 w-full"
            />
          </div>

          <Textarea
            id="textarea"
            label="Add Note"
            className="w-full"
          />

          <div className="flex gap-4 mt-9">

            <Button
              variant="btn-outline"
              className="sm:min-w-36 min-w-28"
            >
              CANCEL
            </Button>

            <Button
              variant="btn-primary"
              className="sm:min-w-36 min-w-28 "
              onClick={openModal}
            >
              SUBMIT
            </Button>


          </div>

        </div>


        {/* column 2  */}
        <div />
      </div>


      {/* success modal */}
      {
        showModal &&
        <Modal
          modalImage={Success}
          modalTitle={`Indent created successfully!`}
          btnPrimaryLabel="ok"
        />
      }
    </>
  );
}
