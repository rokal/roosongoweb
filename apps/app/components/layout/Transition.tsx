import React, { ReactNode, Fragment } from "react";
import { Transition as HeadlessTransition } from "@headlessui/react";

interface IProps {
  show: boolean;
  children: ReactNode;
  as?: any;
}

export function Transition({ show, children, as }: IProps) {
  return (
    <HeadlessTransition
      show={show}
      as={as || Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </HeadlessTransition>
  );
}
