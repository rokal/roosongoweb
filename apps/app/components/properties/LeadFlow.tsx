import { useState } from "react";
import { LeadForm } from "./LeadForm";
import { ThankYouLead } from "./ThankYou";

interface Props {
  onDone?: () => void;
}

export const LeadFlow = ({ onDone }: Props) => {
  const [step, setStep] = useState(1);

  const onCloseThankYou = () => {
    onDone?.();
    setStep(1);
  };

  const onLeadSent = () => {
    setStep(2);
  };

  if (step === 1) return <LeadForm onLeadSent={onLeadSent} />;
  return <ThankYouLead onClose={onCloseThankYou} />;
};
