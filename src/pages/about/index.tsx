import Link from 'next/link';
import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div>About</div>
      <Link href='/'>Home</Link>
    </>
  );
};

export default About;
