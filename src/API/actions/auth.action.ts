'use server'
import * as zod from 'zod';
import { schema } from "@/schema/registerScema";
import { LoginSchema } from '@/schema/loginSchema';
import { cookies } from 'next/headers';

export async function userRegister(data:zod.infer<typeof schema >) {
     try{
      const response  = await fetch (`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
        method:'POST',
        body: JSON.stringify(data),
        headers : {
          "content-type":"application/json"
        }
      })

      const payload = await response.json()
    //   console.log(payload)
    return response.ok;

    }catch(error) {
      console.log(error)

    }
}



// export async function IsLogin(data:zod.infer<typeof LoginSchema >) {
//      try{
//       const response  = await fetch (`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
//         method:'POST',
//         body: JSON.stringify(data),
//         headers : {
//           "content-type":"application/json"
//         }
//       })

//       const payload = await response.json()
//     //   console.log(payload)

//     if(response.ok){
//       const cookie = await  cookies()
//       cookie.set('userToken',payload.token , {
//         httpOnly:true,
//       } )
//     }
//     return response.ok;

//     }catch(error) {
//       console.log(error)

//     }
// }

