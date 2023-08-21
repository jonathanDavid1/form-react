const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {

  return (
    <article className="border-[2px] border-black w-[260px] h-[160px] p-2">
      <ul>
        <li className="text-2xl">{user.first_name + " " + user.last_name}</li>
        <hr />
        <h2>Email</h2>
        <li>{user.email}</li>
        <li>Birthday: {user.birthday}</li>
      </ul>
      <div className="flex gap-2 justify-end">
      <button onClick={() => deleteUser(user.id)} className="p-2 text-white rounded-md"><div className="object-cover bg-red-600 w-[20px]"><img src="./icons/bin.svg" alt="" /></div></button>
      <button onClick={() => handleClickUpdateUser(user)} className="bg-[#BDBDBD] p-2 text-white rounded-md ml-2">
        <div><img src="./icons/edit.png" alt="" /></div>
      </button>
      </div>
    </article>
  );
};
export default UserCard;
