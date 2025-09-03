import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Edra Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}
