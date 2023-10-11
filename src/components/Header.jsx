import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
// install react-icons

function Header() {
  const style={
    logoSpanName:'text-slate-500',
    logoSpanDescription: 'text-slate-700',
    hOne:'font-bold text-sm sm:text-xl flex flex-wrap',
    header:'bg-slate-200 shadow-md',
    div: 'flex justify-between items-center max-w-6xl mx-auto p-3',
    input:'bg-transparent focus:outline-none w-24 sm:w-64',
    form:' bg-slate-100 p-3 rounded-lg flex items-center',
    faSearch:'text-slate-500',
    ul: 'flex gap-4',
    listComponent: 'hidden sm:inline text-slate-70 hover:underline',
  }
  return (
    <header className={style.header}>
        <div className={style.div}>
            <Link to="/">
                <h1 className={style.hOne}>
                    <span className={style.logoSpanName}>Tshepo</span>
                    <span className={style.logoSpanDescription}>Estates</span>
                </h1>
            </Link>
            
            <form className={style.form}>
                <input type="text" placeholder='Search...' />
                <FaSearch className={style.faSearch}/>
            </form>
            <ul className={style.ul}>
                <Link to="/">
                    <li className={style.listComponent}>Home</li>
                </Link>
                <Link to="/about">
                    <li className={style.listComponent}>About</li>
                </Link>
                <Link to="/sign-up">
                    <li className='text-slate-70 hover:underline'>Sign up</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header