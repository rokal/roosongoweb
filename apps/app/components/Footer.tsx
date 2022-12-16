export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          Merci pour votre confiance!
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()} Roosongo, Inc. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
