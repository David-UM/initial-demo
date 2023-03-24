import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <MainLayout>
        <h1>ESTA ES LA NUEVA PAGINA DE PRICING</h1>
        <p>
          Ahora puedes ir a <Link href="/">Home</Link>
        </p>
      </MainLayout>
    </>
  );
};

export default Pricing;
