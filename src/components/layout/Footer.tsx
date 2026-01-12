"use client";

import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="px-6 md:px-30 py-16 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 text-center md:text-left">
        
        <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
          <Image
            src={logo}
            alt="Logo do site"
            className="w-16 md:w-12 object-contain"
          />
          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            Uma plataforma digital dedicada à criação, curadoria e comercialização de NFTs, conectando criadores e colecionadores em um ecossistema seguro e descentralizado.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Conta</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Meu Perfil</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Meus NFTs</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Favoritos</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Configurações</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Plataforma</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Sobre o Projeto</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Marketplace</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Roadmap</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Suporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Central de Ajuda</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Termos de Uso</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Política de Privacidade</a></li>
            <li><a className="hover:text-white transition-colors duration-300 cursor-pointer">Contato</a></li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-30 border-t border-white/10">
        <div className="py-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center md:text-left">
          <span>
            © {new Date().getFullYear()} NFT Platform. Todos os direitos reservados.
          </span>

          <div className="flex gap-4 text-lg">
            <FaFacebook className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaXTwitter className="hover:text-white transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
