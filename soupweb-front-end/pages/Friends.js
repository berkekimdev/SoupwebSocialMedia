import React from "react";
import { getSession, signIn } from "next-auth/react";
("next-auth/client");
import { useRouter } from "next/router";
import Image from "next/image";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import Header from "./Header";
import Contacts from "../components/Contacts";
import { HiOutlineSearch } from "react-icons/hi";
const Friends = () => {
    return (
        <main className="bg-orange-50">
            <Header />
            <div className="flex flex-item justify-between ">
                {/* Left Sidebar */}
                <Sidebar />


                <div className=" bg-white p-6 rounded-lg shadow-lg mr-6 mx-6 h-2/4 mt-6 w-3/6">
                    <div className="header border-b-2 border-lightgray w-full">
                        <h3 className="font-bold text-2xl mt-2">Arkadaşlar</h3>
                    </div>
                    <div className="flex items-center p-3 mt-6 space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
                    <HiOutlineSearch size={20} />
                    <input
                        className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink w-full"
                        type="text"
                        placeholder="Arkadaşlarda bul"
                    />
                </div>
                    <div className="mt-5">
                        <Contacts src="https://images.pexels.com/users/avatars/2427660/imdat-akgun-991.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            name="&nbsp; Atakan Turgut"
                        />
                        <Contacts src="https://images.pexels.com/users/avatars/639863/joseph-costa-851.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            name="&nbsp; Özcan Çavga"
                        />
                        <Contacts src="https://images.pexels.com/users/avatars/61452992/bersah-b-599.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            name="&nbsp; Berk Ekim"
                        />

                    </div>

                </div>
                {/* Right Sidebar */}
                <RightSidebar />
            </div>
        </main>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
      props: {
        session,
      },
    };
  }
export default Friends;
