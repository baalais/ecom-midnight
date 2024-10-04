"use client"

import Image from "next/image"
import { useState } from "react";

const images = [
  {
  id:1,
  url:"https://images.pexels.com/photos/4660441/pexels-photo-4660441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id:2,
    url:"https://images.pexels.com/photos/15392584/pexels-photo-15392584/free-photo-of-grayscale-photography-of-a-ship-sailing-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id:3,
      url:"https://images.pexels.com/photos/26202795/pexels-photo-26202795/free-photo-of-a-dog-on-a-leash-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
      {
        id:4,
        url:"https://images.pexels.com/photos/18685804/pexels-photo-18685804/free-photo-of-obsolete-analog-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
];

const ProductImages = () => {

const [index,setIndex] = useState(0)

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          sizes="50vw"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img,i) => (
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>setIndex(i)}>
          <Image src={img.url} alt='' fill sizes='30vw' className="object-cover rounded-md"/>
        </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages