import { createRouter, createWebHistory } from 'vue-router'
import GalleryLayout from '../Gallery/GalleryLayout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage,
    },
    {
        path: '/',
        name: 'About',
        component: Aboutpage,
    },
    {
        path: '/',
        name: 'Gallery',
        component: GalleryLayout,
    },

    {
        path: '/',
        name: 'Articles',
        component: Articles,
    }

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;