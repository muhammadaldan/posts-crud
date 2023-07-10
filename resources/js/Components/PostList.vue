<template>
    <div>
        <div class="w-full bg-gray-100 pb-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex flex-col">
                    <div class="mb-4 mt-5">
                        <h1
                            class="text-3xl font-bolder leading-tight text-gray-900"
                        >
                            Create Posts
                        </h1>
                    </div>
                    <form @submit.prevent="createPost">
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
                                    v-model="newPost.title"
                                    type="text"
                                />
                                <span
                                    v-if="errors.title"
                                    class="text-red-500"
                                    >{{ errors.title[0] }}</span
                                >
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
                                    v-model="newPost.content"
                                    type="text"
                                />
                                <span
                                    v-if="errors.content"
                                    class="text-red-500"
                                    >{{ errors.content[0] }}</span
                                >
                            </div>
                            <button
                                type="submit"
                                class="inline-block mb-2 ml-3 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline mt-5"
                            >
                                Create new post
                            </button>
                        </div>
                    </form>
                    <div class="mb-4 mt-5">
                        <h1
                            class="text-3xl font-bolder leading-tight text-gray-900"
                        >
                            Daftar Posts
                        </h1>
                    </div>
                    <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div
                            class="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200"
                        >
                            <table class="min-w-full">
                                <!-- HEAD start -->
                                <thead>
                                    <tr
                                        class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider"
                                    >
                                        <th
                                            class="px-6 py-3 text-left font-medium"
                                        >
                                            ID
                                        </th>
                                        <th
                                            class="px-6 py-3 text-left font-medium"
                                        >
                                            Title
                                        </th>
                                        <th
                                            class="px-6 py-3 text-left font-medium"
                                        >
                                            Content
                                        </th>
                                        <th
                                            class="px-6 py-3 text-left font-medium"
                                        ></th>
                                    </tr>
                                </thead>
                                <!-- HEAD end -->
                                <!-- BODY start -->
                                <tbody class="bg-white">
                                    <tr v-for="post in posts" :key="post.id">
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                        >
                                            <div
                                                class="text-sm leading-5 text-gray-900"
                                            >
                                                {{ post.id }}
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                        >
                                            <span
                                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                            >
                                                {{ post.title }}
                                            </span>
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                                        >
                                            <div class="max-w-sm">
                                                {{ post.content }}
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                                        >
                                            <router-link
                                                :to="'/' + post.id"
                                                class="text-blue-500 hover:text-blue-700"
                                                >Detail</router-link
                                            >
                                            <router-link
                                                :to="'/' + post.id + '/edit'"
                                                class="text-yellow-500 hover:text-yellow-700 ml-2"
                                                >Edit</router-link
                                            >
                                            <button
                                                @click="deletePost(post.id)"
                                                class="text-red-500 hover:text-red-700 ml-2"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                                <!-- BODY end -->
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center mt-5">
                <button
                    class="bg-indigo-600 hover:bg-indigo-400 text-white py-2 px-4 rounded-l"
                    :disabled="currentPage === 1"
                    @click="goToPage(1)"
                >
                    First
                </button>
                <button
                    class="bg-indigo-600 hover:bg-indigo-400 text-white py-2 px-4"
                    :disabled="currentPage === 1"
                    @click="goToPage(currentPage - 1)"
                >
                    Prev
                </button>
                <template v-for="page in totalPages">
                    <button
                        class="bg-indigo-600 hover:bg-indigo-400 text-white py-2 px-4"
                        :class="{ 'font-bold': page === currentPage }"
                        @click="goToPage(page)"
                    >
                        {{ page }}
                    </button>
                </template>
                <button
                    class="bg-indigo-600 hover:bg-indigo-400 text-white py-2 px-4 rounded-r"
                    :disabled="currentPage === totalPages"
                    @click="goToPage(currentPage + 1)"
                >
                    Next
                </button>
                <button
                    class="bg-indigo-600 hover:bg-indigo-400 text-white py-2 px-4 ml-2"
                    :disabled="currentPage === totalPages"
                    @click="goToPage(totalPages)"
                >
                    Last
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            posts: [],
            currentPage: 1,
            totalPages: 0,
            newPost: {
                title: "",
                content: "",
            },
            errors: [],
        };
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios
                .get("/api/posts", {
                    params: {
                        page: this.currentPage,
                    },
                })
                .then((response) => {
                    this.posts = response.data.data;
                    this.totalPages = response.data.last_page;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        createPost() {
            axios
                .post("/api/posts", this.newPost)
                .then((response) => {
                    alert("Post berhasil ditambahkan.");
                    this.newPost.title = "";
                    this.newPost.content = "";
                    this.getPosts();
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
        deletePost(id) {
            if (confirm("Apakah Anda yakin ingin menghapus post ini?")) {
                axios
                    .delete(`/api/posts/${id}`)
                    .then((response) => {
                        alert("Post berhasil dihapus.");
                        this.getPosts();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        goToPage(page) {
            this.currentPage = page;
            this.getPosts();
        },
    },
};
</script>
