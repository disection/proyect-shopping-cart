  import {useState,UseEffect} from 'react'
  import {useForm} from 'react-hook-form'
  import "./App.js"

  function App (){
    const [name,setName] = useState("")
    const [nameHasError,setNameHasError] = useState(false)
  
    const {
      register,
      handleSubmit,
      errors,
    }

    
    



































const Form = () => {
    return (
        <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-dark text-white p-3 border rounded'
              >
                <div className='form-group mb-3'>
                  <label htmlFor=''>Datos</label>
                  <input
                    type='text'
                    className='form-control'
                    name='Datos'
                    placeholder='Datos'
                    {...register('nombre', { required: true, maxLength: 10 })}
                  />
                  {errors.nombre && errors.nombre.type === 'required' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                      Este campo es requerido!
                    </div>
                  )}
                  {errors.nombre && errors.nombre.type === 'maxLength' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                      El límite de caracteres es de 10
                    </div>
                  )}
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor=''>Email</label>
                  <input
                    type='Desription'
                    className='form-control'
                    name='name'
                    {...register('Description', {
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format'
                      }
                    })}
                  />
                  {errors.email && errors.email.type === 'pattern' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor=''>Price</label>
                  <input
                    type='text'
                    className='form-control'
                    name='name'
                    {...register('generacion')}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor=''>Fecha de nacimiento</label>
                  <input
                    type='date'
                    className='form-control'
                    name='name'
                    {...register('fecha_de_nacimiento')}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor=''>Edad</label>
                  <input
                    type='number'
                    className='form-control'
                    name='name'
                    {...register('edad')}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor=''>CURP</label>
                  <input
                    type='text'
                    className='form-control'
                    name='name'
                    {...register('curp')}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Guardar Koder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Form