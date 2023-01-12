import React, { useEffect, useRef } from "react";
import { Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import A_icon from 'react-native-vector-icons/dist/AntDesign';
import M_icon from 'react-native-vector-icons/dist/MaterialIcons';

const Dropdown = (props) => {

  const { child, border = [.5, 'silver'], show, setshow, children, icon, a_icon, m_icon, color = '#aaa', showBgcolor = '#fff', style, iconFalse, top, onPress } = props

  const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 0 }] } })
  }, [show])


  return (
    <>
      <Pressable
        onPressIn={() => { setshow(!show); setTimeout(() => { setshow(!show) }, 1) }}

        onPress={() => {
          () => { setshow(!show); setTimeout(() => { setshow(!show) }, 2) };
          setTimeout(() => {
            ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 1 }] } })
          }, 5);
        }}

        style={[{ flexDirection: 'row', padding: 2, position: 'relative' }, style]} >
        {!iconFalse && <Icon color={color} name={top ? 'caret-up' : 'caret-down'} style={[{ top: 3, position: 'relative', right: 1 }, { fontSize: 22.5 }]}></Icon>}

        {icon && <Icon color={color} name={icon ? icon : 'trash'} style={[{ fontSize: 22.5 }]}></Icon> ||
          a_icon && <A_icon color={color} name={a_icon ? a_icon : 'trash'} style={[{ fontSize: 22.5 }]}></A_icon> ||
          m_icon && <M_icon color={color} name={m_icon ? m_icon : 'trash'} style={[{ fontSize: 22.5 }]}></M_icon> ||
          child && <View style={{ marginTop: 3 }}>{child}</View>}

      </Pressable>

      <Pressable
        ref={ref}
        style={[{
          alignSelf: 'center', borderWidth: border[0], borderColor: border[1], borderRadius: 3, padding: 3, zIndex: 10, position: 'absolute',
          transform: [{ scale: 0 }], backgroundColor: showBgcolor, minWidth: 100
        }, top ? { bottom: 20 } : { top: 20 }]}>
        {children}
      </Pressable>
    </>
  );
}

export default Dropdown


