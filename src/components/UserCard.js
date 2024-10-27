import React from 'react';
import { motion } from 'framer-motion';

const UserCard = ({ user, index }) => {
  return (
    <motion.div
      initial = {{opacity : 0}}
      animate={{ opacity : 1}}
      transition = {{duration : 0.4, ease : "easeInOut", delay : 0.125*index}}
      className="border rounded shadow-md p-4 bg-white hover:shadow-2xl cursor-pointer group lg:h-[60vh] md:h-[40vh] duration-500"
    >
      <div className='w-full h-[80%] overflow-hidden rounded'>
      <img
        src={`http://localhost:4000/${user.image}`}
        alt={user.name}
        className=" object-cover rounded mb-2 group-hover:scale-110 duration-500"
      />
      </div>
      <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
    </motion.div>
  );
};

export default UserCard;
