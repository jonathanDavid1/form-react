import UserCard from "./UserCard";

const UserList = ({ users, deleteUser, handleClickUpdateUser }) => {
  return (
    <section className="grid gap-8 grid-cols-[repeat(auto-fit,_310px)] place-items-center w-full justify-center border-green-500">
      { users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickUpdateUser={handleClickUpdateUser}
        />
      ))}
    </section>
  );
};
export default UserList;
