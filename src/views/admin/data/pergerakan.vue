<template>
    <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
  <div class="bg-blue-800 px-10 py-10 text-center text-white">
    <p class="font-serif text-2xl font-semibold tracking-wider">Submit your request</p>
    <p class="text-center text-blue-100">Please keep it short and succinct</p>
  </div>

  <div class="space-y-4 px-8 py-10">
    <label class="block" for="name">
      <p class="text-gray-600">Pertanyaan</p>
      <textarea class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Point</p>
      <input class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="number" placeholder="Point" />
    </label>
    
    <label class="block" for="name">
      <p class="text-gray-600">Pilih Kategori</p>
      <select
                class="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1 border-gray-300 text-gray-600">
                <option value="" disabled selected>Pilih Kategori</option>
                <option value="LastName1">Kategori 1</option>
                <option value="LastName2">Kategori 2</option>
                <option value="LastName3">Kategori 3</option>
            </select>
    </label>
    
    <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
  </div>
</div>

</template>