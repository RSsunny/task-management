import useAuth from "../../hooks/useAuth";

const Avater = ({ size }) => {
  const { user } = useAuth();
  return (
    <div className="avatar">
      <div className={`w-24 rounded-full  ${size ? size : "w-12"}`}>
        <img src={user?.photoURL} />
      </div>
    </div>
  );
};

export default Avater;
