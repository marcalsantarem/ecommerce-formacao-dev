import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div>
      <ProdutoItem produto={produtos[0]} />
      <ProdutoItem produto={produtos[1]} />
      <ProdutoItem produto={produtos[2]} />
      <ProdutoItem produto={produtos[3]} />
    </div>
  );
}
