import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
   space: '8zj78w68br69',
   environment: 'master',
   accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
   const [loading, setLoading] = useState(false);
   const [projects, setProjects] = useState([]);

   const getData = async() => {
      try {
         const response = await client.getEntries({content_type: 'projects'});
         const project = response.items.map((item)=>{
            const {image, title, url} = item.fields;
            const id = item.sys.id;
            const img = image?.fields?.file?.url

            return {img, title, url, id}
         })
         
         setProjects(project)
         setLoading(false)
      } catch (error) {
         console.log(error);
         
         setLoading(false)
      }
   }
   useEffect(()=>{
      getData()
   },[])
   
   return {loading, projects}
}

export default useFetchProjects




// const useFetchProjects = () =>{
//    const [loading, setLoading] = useState(true);
//    const [projects, setProjects] = useState([]);
//    const [error, setError] = useState(null);

//    const getData = async () => {
//       try {
//          const response = await client.getEntries({content_type: 'projects'})
//          console.log(response);
//          console.log(response.items);

//          setProjects(response.items)
//          setLoading(false)
//       } catch (error) {
//          console.log(error);
//          setError(error)
//          setLoading(false)
//       }
//    }

//    useEffect(()=>{
//       getData()
//    },[])

//   return {loading, projects, error}
// }

//  export default useFetchProjects;