import Head from 'next/head'
import Link from 'next/link';
import ItemNav from '../UI/ItemNav';

interface MainLayoutProps {
    children: React.ReactNode;
    pageName: string;
    pageDescription: string;
}

const MainLayout = ({children, pageName, pageDescription }: MainLayoutProps) => {
  return (
    <>
        <Head>
            <title>{`${pageName} | Ivan Campos Wainer`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="author" content="Ivo Wainer" />
            <meta name="description" content={`About the post ${ pageName }`} />
            <meta name="keywords" content={`${ pageName }, programación, technologies, portfolio, how, build, nextjs, react`} />

            <meta property="og:title" content={`${pageName}`} />
            <meta property="og:description" content={`${pageDescription}`} />
            <meta property="og:image" content={`/Logo.png`} />
        </Head>

        <header className='shadow-md px-12 py-2 flex justify-between sticky top-0 z-50 bg-white'>
            <Link href="/" passHref className='text-gray-800 text-xl font-bold'>EcommerceCoder</Link>
            <nav className='text-black flex'>
                <Link href="/cart"><ItemNav icon={<i className="bi bi-cart"></i>} editable={true}/></Link>
            </nav>
        </header>

        {children}
    </>     
  )
}

export default MainLayout