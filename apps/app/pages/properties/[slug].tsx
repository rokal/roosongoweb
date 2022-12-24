import { RecoilRoot } from "recoil";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { propertyAtom } from "../../lib/recoil/propertyAtom";
import { PropertyTitle } from "@components/properties/PropertyTitle";
import { Property } from "@lib/types/property";
import Layout from "@components/Layout";
import PropertyInfoBoxes from "@components/properties/InfoBoxes";
import { LeadFlow } from "@components/properties/LeadFlow";
import { LeadModal } from "@components/properties/LeadModal";
import PriceSection from "@components/properties/PriceSection";
import PropertySwiper from "@components/properties/PropertySwiper";
import { PropertyDescription } from "@components/properties/PropertyDescription";
import { PropertyLocation } from "@components/properties/PropertyLocation";
import { getProperty } from "pages/api/properties/[slug]";
import { getSlugs } from "pages/api/propertySlugs";

interface Props {
  property: Property;
}

const PropertyDetails: NextPage<Props> = ({ property }: Props) => {
  if (!property) {
    return <div>La page que vous recherchez n&apos;existe pas!</div>;
  }

  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(propertyAtom, property);
      }}
    >
      <Layout title={`Details du logement - ${property.title}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <PropertyTitle />
          <PropertySwiper />
          <PriceSection />
          <PropertyInfoBoxes />
          <PropertyDescription />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <PropertyLocation />
            <div className="sm:px-4 md:px-8">
              <h3 className="text-2xl md:text-3xl">Contacter l&apos;agent</h3>
              <LeadFlow />
            </div>
          </div>
          <LeadModal />
        </div>
      </Layout>
    </RecoilRoot>
  );
};

export default PropertyDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const properties = await getSlugs();
  const paths = properties.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};
  if (!slug) {
    return {
      notFound: true,
    };
  }
  try {
    const property = await getProperty(slug as string);
    return {
      props: {
        property,
      },
      revalidate: 3600
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
