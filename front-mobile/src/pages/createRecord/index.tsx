import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/header';

const CreateRecord =()=>{
return (
    <>
    <Header/>
    <Text>Hello create record</Text>
    </>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  
  });
export default CreateRecord;