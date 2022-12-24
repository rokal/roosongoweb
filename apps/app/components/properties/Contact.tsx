import { forwardRef } from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

interface Props {
  name: string;
  phoneNumber: string;
  email?: string;
}

function PropertyContact({ name, phoneNumber, email }: Props, ref: any) {
  return (
    <div className="sm:flex p-12 sm:justify-center">
      <div className="text-center">
        <h4 className="text-center text-lg font-bold">{name}</h4>
        <div className="flex" ref={ref}>
          <FaPhoneAlt />
          <span className="px-2">{phoneNumber}</span>
        </div>
        {email && (
          <div className="flex">
            <FaRegEnvelope />
            <span className="px-2">{email}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default forwardRef(PropertyContact);
