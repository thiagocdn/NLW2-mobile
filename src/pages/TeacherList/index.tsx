import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../components/PageHeader';

import styles from './styles';
import TeacherItem from '../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
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
              style={styles.input}
              placeholder='Qual a matéria?'
            />

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text> 
                <TextInput
                  placeholderTextColor='#C1BCCC'
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text> 
                <TextInput
                  placeholderTextColor='#C1BCCC'
                  style={styles.input}
                  placeholder="Qual horário?"
                />
              </View>

            </View>

            <RectButton style={styles.submitButton}>
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