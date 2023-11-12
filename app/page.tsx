import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";

export const metadata = {
  title: "Comming soon!",
  description: "IdolAPI - A Fanmade RESTful API based in IdolCorp",
  author: "Hector Joel Luna",
  charset: "utf-8",
};

export default function Home() {
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
