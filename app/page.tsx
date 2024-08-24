import { Button } from '@headlessui/react';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-10 lg:mx-52">
        <div className="flex h-52 w-full gap-5 rounded-xl bg-slate-100 p-5">
          <div className="h-full flex-grow rounded-xl bg-white/80 shadow-lg"></div>
          <div className="h-full flex-grow rounded-xl bg-white/80 shadow-lg"></div>
          <div className="h-full flex-grow rounded-xl bg-white/80 shadow-lg"></div>
        </div>
        <div className=" flex gap-4 rounded-xl bg-slate-100 p-5">
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-10">
            {Array.from({ length: 10 }, (v, i) => (
              <div key={i} className="flex h-fit flex-col gap-2 rounded-xl bg-white p-4 shadow-lg">
                <p className="font-bold">Title đề thi số x</p>
                <span>Thời gian: </span>
                <p>Số câu: </p>
                <p>Số tham gia: </p>

                <a href="/exam/1" target="_blank">
                  <Button className="w-full rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500">
                    Tham gia
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
