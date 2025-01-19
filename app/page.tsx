"use client";
import Image from "next/image";
import { lusitana } from "./ui/fonts";
import { text } from "stream/consumers";
import { MenuHamburguer } from "./MenuHamburger";
import { Main } from "./ui/page";
import { Section } from "./ui/Section";
import { GlobalStyle } from "./ui/page";

export default function Home() {
  return (
    <Main>
      <GlobalStyle />

      <MenuHamburguer></MenuHamburguer>
      <Section>
        <section id="home">
          {/*
        <header className="bg-h-blue-p  shadow-h-black-u h-24 flex py-3 px-5 justify-between items-center sticky top-0 z-20 duration-dur-s">

          <div className="flex justify-center cursor-pointer text-6xl">
        <span
          className="absolute rounded-full border-2 border-border-style w-24 h-24 top-2"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgb(191, 28, 28, 75%), rgb(204, 110, 110, 75%))",
          }}
        ></span>
        <h1>
          <a
            href="#home"
            className="relative no-underline text-h-link-t "
            style={{
              letterSpacing: "14px",
              textShadow:
                "-3px -3px 0px rgb(16, 15, 15, 0.953), -3px 3px 0px rgb(16, 15, 15, 0.953), 3px -3px 0px rgb(16, 15, 15, 0.953), 3px 0px 0px rgb(16, 15, 15, 0.953)",
            }}
          >
            HAJIMARI
          </a>
        </h1>
      </div>
      <div className="container">
        <nav className="hidden md:flex items-center gap-10 text-md">
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#depoimentos">depoimentos</a>
            </li>
          </ul>
        </nav>
        <div className="toggle-switch">
              <label className="switch-label">
                <input type="checkbox" className="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <label className="hamburger">
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
      </div>
        </header>*/}
          <h1>HAJIMARI</h1>
        </section>
        <section>
          <h1>Minhas gotas evaporam</h1>
          <p>auhsuasa husjaijsi ajijsidj as</p>
        </section>
      </Section>
    </Main>
  );
}
