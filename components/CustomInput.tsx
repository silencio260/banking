import React from 'react'
import { FormControl, FormField, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')

interface CustomInputType {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string; 
    placeholder: string;
    type?: string;
}


const CustomInput = ({control, name, label, placeholder, type = 'text'}: CustomInputType) => {

  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className="flex -full">
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            className="input-class mt-2"
                            type={type}
                            {...field}
                        />
                    </FormControl >

                </div>
            </div>

        )}
    />
  )
}

export default CustomInput