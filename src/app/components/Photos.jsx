import Image from "next/image";
import photo1 from '../../../public/photo1.jpg';
import photo2 from '../../../public/photo2.jpg';
import photo3 from '../../../public/photo3.jpg';
import photo4 from '../../../public/photo4.jpg';

export const Photos = () => {
  const photos = [photo1, photo2, photo3, photo4]
  return (
    <div id='photos' className="max-w-full mt-16">
      <ul className="flex flex-wrap justify-between gap-y-4">
        {photos.map((photo, index) => <Image src={photo} alt={`photo${index} image`} className='w-[49%] sm:w-full' />)}
      </ul>
    </div>
  )
}