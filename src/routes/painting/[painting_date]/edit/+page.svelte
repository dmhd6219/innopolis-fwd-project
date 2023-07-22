<script lang="ts">
    interface Painting {
        date: Date;
        photoFile: File | null;
        title: string | null,
        desc: string | null
    }

    let painting: Painting = {
        date: new Date(),
        photoFile: null,
        title: null,
        desc: null
    };



</script>

<section class="flex flex-col items-center justify-center h-screen mx-8">
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <p class="font-bold mt-4 mb-8 text-center">Editing a Painting</p>

        <form method="post" class="space-y-4" enctype="multipart/form-data">
            <div>
                <label class="block text-sm font-medium">
                    Title:
                    <input
                            type="text"
                            bind:value={painting.title}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            name="title"
                            required
                    />
                </label>
            </div>

            <div>
                <label class="block text-sm font-medium">
                    Photo File:
                    <input
                            type="file"
                            accept="image/png, image/jpeg"
                            bind:value={painting.photoFile}
                            class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            name="file"
                    />
                </label>
            </div>

            <div>
                <label class="block text-sm font-medium">
                    Description:
                    <textarea
                            bind:value={painting.desc}
                            class="form-textarea mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows="2"
                            name="desc"
                            required
                    ></textarea>
                </label>
            </div>

            <div class="text-center">
                <button type="submit" class="btn px-4 py-2">Submit</button>
            </div>
        </form>
    </div>
</section>
