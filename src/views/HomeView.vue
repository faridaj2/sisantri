<template>
  <main>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">SiSantri</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
    <!-- End Navbar -->
    <!-- Start Image Hero -->
    <div class="">

      <div class="hero min-h-screen" style="background-image: url(/image/hero.JPG);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-2xl font-bold">Selamat datang di Aplikasi Sisantri Darussalam Blokagung 2!</h1>
            <p class="mb-5 text-sm">Kami sangat senang Anda bergabung dengan kami. Aplikasi ini dirancang untuk membantu
              Anda <br />
              dalam berbagai aktivitas dan informasi terkait Sisantri Darussalam Blokagung 2. Silakan jelajahi fitur-fitur
              yang tersedia dan jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau memerlukan bantuan.
              <br />
              Semoga aplikasi ini dapat membantu Anda dengan baik dan memberikan manfaat yang berarti. Terima kasih atas
              partisipasi Anda!

              Selamat menggunakan Aplikasi Sisantri Darussalam Blokagung 2!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero Image -->

    <!-- Start Menu Icon -->
    <div class="grid grid-cols-4 md:grid-cols-5 gap-5 my-10 container">
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <FaMoneyBills />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Uang Saku</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <AkMoney />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Pembayaran</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <CaWarningFilled />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Pelanggaran</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <BxSolidTrophy />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Prestasi</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <AnFilledFileImage />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Brosur</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <MdContactPhone />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Kontak</span>
      </div>
      <div class="flex flex-col cursor-pointer">
        <div class="flex">
          <div
            class="text-2xl text-primary rounded-full p-4 shadow-my inline-block mx-auto outline outline-1 hover:bg-primary hover:text-white hover:outline hover:outline-1 hover:outline-primary">
            <CaTableOfContents />
          </div>
        </div>
        <span class="text-center mt-3 text-xs text-primary">Absensi</span>
      </div>
    </div>
    <!-- End Menu -->
    <!-- Start Berita -->
    <div class="container my-20">
      <h1 class="text-primary font-bold mx-3 text-xl my-2">Berita</h1>
      <div>
        <div class="card card-side bg-base-100 shadow-my mx-3 md:mx-0">
          <figure><img src="/image/hero.JPG" class="w-48 max-h-48 object-cover" alt="News Images" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Santri Darussalam Blokagung 2 Mengadakan Kegiatan Kreatif Bersama!</h2>
            <p class="truncate overflow-hidden text-xs">Santri Darussalam Blokagung 2, sebuah pesantren yang terletak di
              wilayah
              yang indah,baru-baru ini</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Berita -->
    <!-- Start Footer -->
    <footer class=" bg-primary">
      <div class="container">
        <span class="text-white text-xs font-thin text-center block">2023 Darussalam Blokagung 2</span>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { AkMoney, FaMoneyBills, CaWarningFilled, BxSolidTrophy, AnFilledFileImage, MdContactPhone, CaTableOfContents } from "@kalimahapps/vue-icons";
</script>


