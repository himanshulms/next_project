import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png'
import './layout.scss'
import Link from 'next/link';
import Header from '@/app/components/Header';

type LayoutProps = {
    className?: string;
    data: any;
};
const Layout = ({ className, data }: LayoutProps) => {
    const classes = `${className || ''}`;

    return (
        <>
            <div className={`${classes} drawer lg:drawer-open w-auto`}>

                {/* drawer condition */}
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content bg-primary-content">

                    <Header />

                    {/* children data */}
                    <div className='main-container py-8 px-5 relative'>
                        {data}
                    </div>

                </div>
                {/* drawer sidebar */}
                <div className="drawer-side lg:relative lg:bg-base-content">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu px-0 pt-0 bg-base-content  bg-base-content text-base-content ">
                        <div className='py-6 logo-image grid place-content-center sticky top-0 bg-base-content z-10'>
                            <Link href="/">
                                {/* <Image src={Logo} alt="logo" className='text-center' /> */}
                            </Link>
                        </div>
                        <div className='pt-6'>
                            <ul className='side-menu'>
                                <li>
                                    <Link href="/raw_material" className='text-base-100 text-base px-6'>
                                        Raw Material
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base-100 text-base px-6'>
                                        Packaging
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base-100 text-base px-6 active-menu'>
                                        Finished Goods
                                    </Link>
                                    <ul className='side-sub-menu py-4 ml-0 mt-2 mb-2 bg-base-200'>
                                        <li className='pl-4'>
                                            <Link href="#" className='text-base-100 text-base px-6'>
                                                Customer Products
                                            </Link>
                                        </li>
                                        <li className='pl-4'>
                                            <Link href="#" className='text-base-100 text-base px-6'>
                                                Finished Products
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#" className='text-base-100 text-base px-6'>
                                        Store
                                    </Link>
                                    <ul className='side-sub-menu py-4 ml-0 mt-2 mb-2 bg-base-200'>
                                        <li className='pl-4'>
                                            <Link href="#" className='text-base-100 text-base px-6'>
                                                Machine Parts
                                            </Link>
                                        </li>
                                        <li className='pl-4'>
                                            <Link href="#" className='text-base-100 text-base px-6 '>
                                                Printing Plates
                                            </Link>
                                        </li>
                                        <li className='pl-4'>
                                            <Link href="#" className='text-base-100 text-base px-6 '>
                                                Miscellaneous
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#" className='text-base-100 text-base px-6 indicator '>
                                        Requests <div className='counter'>(5)</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indent" className='text-base-100 text-base px-6 active'>
                                        Indent
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/inward" className='text-base-100 text-base px-6 '>
                                        Inward
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base-100 text-base px-6'>
                                        Godown
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;