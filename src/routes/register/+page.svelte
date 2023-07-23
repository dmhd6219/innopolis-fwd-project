<script lang="ts">

    interface RegisterForm {
        email: string,
        password: string,
        repeatedPassword: string
    }


    let formData: RegisterForm = {email: "", password: "", repeatedPassword: ""};

    export let data;
</script>

<svelte:head>
    <title>Register at Hiroshi Matsumoto site</title>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-8">
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <p class="font-bold mt-4 mb-8 text-center">Register</p>
        {#if data}
            <p style="color:red;">{data.error}</p>
        {/if}
        <form class="space-y-4" method="POST">
            <div>
                <label class="block text-sm font-medium">
                    Email:
                    <input
                            type="email"
                            bind:value={formData.email}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            name="email"
                    />
                </label>
            </div>

            <div>
                <label class="block text-sm font-medium">
                    Password:
                    <input
                            type="password"
                            bind:value={formData.password}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            name="password"
                    />
                </label>
            </div>

            <div>
                <label class="block text-sm font-medium">
                    Password again:
                    <input
                            type="password"
                            bind:value={formData.repeatedPassword}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            name="password-again"
                    />
                </label>
            </div>


            <p>Already have an account? <a href="/login">Log in</a></p>


            <div class="text-center">
                <button type="submit" class="btn px-4 py-2">Register</button>
            </div>
        </form>
    </div>
</section>
