import { Button } from "@/components/ui/button";

export function Stepper({
  steps,
  setStep,
  currentStep,
}: {
  steps: string[];
  setStep: any;
  currentStep: number;
}) {
  return (
    <div className="flex space-x-4">
      {steps.map((step, index) =>
        index == currentStep ? (
          <div className="flex items-center justify-center bg-foreground rounded-sm p-2 text-secondary text-center">
            {step}
          </div>
        ) : index > currentStep ? (
          <div className="flex items-center justify-center rounded-sm p-2 text-secondary text-center">
            {step}
          </div>
        ) : (
          <div
            className="flex items-center justify-center bg-muted rounded-sm p-2 text-primary text-center"
            onClick={currentStep > index ? () => setStep(index) : () => {}}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
