import { Modal } from "@components/Modal";
import { useModalOpened, useSetModalState } from "@lib/recoil/modalAtomFamily";
import { LeadFlow } from "./LeadFlow";

export const LeadModal = () => {
  const setModalState = useSetModalState("leadModal");
  const opened = useModalOpened("leadModal");
  return (
    <Modal onClose={() => setModalState(false)} open={opened}>
      <h3 className="text-2xl md:text-3xl">Contacter l agent</h3>
      <LeadFlow />
    </Modal>
  );
};
