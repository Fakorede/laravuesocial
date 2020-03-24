<template>
    <div class="flex flex-col items-center">
        <div class="relative mb-8">
            <div class="w-100 h-64 overflow-hidden z-10">
                <img
                    src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="user background image"
                    class="object-cover w-full"
                />
            </div>

            <div
                class="absolute flex items-center bottom-0 left-0 -mb-8 ml-12 z-20"
            >
                <div class="w-32">
                    <img
                        src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg"
                        alt="user profile image"
                        class="object-cover w-32 h-32 border-4 border-gray-200 rounded-full shadow-lg"
                    />
                </div>
                <p class="text-2xl text-gray-100 ml-4">
                    {{ user.data.attributes.name }}
                </p>
            </div>

            <div
                class="absolute flex items-center bottom-0 right-0 mb-4 mr-12 z-20"
            >
                <button class="py-1 px-3 bg-gray-400 rounded">
                    Add Friend
                </button>
            </div>
        </div>

        <p v-if="loading">Loading posts...</p>

        <Post
            v-else
            v-for="post in posts.data"
            :key="post.data.post_id"
            :post="post"
        />

        <p v-if="!loading && posts.data.length < 1">No posts found!</p>
    </div>
</template>

<script>
import Post from "../../components/Post";
import { mapGetters } from "vuex";
export default {
    name: "Show",
    components: {
        Post
    },
    data() {
        return {
            posts: null,
            loading: true
        };
    },
    mounted() {
        this.$store.dispatch("fetchUser", this.$route.params.userId);
    },
    computed: {
        ...mapGetters({
            user: "user"
        })
    }
};
</script>

<style scoped></style>
