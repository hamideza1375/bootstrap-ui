import React from 'react'
import { StyleSheet } from 'react-native';
import { Icon, Img, Input, Press, Span } from '../Html'

function SearchInput({ Register,navigate, icon, src, searcher, foodAsc, foodDesc, navigation, textSearch }) {
  return (
    <Span h={57} pt={2} w={'100%'} >
      <Span style={[styles.containHead]}>
        {icon && <Icon size={26} style={styles.iconHome} name={icon} onPress={() => navigation.navigate(navigate)} />}
        {src && <Press onClick={() => navigation.navigate(navigate)} mr={10} ml={5} ><Img w={50} h={45} mt={3} br={4} src={src} /></Press>}
        <Input w={'60%'} fg={1} icon="search" pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} value={textSearch} onChangeText={text => searcher(text)} p="جستجو"  mh={8} h={'85%'} mt={6} dr='rtl' />
       { foodAsc && <Span style={styles.containAscDesc}>
          <Icon onPress={foodAsc} size={21} style={{ padding: 4 }} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{ padding: 4 }} name="arrow-up" color='#555' />
        </Span>}

        {Register && <Span style={styles.containAscDesc}>
          <Span w={'100%'}h={40} br={5} mt={3} bgcolor="red"></Span>
        </Span>}

      </Span>
    </Span>);
}
export default SearchInput

const styles = StyleSheet.create({
  iconHome: {
    paddingHorizontal: 10,
    textAlign: 'center',
    paddingTop: 10,
    color: '#777',
  },
  containHead: {
    paddingRight:7,
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    minHeight: 55,
    maxHeight: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:'rgb(222, 221, 221)',
    borderTopWidth: 0,
    justifyContent: 'space-around',
    paddingBottom: 7,
  },
  containAscDesc: {
    width: '15%',
    minWidth: 65,
    maxWidth: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 4,
  }

})