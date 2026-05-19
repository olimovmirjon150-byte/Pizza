import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  return (
    <div className="p-4">
      <div className="container flex justify-between items-center">
        <img src="/logo.png" alt="" className="w-[316px] h-[48px]" />
        <div className="flex justify-center items-center gap-3">
          <Link href="/login">
          <button className="border p-2.5 rounded-full! text-white bg-orange-500">
          <IoMdLogIn size={24} />
          </button>
          </Link>
        <Link href="/cart">
        <button className="w-37.5 h-50 bg-orange-500 text-white px-3 py-2 rounded-3xl!">520 ₽ | 3</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;