import Head from "next/head";
import Navbar from "../components/Navbar";
import DatePickerForm from "../components/DatePickerForm";

const Home = () => {
  return (
    <body className=" flex flex-col min-h-screen ">
      <Head>
        <title> Airbnb Clone </title>
      </Head>

      <Navbar />

      <main className="px-6 pt-0 pb-14">
        <DatePickerForm />
        
      </main>

      <footer className=" bg-gray-400 mt-auto h-52">
        footer
      </footer>
    </body>

  )
}

export default Home
