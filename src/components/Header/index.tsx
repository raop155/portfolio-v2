import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx } from 'clsx';

const navLinks = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const { pathname } = useRouter();

  const defaultLinkStyles = 'hover:text-blue-500';

  return (
    <header className='min-h-[65px] bg-gray-600 flex items-center px-6 justify-between'>
      <Link href='/' className='text-4xl font-bold text-blue-500'>
        R.
      </Link>
      <nav className='flex gap-4'>
        {navLinks.map(({ title, path }, index) => (
          <Link
            href={path}
            key={index}
            className={clsx(defaultLinkStyles, {
              'text-blue-500': pathname === path,
            })}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
