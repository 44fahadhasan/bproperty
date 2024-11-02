import { Link } from "react-router-dom";

const MenuEnd = () => {
  return (
    <div class="lg:ms-auto mt-2 lg:mt-0 flex flex-wrap items-center gap-x-4">
      <div class="lg:ml-auto font-bold">
        <Link to="" class=" text-sm mr-1">
          Login
        </Link>
        /
        <Link to="" class=" text-sm ml-1">
          Register
        </Link>
      </div>

      <Link
        class="py-2 px-2.5 inline-flex items-center font-bold text-sm rounded-lg bg-[#006150] text-white disabled:opacity-50 disabled:pointer-events-none"
        to=""
      >
        List your Property
      </Link>
    </div>
  );
};

export default MenuEnd;
