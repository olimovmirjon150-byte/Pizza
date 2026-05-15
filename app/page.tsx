import Categories from "./_components/Categories";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Products from "./_components/Products";

const page = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default page;