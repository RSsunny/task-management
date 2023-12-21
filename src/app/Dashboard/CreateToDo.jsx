import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateToDo = () => {
  const [priority, setPriority] = useState("low");
  console.log(priority);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const getPriority = priority;
    const title = data.title;
    const des = data.des;
    const date = data.date;

    const newList = {
      title,
      des,
      date,
      priority: getPriority,
    };
    console.log(newList);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold  capitalize">create new tasks</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border my-10 p-5 relative"
      >
        <div className="flex items-center gap-5">
          <div className="w-full">
            <h3 className="mb-2 font-bold">Title :</h3>
            <input
              name="title"
              placeholder="inter your title"
              className="outline-none w-full border p-2"
              {...register("title")}
            />
          </div>

          <div className="w-full">
            <h3 className="mb-2 font-bold">Date :</h3>
            <input
              name="date"
              type="date"
              className="outline-none w-full border p-2"
              {...register("date")}
            />
          </div>
        </div>
        <div className=" my-5 ">
          <h3 className="mb-2 font-bold">Description :</h3>
          <textarea
            name="des"
            placeholder="description"
            className="outline-none w-full border p-2 min-h-36"
            {...register("des")}
          />
        </div>
        <div className=" my-5 flex items-center gap-5">
          <h3 className=" font-bold">priority :</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("low")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "low" && "bg-gray-400"
                }`}
              ></p>
              <p>Low</p>
            </div>
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("moderate")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "moderate" && "bg-gray-400"
                }`}
              ></p>
              <p>Moderate</p>
            </div>
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("high")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "high" && "bg-gray-400"
                }`}
              ></p>
              <p>High</p>
            </div>
          </div>
        </div>

        <input
          className="border absolute bottom-10 right-5 px-6"
          type="submit"
          value={"Add"}
        />
      </form>
    </div>
  );
};

export default CreateToDo;
