import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <section className="">
        <div className="px-4 py-32 mx-auto lg:items-center lg:flex lg:max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 lg:text-5xl">
              <p className="">Software dan Hardware</p>
              <p className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">ERP</p>
            </h1>
            <p className="mt-4 sm:leading-relaxed sm:text-xl lg:text-lg">Berbagai keperluan yang dibutuhkan perusahaan tidak mungkin dikerjakan secara manual, kami siap membantu anda.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded-md shadow active:bg-red-500 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto" href="/get-started">Multi</a>
              <a className="block w-full px-12 py-3 text-sm font-medium text-blue-500 rounded-md shadow active:text-red-500 border-blue border hover:text-blue-700 focus:outline-none focus:ring dark:text-white sm:w-auto" href="/about">Pelajari lebih dalam</a></div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="bg-gradient-to-r
    from-pink-200
    via-red-200
    to-yellow-200
    background-animate grid grid-cols-1 gap-y-8 gap-x-8 max-w-screen px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="max-w px-4 mx-auto text-center lg:text-left lg:mx-0 lg:px-0">
            <h2 className="text-3xl font-bold text-gray-800">Layanan unggulan yang kami tawarkan</h2>
            <p className="mt-4 text-lg text-gray-700">Optimalkan proses bisnis anda dengan software dan hardware dari Kinidev</p><a className="flex px-5 py-3 mt-8 font-medium rounded-md bg-blue-500 text-white items-center justify-between w-56 mx-auto lg:mx-0" href="">Pelajari lebih Lanjut<span className="order-last">
              <div style={{ fontSize: 16, color: 'inherit', padding: 10 }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
              </svg></div>
            </span></a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
            <a className="block p-4 bg-white border border-gray-100 shadow-sm rounded-md dark:bg-gray-900 dark:border-gray-900 items-center text-center flex " href="">
              <div>
                <h6 className="mt-2 font-medium text-gray-900 dark:text-gray-300">SDM</h6>
                <p className="mt-1 text-sm">Permudah pekerjaan departemen sumber daya manusia</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
