"use client"

import { useState } from 'react';
import Button from '@/app/components/Button';
import './modal.scss'
import CloseIcon from '@/app/assets/images/svg/closeIcon.svg'
import Image from 'next/image';
import Typography from '@/app/components/Typography';

type ModalProps = {
  id?: string;
  modalImage?: any;
  modalTitle?: string;
  modalText?: string;
  className?: string;
  btnPrimaryLabel?: string;
  btnSecondaryLabel?: string;
};

const Modal = ({ id, modalImage, modalTitle, modalText, btnPrimaryLabel, btnSecondaryLabel, className }: ModalProps) => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
      setShowModal(false);
    }

    return (
        <>

            {showModal && (
              <dialog id="my_modal_2" className="modal" open={showModal}>
                  <div className="modal-box rounded-none py-10">

                    {/* close button */}
                    <Button
                        size='btn-sm'
                        variant="btn-ghost"
                        className='hover:bg-base-100 absolute right-2 top-2'
                        iconPosition='left'
                        icon={CloseIcon}
                        onClick={closeModal}
                    >
                    </Button>

                    {/* modal data */}
                    {
                      modalImage && 
                      <div className='mb-4 flex justify-center'>
                        <Image src={modalImage} alt="icon"/>
                      </div>
                    }

                    {
                        modalTitle && 
                        <Typography
                          className="mb-1 w-full text-center"
                          size="text-xl"
                          weight="font-medium"
                          color='text-base-content'
                        >
                          {modalTitle}
                        </Typography>
                    }
                    
                    {
                      modalText && 
                      <Typography
                        className="mb-1 w-full text-center px-8"
                        size="text-base"
                        weight="font-normal"
                        color='text-base-content'
                      >
                        {modalText}
                      </Typography>
                    }

                    { btnPrimaryLabel && (
                    <div className='flex justify-center gap-4 mt-5'>

                      {/* if button secondary available */}
                      
                      {
                            btnSecondaryLabel && (<Button
                            variant="btn-secondary btn-sm"
                            className='min-w-32 px-0'
                        >
                            {btnSecondaryLabel}
                        </Button>
                      )}

                      <Button
                          variant="btn-primary btn-sm"
                          className='min-w-32 px-0'
                      >
                          {btnPrimaryLabel}
                      </Button>
                      
                    </div>
                    )}

                  </div>
              </dialog>
            )}
        </>
  );
};

export default Modal;