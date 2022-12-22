import { useRef } from "react";
//import { usePlausible } from "next-plausible";
import { useForm, Controller } from "react-hook-form";
import { string, object, SchemaOf } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProperty } from "@lib/recoil/propertyAtom";
import { submitLead } from "@lib/service/propertyLead";
import { Input } from "@components/form/input/Input";
import { TextArea } from "@components/form/textArea/TextArea";
import { Recaptcha } from "@components/form/recaptcha";

interface ContactData {
  author: string;
  phoneNumber?: string;
  email?: string;
  message: string;
  captcha: string;
}

interface Props {
  onLeadSent?: () => void;
}

const schema: SchemaOf<ContactData> = object({
  author: string().required("Le nom est requis"),
  phoneNumber: string(),
  message: string().required("Le message est requis"),
  email: string().email(),
  captcha: string().required("Veuillez confirmer que vous n'êtes pas un robot"),
});

export const LeadForm = ({ onLeadSent }: Props) => {
  const property = useProperty();
  const captchaRef = useRef<any>(null);
  // const plausible = usePlausible();
  const { handleSubmit, setValue, clearErrors, formState, control } =
    useForm<ContactData>({
      resolver: yupResolver(schema),
    });
  const { errors } = formState;

  if (!property || !property.id) return null;

  async function sendLead(data: any) {
    const leadData = { ...data, property: property!!.id };
    const newLead = await submitLead(leadData);
    /*     plausible("lead-submitted", {
      props: {
        ...newLead,
        property,
      },
    }); */
    onLeadSent?.();
  }

  function onCaptchaChanged(captchaValue: string) {
    setValue("captcha", captchaValue);
    if (captchaValue && errors.captcha) {
      clearErrors("captcha");
    }
  }

  const fullname = (
    <div className="py-2">
      <Controller
        name="author"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Votre nom au complet"
            type="text"
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Saisir ici"
            error={errors?.author?.message}
          />
        )}
      />
    </div>
  );

  const phoneNumber = (
    <div className="py-2">
      <Controller
        name="phoneNumber"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Votre No. de téléphone"
            onChange={field.onChange}
            onBlur={field.onBlur}
            type="text"
            placeholder="Saisir ici"
            error={errors?.phoneNumber?.message}
          />
        )}
      />
    </div>
  );

  const email = (
    <div className="py-2">
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Votre e-mail"
            onChange={field.onChange}
            onBlur={field.onBlur}
            type="text"
            placeholder="Saisir ici"
            error={errors?.email?.message}
          />
        )}
      />
    </div>
  );

  const message = (
    <div>
      <Controller
        name="message"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <TextArea
            name="message"
            label="Votre message"
            placeholder="Saisir ici"
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={errors.message?.message}
          />
        )}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit(sendLead)} className="flex flex-col ">
      {fullname}
      {phoneNumber}
      {email}
      {message}
      <div className="py-2">
        <Recaptcha ref={captchaRef} onChange={onCaptchaChanged} />
        {errors.captcha && (
          <div className="text-red-600">{errors.captcha?.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto"
      >
        Envoyer
      </button>
    </form>
  );
};
