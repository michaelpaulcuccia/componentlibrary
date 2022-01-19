import Image from 'next/image';
import wulogo from '../public/images/wulogo.svg';

export default function logo() {
  return (
    <div>
        <Image src={wulogo}/>
    </div>
  )
}
