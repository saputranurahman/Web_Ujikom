<template>
    <header
        class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
        <a href="#" class="flex items-center whitespace-nowrap font-black">
            <span class="mr-2 w-8">
                <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-abstract-s-logo-design_460848-13703.jpg?t=st=1708921030~exp=1708924630~hmac=6cc3567eca85920bfd57d73f43cc569a6e769293f63ab6e557dd41bd7293387b&w=740"
                    alt="" style="width: fit-content;" />
            </span>
            MINDFULL MOMENT
        </a>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </label>
        <nav aria-label="Header Navigation"
            class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
            <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                <li class="lg:mr-12"><a
                        class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        href="#">Home</a></li>
                <li class="lg:mr-12"><a
                        class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        href="#">About</a></li>
                <li class="lg:mr-12"><a
                        class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        href="#">Contact</a></li>
            </ul>
            <hr class="mt-4 w-full lg:hidden" />
            <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                <a href="/login" title=""
                    class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50">
                    Log in </a>
                <a href="/register" title=""
                    class="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">Daftar</a>
            </div>
        </nav>
    </header>
    <!-- tampilan 1 -->
    <div class="flex flex-row m-7 px-7">
        <div class="basis-1/2 m-2">
            <h1 class="selamatdatang pt-16 pl-15 text-3xl font-bold italic text-center text-blue-900">
                Selamat datang di MindfullNest!
            </h1>
            <p class="text-lg text-gray-700 px-10 py-6">
                Temukan ketenangan dan kebahagiaan dalam perjalanan kesadaran diri Anda di sini. Dengan beragam program
                meditasi, yoga, dan konseling pribadi, kami siap membantu Anda mencapai kesejahteraan holistik. Mari
                bergabung dengan komunitas kami dan mulailah hari Anda dengan pikiran yang tenang dan hati yang lapang.
            </p>
            <p class="text-lg px-10 py-6 text-gray-700">
                Selamat menjelajahi!
            </p>

        </div>
        <div class="basis-1/2 mr-30 flex justify-center">
            <img src="https://img.freepik.com/free-vector/flat-business-person-meditating_23-2148917427.jpg?t=st=1708921776~exp=1708925376~hmac=c4dc1b98ef6fc73cbc76c37393bc60acb2270f2c22400643cf16a8e8a6ff3757&w=740"
                alt="" width="75%">
        </div>
    </div>

    <section class="w-screen bg-white py-10 text-gray-800">
  <div class="container mx-auto w-full max-w-screen-xl">
    <div class="w-full"> 
        <h2 class="text-center text-2xl font-extrabold">Kami disini membantu anda merasa lebih baik.</h2>

    </div>
    <div class="flex flex-col lg:flex-row m-7 px-7">
      <div class="w-full p-4 text-left lg:w-1/3">
        <hr class="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 class="font-sans text-4xl font-light leading-10">Kurangi stres.</h3>
        <p class="my-5 text-gray-600"> Distinctio assumenda tenetur sequi, nemo, error illum dolorem dolor voluptatum beatae dignissimos nulla dolores delectus similique blanditiis praesentium deserunt?</p>
      </div>
      <div class="w-full p-4 text-left lg:w-1/3">
        <hr class="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 class="font-sans text-4xl font-light leading-10">Tidur lebih nyenyak.</h3>
        <p class="my-5 text-gray-600">Deleniti earum nulla repudiandae esse delectus. Dolorem, hic animi sit pariatur ducimus commodi tempore.</p>
      </div>
      <div class="w-full p-4 text-left lg:w-1/3">
        <hr class="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 class="font-sans text-4xl font-light leading-10">Hidup penuh kesadaran.</h3>
        <p class="my-5 text-gray-600">Lorem ipsum dolor, situos unde voluptatibus corrupti similique aperiam. Molestias corporis numquam quos dolorem culpa ullam ad. Ipsa quidem excepturi mollitia? Expedita, sequi?</p>
      </div>
    </div>
    
  </div>
</section>

</template>