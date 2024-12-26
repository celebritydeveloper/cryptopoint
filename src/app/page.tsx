'use client';

import { Page } from '@/components/Page';
import Link from 'next/link';

export default function Home() {

  return (
    <Page back={false}>
      <Link href={'ton-connect'}>
        connect </Link>
    </Page>
  );
}
