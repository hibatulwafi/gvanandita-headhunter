<template>

	<section class="py-16 bg-white">
		<div class="container mx-auto px-6 lg:px-20">
			<div class="text-center max-w-3xl mx-auto mb-14">
				<h2 class="text-3xl font-bold text-center mb-12">Mengapa Kami Jadi Pilihan Utama Partner Rekrutmen Anda</h2>

				<p class="mt-4 text-gray-600 leading-relaxed">
					Kami adalah spesialis dalam menemukan dan menempatkan talenta terbaik yang tidak hanya memenuhi kualifikasi
					teknis, tetapi juga selaras dengan budaya perusahaan Anda. Dengan pendekatan rekrutmen yang strategis, kami
					membantu Anda membangun tim yang kuat dan sukses.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-12 text-center">
				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="network-wired" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Jaringan Talenta yang Luas</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Kami memiliki akses ke database dan jaringan profesional yang eksklusif, memungkinkan kami untuk
						menjangkau kandidat pasif terbaik di berbagai industri dan level posisi.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="user-tie" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Pendekatan Rekrutmen Personal</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Kami memahami bahwa setiap perusahaan unik. Proses rekrutmen kami disesuaikan untuk menemukan talenta
						yang tidak hanya memiliki keahlian, tetapi juga cocok dengan budaya dan tujuan jangka panjang perusahaan
						Anda.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="award" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Spesialisasi Headhunting</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Tim kami adalah ahli dalam `headhunting`. Kami proaktif mencari kandidat terbaik, termasuk mereka
						yang tidak secara aktif mencari pekerjaan, untuk mengisi posisi-posisi kunci Anda.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="hourglass-half" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Hemat Waktu & Biaya</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Dengan menyerahkan proses rekrutmen kepada kami, Anda dapat fokus pada bisnis inti Anda. Kami
						mengurangi waktu dan biaya yang dihabiskan untuk mencari, menyaring, dan mewawancarai kandidat.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="handshake" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Mitra Konsultasi Strategis</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Kami tidak hanya mencarikan kandidat. Kami bertindak sebagai mitra strategis, memberikan wawasan pasar,
						tren rekrutmen, dan saran untuk membantu Anda membuat keputusan yang tepat.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<div class="bg-orange-50 text-orange-500 p-5 rounded-full shadow-md shadow-orange-100 mb-4">
						<font-awesome-icon icon="clipboard-check" class="text-2xl" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Verifikasi & Garansi Kualitas</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						Setiap kandidat yang kami rekomendasikan telah melalui proses penyaringan yang ketat. Kami juga menawarkan
						garansi penggantian untuk memastikan Anda mendapatkan kepuasan penuh.
					</p>
				</div>
			</div>
		</div>
	</section>


	<section class="container mx-auto px-4 py-12 bg-slate-100">
		<div class="mb-10 text-left">
			<h2 class="text-3xl font-bold text-center mb-12">Kategori pekerjaan populer</h2>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<div v-for="kategori in visibleCategories" :key="kategori.nama"
				class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer bg-white"
				:style="kategori.style">
				<span class="font-medium" :class="kategori.textColor">{{ kategori.nama }}</span>
				<span v-if="kategori.icon" :class="kategori.iconColor" class="ml-2">
					<i :class="kategori.icon"></i>
				</span>
			</div>

			<div v-if="showMore" v-for="kategori in hiddenCategories" :key="kategori.nama"
				class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer bg-white"
				:style="kategori.style">
				<span class="font-medium" :class="kategori.textColor">{{ kategori.nama }}</span>
				<span v-if="kategori.icon" :class="kategori.iconColor" class="ml-2">
					<i :class="kategori.icon"></i>
				</span>
			</div>
		</div>

		<div class="text-center mt-8">
			<button @click="toggleCategories"
				class="py-2 px-6 rounded-full font-semibold text-gray-600 border border-gray-300 hover:bg-gray-100 transition">
				{{ buttonText }}
			</button>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';

const showMore = ref(false);

const allCategories = [
	{ nama: 'Admin & HR', textColor: 'text-gray-800' },
	{ nama: 'Marketing', textColor: 'text-gray-800' },
	{ nama: 'Operasional', textColor: 'text-gray-800' },
	{ nama: 'Supply Chain & Logistik', textColor: 'text-gray-800' },
	{ nama: 'Business Development & Sales', textColor: 'text-gray-800' },
	{ nama: 'Akuntansi & Keuangan', textColor: 'text-gray-800' },
	{ nama: 'Desain', textColor: 'text-gray-800' },
	{ nama: 'Media & Komunikasi', textColor: 'text-gray-800' },
	{ nama: 'IT', textColor: 'text-gray-800' },
	{ nama: 'Teknik', textColor: 'text-gray-800' },
	{ nama: 'Pendidikan', textColor: 'text-gray-800' },
	{ nama: 'Kesehatan', textColor: 'text-gray-800' },
	{ nama: 'Legal', textColor: 'text-gray-800' },
];

const visibleCategories = computed(() => {
	return allCategories.slice(0, 12);
});

const hiddenCategories = computed(() => {
	return allCategories.slice(12);
});

const buttonText = computed(() => {
	return showMore.value ? 'Sembunyikan Kategori' : 'Lihat Semua Kategori';
});

const toggleCategories = () => {
	showMore.value = !showMore.value;
};
</script>