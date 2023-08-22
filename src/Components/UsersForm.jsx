import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMPTY_FORM_VALUES } from "../shared/constants";
import { validationNameInput } from "../services/movies";

const UsersForm = ({
  isShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  setIsShowModal,
  setIsUserToUpdate,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    data.image_url = null;
    if (isUserToUpdate) {
      updateUser(data, reset);
    } else {
      createUser(data, reset);
    }
  };

  const handleClickCloseModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIsUserToUpdate(null);
  };

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${isShowModal
        ? "visible opacity-100 scale-100"
        : "invisible opacity-0 scale-0"
        }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white grid gap-2 p-2 rounded-md h-[550px] w-[300px]"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="text-red-500 font-bold absolute top-2 right-2 w-6"
        ><img src="./icons/iconx.png" alt="" />
        </button>
        <h2 className="text-center text-xl">
          {isUserToUpdate ? "Edit User" : "New User"}
        </h2>
        <div className="grid">
          <label htmlFor="first_name" className="p-1">First Name</label>
          <input
            className="outline-none rounded-md border-[1px] border-black p-1"
            id="first_name"
            placeholder="first name"
            type="text"
            {...register("first_name")}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs">{errors.first_name.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="last_name" className="p-1">Last Name</label>
          <input
            className="outline-none rounded-md border-[1px] border-black p-1"
            id="last_name"
            type="text"
            placeholder="last name"
            {...register("last_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="email" className="p-1">Email</label>
          <input
            className="outline-none rounded-md border-[1px] border-black p-1"
            id="email"
            type="text"
            placeholder="email"
            {...register("email")}
          />
        </div>
        <div className="grid">
          <label htmlFor="password" className="p-1">Password</label>
          <input
            className="outline-none rounded-md border-[1px] border-black p-1"
            id="password"
            type="text"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div className="grid">
          <label htmlFor="birthday" className="p-1">Birthday</label>
          <input
            className="outline-none rounded-md border-[1px] border-black p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className="bg-[#555A88] text-white p-2 rounded-sm">
          {isUserToUpdate ? "Save changes" : "Upload"}
        </button>
      </form>
    </section>
  );
};
export default UsersForm;
