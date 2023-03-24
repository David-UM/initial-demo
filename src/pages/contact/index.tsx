import Link from "next/link";
import MainLayout from "../../components/layout/MainLayout";

const contact = () => {
  return (
    <MainLayout>
      <h1>Estas en el Contact</h1>
      <p>
        Ahora puedes ir a <Link href="/">Home</Link>
      </p>
    </MainLayout>
  );
};

export default contact;
