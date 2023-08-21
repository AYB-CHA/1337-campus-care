import Button from "@/components/Button";
import Image from "next/image";

type loginUrlResponse = {
  loginUrl: string;
};

export default async function Home() {
  return (
    <div>hello world!</div>
    // <main className="min-h-screen bg-white flex justify-center items-center">
    //   <a href={url}>
    //     <Button>
    //       LOG IN WITH{""}
    //       <Image
    //         className="ml-4"
    //         src="https://42.fr/wp-content/uploads/2021/05/42-Final-sigle-seul.svg"
    //         alt="42 log"
    //         width={20}
    //         height={20}
    //       />
    //     </Button>
    //   </a>
    // </main>
  );
}
