<script setup>
import Button from '@/Components/Button.vue'
import BreezeCheckbox from '@/Components/Checkbox.vue'
import BreezeGuestLayout from '@/Layouts/Guest.vue'
import BreezeInput from '@/Components/Input.vue'
import BreezeInputError from '@/Components/InputError.vue'
import BreezeLabel from '@/Components/Label.vue'
import Header from '@/Components/Header.vue'
import { Head, Link, useForm } from '@inertiajs/inertia-vue3'
import { onMounted } from 'vue'
onMounted(() => {
    //launch the register modal
    $('.modal').fadeIn();

    //when the modal is closed
    $('.close-reg').on("click", function () {

    $('.modal').fadeOut();

    history.back();

    });
});

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
<Header />

<!-- Wrapper -->
<div class="wrapper">
    <!--login form -->
    <div class="login-and-register-form modal">
        <div class="main-overlay"></div>
        <div class="main-register-holder">
            <div class="main-register fl-wrap">
                <div class="close-reg"><i class="fa fa-times"></i></div>
                <h3>Welcome to <span>Find<strong>Houses</strong></span></h3>
                
                
                <div id="tabs-container">
                    <div class="tab">
                        <div id="tab-1" class="tab-contents">
                            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                                {{ status }}
                            </div>
                            <div class="custom-form">
                                <form  @submit.prevent="submit">
                                    <label>Username or Email Address * </label>
                                    <input name="email" id="email" type="text" v-model="form.email" required autofocus autocomplete="username">
                                    <BreezeInputError class="mt-2" :message="form.errors.email" />
                                    <label>Password * </label>
                                    <input name="password" id="password" type="password" v-model="form.password" required autocomplete="current-password">
                                    <BreezeInputError class="mt-2" :message="form.errors.password" />
                                    <button type="submit" class="log-submit-btn"><span>Log In</span></button>
                                    <div class="clearfix"></div>
                                    <div class="filter-tags">
                                        <BreezeCheckbox name="remember" v-model:checked="form.remember" />
                                        <label for="remember">Remember me</label>
                                    </div>
                                </form>
                                <div class="lost_password">
                                    <Link v-if="canResetPassword" :href="route('password.request')">Lost Your Password?</Link>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--login form end -->

    

</div>
<!-- Wrapper / End -->


</template>
