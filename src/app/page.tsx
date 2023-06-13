import Image from "next/image";
import { P } from "../../components/ui/paragraph";

export default function Home() {
  return (
    <main className="h-[300vh] mt-[10vh]">
      <div className="max-w-4xl w-full p-4">
        <P className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          nesciunt laborum quo totam reiciendis dolorem, corrupti accusamus quae
          quaerat quam illo, delectus omnis. Beatae, repellendus ex corrupti
          debitis animi in?
        </P>
      </div>
    </main>
  );
}
