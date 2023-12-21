import Footer from "../../components/ui/Footer";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { loding } = useAuth();
  console.log(loding);
  return (
    <div>
      <Footer />
    </div>
  );
};

export default Home;
