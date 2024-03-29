import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { FaUserTie } from "react-icons/fa";

import PropertyContact from './Contact'

interface Props {
  show: boolean;
  contacts: any[];
  hide: () => void;
}
export default function ContactModal({ show, contacts, hide }: Props) {
  const titleRef = useRef(null);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        initialFocus={titleRef}
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={show}
        onClose={hide}
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
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <FaUserTie
                    className="w-12 h-12 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Contact du logement
                  </Dialog.Title>
                  <div ref={titleRef}>
                    {contacts?.map((propertyContact) => {
                      return (
                        <PropertyContact
                          key={`property-contact-${propertyContact.id}`}
                          name={propertyContact.fullname}
                          phoneNumber={propertyContact.phoneNumber}
                          email={propertyContact.email}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
