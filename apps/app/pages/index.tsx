import { PlacesAutocomplete } from "src/components/PlacesAutocomplete";

export default function Home() {
  return (
    <main className="lg:relative bg-primary-50">
      <div className="w-full h-screen pt-4 pb-20 mx-auto text-center">
        <div className="max-w-2xl px-4 m-auto sm:px-8">
          <div className="flex justify-center">
            {/*             <img
              className="hidden w-auto h-40"
              src="/images/roosongo_transparent.png"
              alt="Logo"
              loading="lazy"
              width={200}
              height={250}
            /> */}

            <img
              className="w-auto h-32 "
              src="/images/roosongo_transparent.png"
              alt="Logo"
              loading="lazy"
              width={150}
              height={200}
            />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
            <span className="block xl:inline">
              Votre prochain logement avec
            </span>
            <span className="block text-3xl uppercase text-primary-600 xl:inline">
              {" "}
              Roosongo
            </span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-gray-500 text-md sm:text-xl md:mt-5 md:max-w-3xl">
            Nous sommes a l affut des nouveauté du marché pour vous donner une
            experience super agreable dans la recherche de votre prochain
            logement.
          </p>
          <div className="items-center justify-center py-6 ">
            <PlacesAutocomplete />
          </div>
        </div>
      </div>
    </main>
  );
}
