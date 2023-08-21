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
      className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${
        isShowModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white grid gap-4 p-2 rounded-md relative"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="text-red-500 font-bold absolute top-1 right-2"
        >
          x
        </button>
        <h2 className="text-center">
          {isUserToUpdate ? "Edit User" : "Create user"}
        </h2>
        <div className="grid">
          <label htmlFor="first_name">First Name</label>
          <input
            className="outline-none border-[1px] border-black p-1"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs">{errors.first_name.message}</p>
          )}
        </div>
        <div className="grid">
          <label htmlFor="last_name">Last Name</label>
          <input
            className="outline-none border-[1px] border-black p-1"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none border-[1px] border-black p-1"
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            className="outline-none border-[1px] border-black p-1"
            id="password"
            type="text"
            {...register("password")}
          />
        </div>
        <div className="grid">
          <label htmlFor="birthday">Birthday</label>
          <input
            className="outline-none border-[1px] border-black p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className="bg-black text-white p-2">
          {isUserToUpdate ? "Save changes" : "Create user"}
        </button>
      </form>
    </section>
  );
};
export default UsersForm;
