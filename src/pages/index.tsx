import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Ricardo Olarte Puell</h1>
      <div className='w-1 text-blue-200'>AXUL</div>
      <Link href='/about'>About Us</Link>
    </main>
  );
}
