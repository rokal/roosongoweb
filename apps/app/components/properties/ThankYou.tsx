import { CheckIcon } from "@heroicons/react/24/outline";

interface Props {
  onClose: () => void;
}
export const ThankYouLead = ({ onClose }: Props) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
          <CheckIcon className="w-6 h-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Message envoyé
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Votre message a été envoyé avec succès. Un agent vous contactera
              avec les informations que vous avez founies pour la suite de votre
              intérêt.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </>
  );
};
