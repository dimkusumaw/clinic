import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function DeleteModal(props) {
  return (
    <Fragment>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.onClose} id={props.index}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 text-center"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base text-gray-500 text-center font-medium">
                      This process cannot be undone
                    </p>
                  </div>

                  <div className="flex flex-row justify-center mt-4">
                    <button
                      type="button"
                      className="p-2 w-20 m-2 bg-gray-200 hover:bg-gray-500 text-white active:bg-gray-600/30 rounded text-sm font-semibold uppercase"
                      onClick={props.onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="p-2 w-20 m-2 bg-pink-200 hover:bg-pink-500 text-white active:bg-pink-600/30 rounded text-sm font-semibold uppercase"
                      onClick={props.onConfirm}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}

export default DeleteModal;
