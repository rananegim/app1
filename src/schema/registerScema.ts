import * as zod from 'zod';

export  let schema = zod.object({
  name:zod.string().nonempty('name is required').min(3 , 'min length 3').max(8, 'max length 8'),
  email:zod.string().nonempty('email is required').email('invalid email'),
  phone:zod.string().nonempty('phone  is required').regex(/^01[0125][0-9]{8}$/, 'invalid phone'),
  password:zod.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  rePassword:zod.string().nonempty('repasssword is required')

}).refine((opj) => {
  if (opj.password === opj.rePassword){
    return true 
  }else{
    return false
  }
} , {path : ['rePassword'], message: 'password and repasword must be matched'})