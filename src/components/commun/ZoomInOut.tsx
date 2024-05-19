import { MinusIcon } from "../ui/MinusIcon";
//import Button from "@mui/material/Button";
import { PlusIcon } from "../ui/PlusIcon";

const ZoomInOut = () => {
  return (
    <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-950 rounded-lg shadow p-3 space-y-2 z-10">
      <button className="rounded-full border-[#3d3d3d] border-[1px] mr-2">
        <MinusIcon className="w-5 h-5" />
        <span className="sr-only">Zoom out</span>
      </button>
      <button className="rounded-full border-[#3d3d3d] border-[1px]">
        <PlusIcon className="w-5 h-5" />
        <span className="sr-only">Zoom in</span>
      </button>
    </div>
  );
};

export default ZoomInOut;
