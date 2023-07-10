<template>
    <div class="flex justify-center">
        <div class="w-2/3">
            <h1 class="text-3xl font-bold mb-4">Hapus Post</h1>
            <p class="text-white">
                Apakah Anda yakin ingin menghapus post ini?
            </p>
            <button
                @click="deletePost"
                class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
                Hapus
            </button>
            <router-link
                to="/posts"
                class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                >Batal</router-link
            >
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        deletePost() {
            const postId = this.$route.params.id;
            axios
                .delete(`/api/posts/${postId}`)
                .then((response) => {
                    alert("Post berhasil dihapus.");
                    this.$router.push("/posts");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
