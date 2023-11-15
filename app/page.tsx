import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";

export const metadata = {
  title: "Comming soon!",
  description: "IdolAPI - A Fanmade RESTful API based in IdolCorp",
  author: "Hector Joel Luna",
  charset: "utf-8",
};

const getVTubers = async () => {
  const res = await fetch('https://idolapi.vercel.app/api/vtuber')
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Home() {
  const vtubers = await getVTubers()
  console.log(vtubers)
  return (
    <>
      <HeaderNav></HeaderNav>
      <main className="">
        <div className="container">
          <h1 className="pt-1">Comming soon!</h1>
          <blockquote className="bs-callout bs-callout-warning">
            Comming soon!
          </blockquote>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
