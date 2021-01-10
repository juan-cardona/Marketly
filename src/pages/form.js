import React from "react"
import Layout from '../components/layout/Layout';

export default function About({ data }) {
  return (
    <Layout>
        <div class="w-full">
  <div class="h-2 bg-indigo"></div>
    <div class="flex items-center justify-center h-screen">
      <div class="container mx-24 bg-white rounded shadow-lg">
        <div class="px-12 py-6">
          <div class="text-center">
            <h1 class="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">Dejanos tu correo y nosotros te contactaremos</h1>
            <div class="w-full text-center">
              <form action="#" name="contact" netlify>
                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                  <input type="email" placeholder="jenny.rosen@example.com" class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"/>
                  <button type="submit" class="appearance-none bg-indigo text-black text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-indigo-light">Get started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </Layout>
  )
}

