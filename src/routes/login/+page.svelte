<script lang="ts">

    interface RegisterForm {
        email: string,
        password: string,
        repeatedPassword: string
    }

    let login = true;

    function changeMode() {
        login = !login;
        console.log("switched")
    }

    let data: RegisterForm = {email: "", password: "", repeatedPassword: ""};

    function handleLogin() {
        // TODO : connect backend
    }

    function handleRegistration() {
        // TODO : connect backend
    }
</script>

<section class="flex flex-col items-center justify-center h-screen mx-8">
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <p class="font-bold mt-4 mb-8 text-center">{login ? "Login" : "Register"}</p>

        <form on:submit={login ? handleLogin() : handleRegistration()} class="space-y-4">
            <div>
                <label class="block text-sm font-medium">
                    Email:
                    <input
                            type="email"
                            bind:value={data.email}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </label>
            </div>

            <div>
                <label class="block text-sm font-medium">
                    Password:
                    <input
                            type="password"
                            bind:value={data.password}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                    />
                </label>
            </div>

            {#if !login}
                <div>
                    <label class="block text-sm font-medium">
                        Password again:
                        <input
                                type="password"
                                bind:value={data.repeatedPassword}
                                class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                        />
                    </label>
                </div>
            {/if}

            // TODO : actual switch of modes
            {#if login}
                <p>Don't have an account?</p>
                <p>Register</p>
            {:else}
                <p>Already have an account?</p>
                <p>Log in</p>
            {/if}

            <div class="text-center">
                <button type="submit" class="btn px-4 py-2" on:submit={login ? handleLogin() : handleRegistration()}>
                    {login ? "Log in" : "Register"}
                </button>
            </div>
        </form>
    </div>
</section>
