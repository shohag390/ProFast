import { IoBookmarks } from "react-icons/io5";
import { MdOutlineCorporateFare } from "react-icons/md";
import { PiTruckTrailer } from "react-icons/pi";
import { TbCashBanknotePlus, TbTruckLoading } from "react-icons/tb";

const work = [
  {
    icone: <PiTruckTrailer />,
    title: "Booking Pick & Drop",
    description:
      "Schedule a pickup from your location, and our delivery team will collect and deliver your parcel safely, quickly, and on time.",
  },
  {
    icone: <TbCashBanknotePlus />,
    title: "Cash On Delivery",
    description:
      "Offer your customers a secure Cash on Delivery option while we collect the payment and transfer it to you with complete transparency.",
  },
  {
    icone: <TbTruckLoading />,
    title: "Delivery Hub",
    description:
      "Our strategically located delivery hubs ensure faster parcel processing, efficient routing, and reliable deliveries across the country.",
  },
  {
    icone: <MdOutlineCorporateFare />,
    title: "Booking SME & Corporate",
    description:
      "Tailored logistics solutions for SMEs and corporate businesses with bulk shipping, dedicated support, and cost-effective delivery services.",
  },
];

const Work = () => {
  return (
    <div className="px-5 md:px-13 lg:px-25 2xl:px-35 py-8 md:py-12 lg:py-15 2xl:py-18 bg-[#eaeced]">
      <h4 className="text-[#03373D] text-[30px] lg:text-[35px] font-medium md:font-semibold lg:font-bold pb-5 md:pb-6 lg:pb-7">
        How It Works
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {work?.map((item, index) => (
          <div className="bg-[#ffff] p-6 md:p-8 lg:p-10 rounded-xl" key={index}>
            <div className="text-[50px] text-[#03373D]">{item?.icone}</div>
            <div>
              <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-medium lg:font-semibold text-[#03373D] py-1 md:py-2 lg:py-3">
                {item?.title}
              </h4>
              <p className="line-clamp-3 text-[14px] md:text-[16px] text-[#606060] text-justify">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
