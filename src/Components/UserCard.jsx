const UserCard = ({ user, deleteUser, handleClickUpdateUser }) => {

  return (
    <article className="border-[1px] border-black w-[260px] h-auto p-3 grid gap-y-4">
      <ul className="">
        <li className="text-2xl pt-4">{user.first_name + " " + user.last_name}</li>
        <hr /><br />
        <h2 className="text-gray-500">Email</h2>
        <li>{user.email}</li> <br />
        <li> <span className="text-gray-500"> Birthday: </span><br /> {user.birthday}</li>
      </ul>
      <div className="flex gap-1 justify-end">
        <button onClick={() => deleteUser(user.id)} className="p-2 text-white  bg-red-600 rounded-md"><div className="object-cover  w-[20px]"><img src="./icons/bin.svg" alt="" /></div></button>
        <button onClick={() => handleClickUpdateUser(user)} className="bg-[#BDBDBD] p-2 text-white rounded-md ml-2">
          <div className="object-cover"><img src="./icons/edit.png" alt="" /></div>
        </button>
      </div>
    </article>
  );
};
export default UserCard;
