import Link from "next/link";

const Header = () => {
  return (
    <div className="p-4">
      <div className="container flex justify-between items-center">
        <img src="/logo.png" alt="" className="w-[316px] h-[48px]" />
        <Link href="/cart">
        <button className="w-37.5 h-50 bg-orange-600 text-white px-3 py-2 rounded-3xl!">520 ₽ | 3</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;