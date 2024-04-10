import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <>
      <div className="flex justify-between m-3">
        <div className="flex space-x-2">
          <Image
            src={"/logo.png"}
            width={100}
            height={50}
          />



        </div>
        <div className="flex space-x-5">
          <div className="flex justify-center">
                <button className="border border-solid rounded-full bg-transparent font-semibold border-green-500 w-40 p-1 hover:bg-green-500 hover:text-lg hover:font-bold bg-green-500">Connect Wallet</button>
            </div>
        </div>



      </div>
    </>
  );

}
