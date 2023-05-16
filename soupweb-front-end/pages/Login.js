import React from "react";
import { getSession, signIn } from "next-auth/react";
("next-auth/client");
import { useRouter } from 'next/router';
import Image from "next/image";

const Login = () => {
  return (    
    <div className="flex justify-center items-center h-screen bg-orange-50">
      <Image
        src="https://user-images.githubusercontent.com/77547962/236570498-030b6651-159b-4296-a1a3-d19aaf3b9cd1.png"
        height={500}
        width={500}
      />

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">SoupWeb Giriş Yap</h1>
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
              w-full p-2 border rounded-md"
              type="email"
              name="email"
              id="email"
              required
              placeholder="eposta@soup.com"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
              w-full p-2 border rounded-md"
              type="password"
              name="password"
              id="password"
              required
              placeholder="············"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="remember">Beni Hatırla</label>
          </div>
          <a
            className="bg-[#edaf32] text-white py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-[#edaf32] focus:ring-opacity-50 cursor-pointer"
            type="submit"
          >
            Giriş Yap
          </a>
          &emsp;
          veya
          &emsp;
          <a
            onClick={signIn}
            className="border border-gray-300 bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-blue-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
            href="/#_=_"
          >
            Facebook ile devam edin
          </a>
          <div className="p-2">
          SoupWeb'de yeni misiniz? &nbsp;
            <a href="/Register" className="text-blue-600 hover:underline cursor-pointer" >
              Bir hesap oluşturun. 
            </a>
          </div>
        </form>
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
export default Login;
