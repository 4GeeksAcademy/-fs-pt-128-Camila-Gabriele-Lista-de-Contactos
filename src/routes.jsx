// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Form } from "./pages/Form";

export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.



      //ANOTACIONES DE CLASE POR CAMI =)
      //el outlet viene del routes: va a ser todo aquello que tengo dentro de esa ruta (en el componente routes)
      //esta es la ruta padre y dentro tiene otros elementos y sirve como una maqueta
      //necesitamos tres cosas: 1: quien me envia a la ruta osea quien me hace cambiar--> el link: a donde va, cual es la ruta (dentro de mi pagina, le pongo el nombre que coincida con mi routes)
      //2: tener la vista que se va a mostrar, entonces tengo que llevarme lo que necesito a mi nuevo componente
      //3:que exista la ruta, entonces creo mi ruta(path) en mi archivo de routes y el elemento es el que quiero mostar(element)
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />  
      </Route>
    )
);

// : se usa cuando un elemento va a cambiar, se crea un objeto con llave valor dentro (es para indicar que algo cambia)
// <Route path="/demo" element={<Demo />} /> // ruta estatica
// /* <Route path="/edit/:id" element={<Form />} /> */  ejemplo de ruta dinamica