import { Label } from "./";

export const Loading = () => {
  return (
    <div className="fixed z-[1000] inset-0 flex items-center justify-center select-none">
      <div className="p-4 flex flex-col items-center justify-center bg-gray-400 rounded w-48">
        <img src="./Loading.svg" alt="Loading" className="w-16" />
        <Label className="font-bold">Cargando</Label>
      </div>
    </div>
  );
};
