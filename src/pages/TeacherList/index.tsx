import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../components/PageHeader';

import styles from './styles';
import TeacherItem from '../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    console.log('hello');

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    console.log(response.data);
    
    setTeachers(response.data);
  }

  return(
    <View style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name='filter' size={20} color='#FFF' />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor='#C1BCCC'
              value={subject}
              onChangeText={(text) => {setSubject(text)}}
              style={styles.input}
              placeholder='Qual a matéria?'
            />

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text> 
                <TextInput
                  placeholderTextColor='#C1BCCC'
                  value={week_day}
                  onChangeText={(text) => {setWeek_day(text)}}
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text> 
                <TextInput
                  value={time}
                  onChangeText={(text) => {setTime(text)}}
                  placeholderTextColor='#C1BCCC'
                  style={styles.input}
                  placeholder="Qual horário?"
                />
              </View>

            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>

          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default TeacherList;