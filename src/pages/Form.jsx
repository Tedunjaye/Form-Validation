import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from "react-router-dom"

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email:yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    userName: yup.string().min(4).max(20).required(),
    password: yup.string().min(5).max(20).required(),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required(),
    mobileNumber: yup.number().positive().integer().max(99999999999).required()
  })

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        Form Validation In Vite + React
      </h1>
      <h4>
        Sign Up Page
      </h4>
      <input type="text" placeholder="Full Name..." {...register("fullName")}/>
      <h6>{errors.fullName?.message}</h6>
      <input type="text" placeholder="Email..." {...register("email")}/>
      <h6>{errors.email?.message}</h6>
      <input type="number" placeholder="Age..." {...register("age")}/>
      <h6>{errors.age?.message}</h6>
      <input type="text" placeholder="Username..." {...register("userName")}/>
      <h6>{errors.userName?.message}</h6>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <h6>{errors.password?.message}</h6>
      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <h6>{errors.confirmPassword?.message}</h6>
      <input type="number" placeholder="Mobile Number..." {...register("mobileNumber")}/>
      <h6>{errors.mobileNumber?.message}</h6>
      <input type="submit"/>
      &emsp;&emsp;&emsp; Already have an account?
      <Link to="/">Login</Link>
    </form>
  )
}