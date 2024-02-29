const imagPlaceholder="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"


export const Carduser = (users)=>{
    

  return `

<div class="w-full max-w-sm p-8 lg:p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div class="flex flex-col items-center pb-10">
        <img class="w-28 h-28 object-cover  mb-3 m-4 rounded-full shadow-lg" src="${users.image ?? imagPlaceholder}" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${users.firstName ?? FirstName} ${users.lastName ?? LastName}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">${users.email ?? Email_Address}</span>
       
        <div class="flex mt-4 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
    </div>
</div>`
}
 


