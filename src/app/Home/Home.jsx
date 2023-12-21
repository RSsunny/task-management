import Footer from "../../components/ui/Footer";
import Hader from "../../components/ui/Hader";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { loding } = useAuth();
  console.log(loding);
  return (
    <div>
      <Hader />
      <Footer />
    </div>
  );
};

export default Home;
