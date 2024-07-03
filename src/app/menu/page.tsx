import { MenusProvider } from "./menusProvider";
import Items from "./items/items";
import { PageModal } from "../utils/pageModal/pageModal";

export default function Menu() {
  return (
      <MenusProvider>
        <Items />

        <PageModal></PageModal>
      </MenusProvider>
  );
}
