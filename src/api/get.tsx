// export const getAPI = (url:string) => {
//     return new Promise((resolve, reject)=>{
//         fetch(url)
//         .then((res)=>res.json())
//         .then((data)=> resolve(data));
//     });
// };

export const getAPI = async (endpoint: string): Promise<any> => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('It is Bad, Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  