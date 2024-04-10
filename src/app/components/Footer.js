import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
      <div className="absolute inset-x-0 bottom-0 mb-5">
        <div className="flex justify-center">
            <div className="flex space-x-2 ">
            <Image
                src={"/logo.png"}
                width={100}
                height={50}
            />

            


            </div>
            <div className="flex space-x-5 ml-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Whitepapers</Link>
            </div>
        </div>
        



      </div>
  );

}
