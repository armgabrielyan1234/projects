//import components
import Footer from "../components/main/footer";
import Header from "../components/main/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
