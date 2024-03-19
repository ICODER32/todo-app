import InputComponent from "@/components/InputComponent";
import List from "@/components/List";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputComponent />
        <List />
      </div>
    </>
  );
}
