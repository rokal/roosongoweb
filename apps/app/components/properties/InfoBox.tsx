import { ReactNode } from "react";
import classNames from "classnames";

type BgColor =
  | "bg-pink-600"
  | "bg-purple-600"
  | "bg-yellow-500"
  | "bg-green-500";

export interface InfoBoxProps {
  icon?: ReactNode;
  bgColor: BgColor;
  label: string;
  value: string;
}

const InfoBox = ({ icon, bgColor, label, value }: InfoBoxProps) => {
  return (
    <div className="flex col-span-1 rounded-md shadow-sm">
      <div
        className={classNames(
          bgColor,
          "flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-l-md"
        )}
      >
        {icon}
      </div>
      <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <span className="font-medium text-gray-900 hover:text-gray-600">
            {label}
          </span>
          <p className="text-base text-gray-700">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
