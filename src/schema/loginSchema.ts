import * as zod from 'zod';

export  let LoginSchema = zod.object({
  email:zod.string().nonempty('email is required').email('invalid email'),
  password:zod.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),

})