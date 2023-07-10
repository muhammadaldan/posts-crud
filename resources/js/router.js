import { createRouter, createWebHistory } from "vue-router";
import PostList from "./Components/PostList.vue";
import PostDetail from "./Components/PostDetail.vue";
import PostEdit from "./Components/PostEdit.vue";
import PostDelete from "./Components/PostDelete.vue";

const routes = [
    { path: "", component: PostList },
    { path: "/:id", component: PostDetail },
    { path: "/:id/edit", component: PostEdit },
    { path: "/:id/delete", component: PostDelete },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
