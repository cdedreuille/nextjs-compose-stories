import Link from 'next/link';

export default function Home() {

  return (
    <main className='p-8 flex flex-col gap-4'>
      <Link href='/test-client'>Test client (Need to refresh to see the error in the terminal)</Link>
      <Link href='/test-server'>Test server (crashes directly)</Link>
    </main>
  );
}
