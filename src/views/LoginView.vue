<template>
    <div class="bg-base-100 h-screen container flex items-center justify-items-center">
        <div class="mx-10 shrink w-full">
            <div class="card rounded-sm max-w-sm w-full mx-auto">
                <figure>
                    <img src="/image/login.png" class="h-36" alt="" />
                </figure>
                <h1 class="text-center font-bold text-primary leading-loose">
                    Assalamualaikum, Selamat Datang!
                </h1>
                <p class="text-xs text-center">
                    Kami sangat senang Anda bergabung dengan kami. Aplikasi ini dirancang untuk membantu Anda
                    dalam berbagai aktivitas dan informasi terkait Sisantri Darussalam Blokagung 2. Silakan
                    jelajahi fitur-fitur yang tersedia dan jangan ragu untuk menghubungi kami jika Anda
                    memiliki pertanyaan atau memerlukan bantuan.
                </p>
                <div class="flex flex-col mt-12 gap-3">
                    <input type="number" class="input input-primary" placeholder="Masukkan NIS" />
                    <RouterLink to="/detail" class="btn btn-primary">Login</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
