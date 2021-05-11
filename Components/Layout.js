import Head from "next/head" ; // on importe le composent Head de la bibliothéque de next
import Link from "next/link";   // on importe les composents de la biblio Next
import Image from "next/image";

export default function Layout({children, page}) {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="container-lg">
                <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
                <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                    <Link href='/'>
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">Accueil</button>
                    </Link>
                    <Link href='/about'>
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">A propos</button>
                    </Link>
                </div>
                <div>
                    <Image src="/main.jpg" alt="header-pic" width="400" height="25" className="rounded-3xl object-cover object-center" quality={100}></Image>
                </div>
            </header>
            <main className="pt-4 mx-20">
            {children}
            </main>
            <footer className="p-10">
                     <Image src="/main.jpg" alt="footer-pic" width="1000" height="30" className="rounded-3xl object-cover object-center" quality={100}></Image>
                     <ul className="pt-10 pb-4 flex justify-around">
                         <li>A propos</li>
                         <li>Qui sommes-nous</li>
                         <li>Fron Guigui - 2021</li>
                     </ul>
                     <p>
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                     </p>
            </footer>
           
            
        </div>

    )
}