import React from 'react'
import { Button, Input } from 'react-native-elements'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { SignInWithEmailProps } from '../../lib/firebase'

type AuthenticationFormProps = {
  buttonProps: {
    title: string
    onSubmit: (props: SignInWithEmailProps) => Promise<any>
  }
}

export const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ buttonProps }) => {
  const { errors, handleSubmit, register, setValue } = useForm<SignInWithEmailProps>()

  return (
    <View>
      <Input
        placeholder='Email'
        keyboardType='email-address'
        ref={() =>
          register({ name: 'email' }, {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
        onChangeText={text => setValue('email', text, true)}
        errorMessage={errors.email?.message}
      />
      <Input
        placeholder='Password'
        secureTextEntry
        ref={() => register({ name: 'password' }, { required: 'Password is required' })}
        onChangeText={text => setValue('password', text, true)}
        errorMessage={errors.password?.message}
      />
      <Button title={buttonProps.title} onPress={handleSubmit(buttonProps.onSubmit)} />
    </View>
  )
}
