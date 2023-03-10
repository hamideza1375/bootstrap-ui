import React from "react";
import { Modal as _Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default function Modal({style, children, setshow, show, onClick, onHide }) {
  return (
    <Pressable onPress={Platform.OS === 'web' ?onClick:()=>{}} style={[styles.centeredView]}>
      <_Modal supportedOrientations={['portrait', 'landscape']}
       animationType="fade" transparent={true} visible={show}>
        <View onTouchEnd={onClick} style={[styles.centeredView, ,{backgroundColor: '#6669'}]}>
          <View style={[styles.modalView,style]}>
            <Icon onPress={() => setshow(false)} name={"remove"} size={22} color="#f55" style={{ position: 'absolute', left: 9, top: 9, zIndex:111 }} />
            {children}
          </View>
        </View>
      </_Modal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .8,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2
    },
  },
});