import React from 'react'
import { Button, Card, CheckBox, Input } from 'react-native-elements'
import { Controller, OnSubmit, useForm } from 'react-hook-form'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ChannelStackParamList } from '.'
import { CreateChannelInput, useCreateChannelMutation } from '../../graphql'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type Props = {
  navigation: StackNavigationProp<ChannelStackParamList>
}

export const CreateChannelScreen: React.FC<Props> = ({ navigation }) => {
  const { control, errors, getValues, handleSubmit } = useForm<CreateChannelInput>()
  const [createChannelMutation] = useCreateChannelMutation()

  const onSubmit: OnSubmit<CreateChannelInput> = async (data) => {
    await createChannelMutation({ variables: data })
    navigation.pop()
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView bounces={false}>
        <Card>
          <Controller
            as={Input}
            control={control}
            name='name'
            placeholder='Name'
            rules={{ required: 'Name is required' }}
            onChange={([text]) => text}
            onChangeName='onChangeText'
            errorMessage={errors.name?.message}
          />
          <Controller
            control={control}
            name='public'
            as={CheckBox}
            defaultValue={false}
            center
            iconRight
            title='Public'
            onChange={() => !getValues().public}
            onChangeName='onPress'
            checked={getValues().public}
          />
          <Button onPress={handleSubmit(onSubmit)} />
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
