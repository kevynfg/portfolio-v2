import Image from "next/image";
import { myPicture, name } from '../lib/info'

export default function Home() {
  return (
    <section>
      <p>Hello</p>
      <Image 
        src={myPicture}
        width={100}
        alt={name}
        placeholder="blur"
        className="rounded-full grayscale"
        priority
      />
    </section>
  )
}
