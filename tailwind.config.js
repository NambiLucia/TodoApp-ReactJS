/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

 fontFamily: {
    'Poppins': ['Poppins'],
    'Roboto': ['Roboto'],

    },
    backgroundImage: {
      'image1': "url('.public/undraw_to_do_list_re_9nt7.svg')",
    
    },
  },
 
   
   
  },
  plugins: [],
}

