import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersForm from "./Components/UsersForm";
import { EMPTY_FORM_VALUES } from "./shared/constants";
import UserList from "./Components/UserList";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data)) 
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FORM_VALUES); 
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdated, reset) => {
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FORM_VALUES);
        setIsUserToUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  const handleClickUpdateUser = (user) => {
    setIsShowModal(true);
    setIsUserToUpdate(user);
  };

  const handleClickOpenModal = () => {  /////////////////////////////////
    setIsShowModal(true);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="bg-white grid gap-4 min-h-screen">
        <UsersForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          setIsShowModal={setIsShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
      />
      <header className="flex gap-x-10 items-center justify-around h-20 mt-6">
        <h2 className="text-4xl sm:text-5xl">Users</h2>
        <button
          onClick={handleClickOpenModal}
          className="bg-[#555A88] p-2 rounded-md text-white"
        >
          <div className="object-cover flex items-center gap-2">
            <img className="w-8 m-l-1" src="./icons/add.png" alt="" />
            <h3 className="p-2 mr-2">
          Create user</h3>
          </div>
        </button>
      </header>
      <main className="grid grid-rows-[auto_auto] place-items-center gap-20 max-w-[1024px] w-full mx-auto ">
        <UserList
          users={users}
          deleteUser={deleteUser}
          handleClickUpdateUser={handleClickUpdateUser}
        />
      </main>
    </section>
  );
}

export default App;
