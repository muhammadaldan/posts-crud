<template>
    <div class="flex justify-center">
        <div class="w-2/3">
            <h1 class="text-3xl font-bold mb-4">Edit Post</h1>
            <form @submit.prevent="updatePost">
                <div
                    class="mb-5 py-4 flex flex-wrap flex-grow justify-end items-end w-full"
                >
                    <div class="w-full mb-5">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="title"
                            >Title</label
                        >
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="title"
                            v-model="post.title"
                            type="text"
                        />
                        <span v-if="errors.title" class="text-red-500">{{
                            errors.title[0]
                        }}</span>
                    </div>

                    <div class="w-full">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="content"
                            >Content</label
                        >
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="content"
                            v-model="post.content"
                            type="text"
                        />
                        <span v-if="errors.content" class="text-red-500">{{
                            errors.content[0]
                        }}</span>
                    </div>
                    <button
                        type="submit"
                        class="inline-block mb-2 ml-3 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline mt-5"
                    >
                        Update Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            post: {
                title: "",
                content: "",
            },
            errors: [],
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
        updatePost() {
            const postId = this.$route.params.id;
            axios
                .put(`/api/posts/${postId}`, this.post)
                .then((response) => {
                    alert("Post berhasil diupdate.");
                    this.$router.push("/");
                })
                .catch((error) => {
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        this.errors = error.response.data.errors;
                    } else {
                        console.log(error);
                    }
                });
        },
    },
};
</script>
