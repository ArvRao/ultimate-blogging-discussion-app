import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  return (
    // take flex in direction of colums. Total of 3 columns -> header, body and footer
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-2xl font-thin">Blog & diary</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
          <div className="flex w-full flex-col space-y-4 border-gray py-10 px-2">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-800"
              >
                <div className="absolute left-3 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="rounded-3xl py-1 px-4 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gray-200/50 px-4 py-3"
                      key={i}
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-3 py-2 font-semibold text-sm">
                  <div>Following</div>
                  {/* <div>Ads</div> */}
                  <div>
                    <HiChevronDown className="text-xl"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </main>
        <aside className="col-span-4 h-full w-full">From the side part</aside>
      </section>
      <footer className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        All copyrights reserved &copy;
      </footer>
    </div>
  );
};

export default HomePage;
