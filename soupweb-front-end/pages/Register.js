import React from "react";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-orange-50">
      <Image
        src="https://user-images.githubusercontent.com/77547962/236570498-030b6651-159b-4296-a1a3-d19aaf3b9cd1.png"
        height={500}
        width={500}
      />

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="header border-b-2 border-lightgray w-full">
          <h3 className="font-bold text-2xl">SoupWeb Kayıt Ol</h3>
          <p>Hızlı ve kolay</p>
        </div>

        <div className="body mt-[20px]">
          <form className="flex w-full flex-col justify-center">
            <div className="user_name flex items-center gap-[10px] w-full">
              <input
                type="text"
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-[1px] border-solid border-lightgray rounded-[8px] p-[10px] bg-gray-100"
                placeholder="İsim"
                name="fname"
              />
              <input
                type="text"
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-[1px] border-solid border-lightgray rounded-[8px] p-[10px] bg-gray-100"
                placeholder="Soyisim"
                name="lname"
              />
            </div>
            <div className="email_password flex flex-col gap-[10px] mt-[10px]">
              <input
                type="text"
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-[1px] border-solid border-lightgray rounded-[8px] p-[10px] bg-gray-100"
                placeholder="E-posta"
                name="email"
              />
              <input
                type="text"
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-[1px] border-solid border-lightgray rounded-[8px] p-2 bg-gray-100"
                placeholder="Fotoğraf Url"
                name="avatar"
              />

              <input
                type="password"
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-[1px] border-solid border-lightgray rounded-[8px] p-[10px] bg-gray-100"
                placeholder="Şifre"
                name="password"
              />
            </div>
            <div className="p-4">
              <a
                className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-[#edaf32] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
                type="submit"
              >
                Kayıt Ol
              </a>
              &emsp; veya &emsp;
              <a
                onClick={signIn}
                className="border border-gray-300 bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-blue-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                href="/#_=_"
              >
                Facebook ile devam edin
              </a>
              <div className="p-5">
                Zaten SoupWeb'e üye misiniz? &nbsp;
                <a href="/Login" target="_self" className="text-blue-600 hover:underline cursor-pointer">
                  Giriş yapın.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
export default Register;
