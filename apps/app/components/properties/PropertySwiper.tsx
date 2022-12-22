import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useProperty } from "../../lib/recoil/propertyAtom";

const PropertySwiper = () => {
  const property = useProperty();

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
      >
        {property?.images?.map((propertyImage, index) => {
          return (
            <SwiperSlide key={`property-details-carousel-${index}`}>
              <Image
                fill
                alt=""
                className="object-cover w-full pointer-events-none h-75 md:h-96 group-hover:opacity-75"
                src={propertyImage.formats.large.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PropertySwiper;
