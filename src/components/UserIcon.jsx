import userPict from '../assets/images/user.jpg';
import { BiSolidChevronDown } from 'react-icons/bi';

const UserIcon = () => {
  return (
    <div className="flex items-center gap-2.5">
      <p className="text-base">Welcome, Bintang</p>
      <img src={userPict} alt="user picture" className="rounded-full w-8" />
      <BiSolidChevronDown />
    </div>
  );
};
export default UserIcon;
