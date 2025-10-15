import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Allapps from '../Allapps/Allapps';
import Description from '../pages/Description/Description';
import Error from '../Error/Error';
import ErrorApp from '../ErrorApp/ErrorApp';
import Installations from '../Installations/Installations';




export const loader = async () => {
  const res = await fetch('/Data.json');
  return res.json();
};

export const appLoader = async ({ params }) => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  const app = data.find((item) => item.id === parseInt(params.id));
  return app;
};

export const router= createBrowserRouter([{
path:"/",
element:<Root/>,


children:[
    {
        index: true,
        path:"/",
        element:<Home/>,
        loader:loader,
        errorElement:<Error/>,
    },
{
    path:"/Allapps",
   element:<Allapps/>,
    loader:loader,
   children:[
  {
   path: "/Allapps/:id",
  loader: appLoader,
  errorElement: <ErrorApp />,
  },

    {
      path:"/Allapps/notfound",
      element:<ErrorApp/>,
    },
   ],
},
{
path:"Description/:id",
element:<Description/>,
loader:appLoader,
errorElement:<Error/>,
},
{
  path:"*",
  element:<Error/>,

},
{
  path:"/Installations/:id",
   element:<Installations/>,
    loader:appLoader,
    errorElement:<Error/>,
},

],

},
]);
