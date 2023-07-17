<script>
    import CollectionImage from '$lib/collection.png'
    let name = '';
    let email = '';
    let country = '';
    let message = '';
  
    function handleSubmit() {
      // ТODO: Handle form submission here
      console.log('Form submitted');
    }
  </script>
        <!-- <div class="text-center">
          <img src={CollectionImage} alt="collection" class="">
        </div> -->
  <section class="flex flex-col items-center justify-center h-screen ">
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <!-- <h2 class="text-3xl font-semibold mb-6">Contact</h2> -->
      <p class="mt-4 text-center">If you have any questions, please feel free to send a message.</p>
      <p class="text-center mb-4">Thank you, Hiroshi.</p>
  
      <form on:submit={handleSubmit} class="space-y-4">
        <div>
          <label class="block text-sm font-medium">
            Name:
            <input type="text" bind:value={name} class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </label>
        </div>
  
        <div>
          <label class="block text-sm font-medium">
            Email:
            <input type="email" bind:value={email} class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </label>
        </div>
  
        <div>
          <label class="block text-sm font-medium">
            Country:
            <input type="text" bind:value={country} class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </label>
        </div>
  
        <div>
          <label class="block text-sm font-medium">
            Message:
            <textarea bind:value={message} class="form-textarea mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" rows="4" required></textarea>
          </label>
        </div>
  
        <div class="text-center">
          <button type="submit" class="btn px-4 py-2">Send</button>
        </div>
      </form>
    </div>
  </section>

  
  