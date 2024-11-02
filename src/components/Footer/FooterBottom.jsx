import { Link } from "react-router-dom";
import icon from "../../assets/svg/philippines-icon.svg";
import { contactList, listIconLabel } from "../../data/data";
import Containter from "../reusable/Containter";

const FooterBottom = () => {
  return (
    <Containter>
      <div className="mt-20">
        <div>
          <h4 className="uppercase text-[13px]">
            FIND THE BEST REAL ESTATE OFFERS WORLDWIDE
          </h4>

          {/* icon list */}
          <ul className="mt-1 flex flex-col sm:flex-row sm:flex-wrap  gap-y-2 gap-x-5">
            {/* menu */}
            {listIconLabel?.map((label) => (
              <li className="flex gap-x-2 items-end">
                <img src={icon} className="w-3" alt="" />

                <Link
                  to={""}
                  className={`hover:text-[#28b16d] ${
                    label === "myproperty.ph"
                      ? "text-[#28b16d]"
                      : "text-[#006169]"
                  } text-[13px] transition-all font-bold lowercase`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-xs my-6">
            We at Bproperty are committed to giving you the best experience. For
            any questions, comments, or issues, kindly contact us.
          </p>

          {/* contact info list */}
          <ul className="space-y-2 text-xs">
            {/* menu */}
            {contactList?.map(({ label, info }) => (
              <li className="flex gap-x-1 items-center uppercase">
                <h6 className="text-[#4a4a4a] font-bold">{label}:</h6>
                <p>{info}</p>
              </li>
            ))}
          </ul>

          {/* copy right */}
          <p className="text-xs my-6">
            © 2015 - {new Date().getFullYear()} bproperty.com All rights
            reserved.
          </p>
        </div>
      </div>
    </Containter>
  );
};

export default FooterBottom;
