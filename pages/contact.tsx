import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/Button'
import { PhoneCall, MapPin, EnvelopeOpen } from '@phosphor-icons/react'

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('Your Full Name is Required!'),
    email: yup.string().email().required('Enter a valid email address!'),
    age: yup.number().positive().integer().min(18).required('Enter a valid age!'),
    textarea: yup.string().required('Your Message is Required!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className=" bg-white py-12 text-gray-900 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8 ">
        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-300 p-4 py-6 shadow-lg md:px-6 md:py-0">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pb-4 pt-2">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <MapPin size={48} color="#ff66b3" weight="duotone" />
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <PhoneCall size={48} color="#ff66b3" weight="duotone" />
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <EnvelopeOpen size={48} color="#ff66b3" weight="duotone" />
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          novalidate=""
          className="ng-untouched ng-pristine ng-valid flex flex-col space-y-6 py-6 md:px-6 md:py-0"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              className="focus:ring-primary-dark block w-full rounded-md bg-gray-100 shadow-sm focus:ring focus:ring-opacity-75"
              type="text"
              placeholder="Full Name..."
              {...register('fullName')}
            />
            <p className="text-sm text-red-500">{errors.fullName?.message}</p>
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="text"
              placeholder="Email..."
              {...register('email')}
              className="focus:ring-primary-dark block w-full rounded-md bg-gray-100 shadow-sm focus:ring focus:ring-opacity-75"
            />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              {...register('textarea')}
              className="focus:ring-primary-dark block w-full rounded-md bg-gray-100 focus:ring focus:ring-opacity-75"
            ></textarea>
          </label>
          <Button className="self-center" color="primary">
            <input type="submit" />
          </Button>
        </form>
      </div>
    </section>
  )
}
export default Form
