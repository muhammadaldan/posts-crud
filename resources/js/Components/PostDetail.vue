<template>
    <div class="flex justify-center">
        <div class="w-2/3">
            <h1 class="text-3xl font-bold mb-4">Detail Post</h1>
            <div class="bg-gray-800 p-4">
                <div class="mb-2">
                    <strong class="text-white">ID:</strong> {{ post.id }}
                </div>
                <div class="mb-2">
                    <strong class="text-white">Judul:</strong> {{ post.title }}
                </div>
                <div>
                    <strong class="text-white">Konten:</strong>
                    {{ post.content }}
                </div>
            </div>
            <router-link to="/" class="mt-4 text-blue-500 hover:text-blue-700"
                >Kembali ke Daftar Post</router-link
            >
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            post: {},
        };
    },
    mounted() {
        this.getPost();
    },
    methods: {
        getPost() {
            const postId = this.$route.params.id;
            axios
                .get(`/api/posts/${postId}`)
                .then((response) => {
                    this.post = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
