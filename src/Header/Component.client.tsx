'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'

import { IoIosArrowDown } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { IoMdMenu } from 'react-icons/io'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { MdAccountCircle } from 'react-icons/md'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { LanguageCustome } from '@/app/(frontend)/content/home/content.home'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openLogin, setOpenLogin] = useState<boolean>(false)
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const searchRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    if (!openMenu) {
      return
    }
    const handlerKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(false)
      }
    }

    window.addEventListener('keydown', handlerKeyDown)

    return () => window.removeEventListener('keydown', handlerKeyDown)
  }, [openMenu])

  const handlerOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handlerChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value.trim()
      if (value) {
        router.push(`/partners?query=${encodeURIComponent(value)}`)
      }
      ;(e.target as HTMLInputElement).value = ''
    }
  }

  const handerOpenLogin = () => {
    setOpenLogin(!openLogin)
  }

  const handlerOpenSearch = () => {
    setOpenSearch(!openSearch)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpenSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header className=" relative z-20 bg-[#D8BFA4] " {...(theme ? { 'data-theme': theme } : {})}>
        <div className="container flex flex-wrap items-center justify-between gap-4 bg-[#D8BFA4] py-3 md:gap-10">
          <Link href="/" className="text-transparent flex items-center">
            <Logo loading="eager" priority="high" className="fill-current" />
          </Link>
          <div className="flex items-center sm:gap-x-2 flex-1">
            <div className="flex items-center h-9 justify-between border-[1px] rounded-full text-sm border-[#e2e8f0] relative ">
              <Popover className="relative ">
                <PopoverButton className="focus:outline-none cursor-pointer flex justify-between gap-x-10 p-1 items-center md:p-2 sm:py-2 text-sm ">
                  <h1>Tất cả</h1>
                  <IoIosArrowDown />
                </PopoverButton>

                <PopoverPanel className="absolute top-full mt-2 h-[200px] w-[159px] bg-white text-black p-2 flex flex-col overflow-hidden rounded-xl shadow-lg gap-y-3">
                  <Link href="/analytics">Huế</Link>
                  <Link href="/engagement">Thành Phố Hồ Chí Minh</Link>
                  <Link href="/security">Đà Nẵng</Link>
                  <Link href="/integrations">Hà Nội</Link>
                </PopoverPanel>
              </Popover>
            </div>

            <div className="items-center flex-1 justify-between relative hidden h-9 sm:flex ">
              <input
                onKeyDown={handlerChangeInput}
                placeholder="Bạn cần tìm gì? "
                className="file:text-foreground h-full placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input shadow-xs flex w-full min-w-0 border bg-transparent px-3 py-1 outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full pr-8 text-sm"
              />
              <CiSearch className="absolute right-2 text-3xl" />
            </div>
          </div>

          <div className="flex items-center gap-x-2 md:gap-x-0">
            <button
              className="cursor-pointer relative rounded bg-[#b68059] p-2 text-white shadow-[inset_8px_0_8px_-4px_#c39974] transition duration-300 hover:bg-[#a96e4d] sm:hidden"
              onClick={handlerOpenSearch}
              ref={searchRef}
            >
              <CiSearch />
              {openSearch ? (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black  rounded-lg shadow-lg mt-1 w-48"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    placeholder="Bạn cần tìm gì? "
                    className="w-full border-2 border-black border-opacity-25  p-1 text-sm rounded-lg shadow-sm"
                  />
                </div>
              ) : null}
            </button>

            <div className="p-0 shadow-none md:px-4 md:shadow-[inset_4px_0_2px_-4px_#c39974]">
              <button
                className="cursor-pointer rounded bg-[#b68059] p-2 text-white shadow-[inset_8px_0_8px_-4px_#c39974] transition duration-300 hover:bg-[#a96e4d] border-x-[1px] "
                onClick={handlerOpenMenu}
              >
                <IoMdMenu />
              </button>
            </div>
            <div className="p-0 shadow-none md:px-4 md:shadow-[inset_4px_0_2px_-4px_#c39974]">
              <Link href="/cart">
                <button className="cursor-pointer rounded bg-[#b68059] p-2 text-white shadow-[inset_8px_0_8px_-4px_#c39974] transition duration-300 hover:bg-[#a96e4d] ">
                  <MdOutlineLocalGroceryStore />
                </button>
              </Link>
            </div>

            <div className="p-0 shadow-none md:px-4 md:shadow-[inset_4px_0_2px_-4px_#c39974]">
              <button
                className="cursor-pointer rounded bg-[#b68059] p-2 text-white shadow-[inset_8px_0_8px_-4px_#c39974] transition duration-300 hover:bg-[#a96e4d] "
                onClick={handerOpenLogin}
              >
                <MdAccountCircle />
              </button>
            </div>
          </div>
        </div>
      </header>

      {openMenu ? (
        <>
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50" onClick={handlerOpenMenu}>
            <div
              className={`container flex flex-col gap-y-6 text-white absolute inset-y-0 w-96 py-4 h-full top-0 right-0 bg-black transform transition-transform duration-75 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="w-full flex justify-end ">
                <IoClose className=" border-2 text-green-500 text-2xl" onClick={handlerOpenMenu} />
              </button>
              <div>Chọn ngôn ngữ</div>
              <div className="flex flex-col gap-y-5 justify-start">
                {LanguageCustome.map(
                  (item: {
                    id: number
                    title: string
                    href: string
                    image: string
                    alt: string
                  }) => {
                    if (item.id === 6) {
                      return null
                    }
                    return (
                      <button
                        className="flex items-center gap-x-2 bg-[#b68059] p-2 rounded-xl w-full justify-center"
                        key={item.id}
                      >
                        <Image src={item.image} width={32} height={32} alt="tiengviet" />
                        <span className="text-white">{item.alt}</span>
                      </button>
                    )
                  },
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}

      {openLogin ? (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center"
          onClick={handerOpenLogin}
        >
          <div
            className="container absolute right-0 left-0 flex justify-center flex-col gap-y-4 p-10 rounded-xl w-[400px] max-h-[500px] bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="w-full flex justify-end">
              <IoClose className="text-2xl" onClick={handerOpenLogin} />
            </button>
            <div className="flex justify-center gap-y-4 flex-col items-center">
              <Image src="/logo.webp" width={50} height={50} alt="login" />
              <span>Đăng Nhập</span>
            </div>
            <form className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full border-2 border-black opacity-15 p-1 rounded"
                />
              </div>
              <div>
                <label htmlFor="">Mật khẩu</label>
                <br />
                <input
                  type="text"
                  placeholder="xác nhận mật khẩu"
                  className="w-full border-2 border-black opacity-15 p-1 rounded"
                />
              </div>
            </form>
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" name="save" id="" />
                <span>Ghi nhớ đăng nhập</span>
              </div>
              <button className="text-red-500">Quên mật khẩu?</button>
            </div>
            <div className="flex justify-center">
              <button className="w-full p-2 rounded-xl text-white bg-red-600">Đăng Nhập</button>
            </div>
            <div>
              Chưa có tài khoản?{' '}
              <Link href="dangki" className="text-red-500">
                Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
