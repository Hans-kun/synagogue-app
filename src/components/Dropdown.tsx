/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown: React.FC<{
  title: string;
  routes: { title: string; route: string }[];
}> = ({ title, routes }) => {
  const [drop, setDrop] = useState(false);
  return (
    <div
      className='relative flex flex-col items-center'
      onMouseEnter={() => setDrop(true)}
      onMouseLeave={() => setDrop(false)}
    >
      <li className={`${drop === true ? "font-semibold" : ""}`}>{title}</li>
      <div
        className={`flex flex-col w-[180px] justify-center ${
          drop === true ? "" : "hidden"
        } absolute top-5 items-center`}
      >
        <div className='w-[10px] h-[10px] border-b-[10px] border-x-[10px] border-x-transparent border-slate-100' />
        <div className='flex flex-col w-full gap-y-4 bg-white p-5 shadow'>
          {routes.map((item: any, i: number) => (
            <>
              <Link
                key={i}
                to={item.route}
                className='w-full hover:font-semibold'
              >
                {item.title}
              </Link>
              {i < routes.length - 1 && <hr />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
