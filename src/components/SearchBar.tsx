import styled from "styled-components";
import { LocateIcon } from "./ui/LocateIcon";
import { MicroscopeIcon } from "./ui/MicroscopeIcon";

const SearchBar = () => {
  return (
    <div className="absolute top-4 left-4 bg-white dark:bg-gray-950 rounded-lg shadow p-3 space-y-2">
      <div className="flex items-center gap-2">
        <MicroscopeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input className="w-48 border" placeholder="Rechercher" type="text" />
      </div>
      <div className="flex items-center gap-2">
        <LocateIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-sm font-medium">Étage 2, Salle 203</span>
      </div>
    </div>
  );
};

export default SearchBar;

const Input = styled.input`
  border: 1px solid #eaeaea;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;
