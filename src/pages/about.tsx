import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";
import DarkLayout from "../components/layout/DarkLayout";

const about = () => {
  return (
    <>
      <h1>Estas en el About</h1>
      <p>
        Ahora puedes ir a <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default about;

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
