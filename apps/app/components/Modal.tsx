import { Dialog, Transition } from "@headlessui/react";
import React, { useCallback } from "react";
import { Fragment, useImperativeHandle, useRef, useState } from "react";

interface Props {
  title?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Modal = ({ onClose, title, children, icon, open }: Props) => {
  const titleRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  if (!open) return null;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        initialFocus={titleRef}
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={open}
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full ">
              <div>
                {icon && (
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                    {icon}
                  </div>
                )}

                <div>
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="pb-1 text-lg font-medium leading-6 text-center text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  <div ref={titleRef}>{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
