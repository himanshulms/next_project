"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";
import Modal from "@/app/components/Modal";
import SuccessIcon from '@/app/assets/images/svg/success.svg'
import { useState } from "react";

export default function Reset() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <Typography 
                tag="h2"
                size='text-3xl'
                weight='font-semibold'
                color='text-base-content'
                className='block text-left'
            >
                Reset password
            </Typography>
            <Typography 
                tag="h4"
                size='text-base'
                weight='font-normal'
                color='text-neutral-content'
                className='block text-left pt-1 mb-4'
            >
                Create your new password
            </Typography>
            <Input 
                type='password'
                id='new_pass'
                label='New password'
                className='mb-4 w-full'
            />
            <Input 
                type='password'
                id='con_pass'
                label='Confirm password'
                className='w-full'
            />
            
            <Button
                variant="btn-primary"
                className='mt-10 px-7'
                onClick={openModal}
            >
                update
            </Button>
           
            {/* update modal */}

            {
                showModal && 
                <Modal 
                    modalImage = {SuccessIcon}
                    modalTitle="Password update"
                    modalText = {`Your password has been update successfully`}
                    btnPrimaryLabel = "ok"  
                    className="max-w-428"
                />
            }

        </>
  );
};