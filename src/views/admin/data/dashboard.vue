<template>
 <div class="mt-35
  ml-80 mr-5 mb-35">
    <div class="mb-10 mt-20 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card components -->
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-blue-400 p-3 text-white"
          viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943f 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd" />
        </svg>
        <p class="mt-3 font-medium text-sm">Sessions</p>
        <p class="mt-1 text-lg font-medium">
          23.4k
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-rose-400 p-3 text-white"
          viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <p class="mt-3 font-medium text-sm">Users</p>
        <p class="mt-1 text-lg font-medium">
          23.4k
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-green-400 p-3 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-3 font-medium text-sm">Revenue</p>
        <p class="mt-1 text-lg font-medium">
          $23.4k
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-green-400 p-3 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-3 font-medium text-sm">Revenue</p>
        <p class="mt-1 text-lg font-medium">
          $23.4k
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <!-- Left column -->
      <div class="col-span-1">
        <!-- Content for the left column -->
        <!-- New card for the area chart -->
        <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <!-- Area chart content -->
          <div class="flex justify-between">
            <div>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
            </div>
            <!-- optional: add loading spinner or placeholder -->
          </div>
          <div id="area-chart"></div>
          <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <!-- additional content... -->
          </div>
        </div>
      </div>
      <!-- Right column -->
      <div class="col-span-1">
        <!-- Content for the right column -->


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Id
        </th>
        <th scope="col" class="px-6 py-3">
          Kategori
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="kategori in getDataKategori" :key="kategori.id">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{kategori.id}}
        </th>
        <td class="px-6 py-4">
         {{kategori.kategori}}
        </td>
      </tr>
    </tbody>
  </table>
</div>


      </div>
    </div>


  </div>
</template>

<script>
import ApexCharts from 'apexcharts';
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('kategori', ['getDataKategori'])
    },
    methods: {
        ...mapActions('kategori', ['fetchDataGerakan']),
    },
  mounted() {
    this.fetchDataGerakan();
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (document.getElementById("area-chart")) {
      const chart = new ApexCharts(document.getElementById("area-chart"), options);
      chart.render();
    }
  }
}
</script>
