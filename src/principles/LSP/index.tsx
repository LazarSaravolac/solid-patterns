import { SearchInput } from "./searchInput";
import { useStateManager } from "./hooks/useStateManager";

export function LSP() {
  const {stateValue, handleState} = useStateManager<string>("");

  return (
    <>
    <SearchInput value={stateValue} onChange={(e) => handleState(e.target.value)} inputColor={"red"} />
    <input value={stateValue} onChange={(e) => handleState(e.target.value)}  type="search"/>
    </>
  );
}
