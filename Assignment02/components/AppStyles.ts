// AppStyles.ts

import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },

  screen: {
    padding: 16,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    marginTop: 40,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    backgroundColor: '#fafafa',
    height: 60
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    backgroundColor: '#e0e0e0'
  },
  tabText: {
    fontSize: 16,
    color: '#555'
  },
  activeText: {
    color: '#000'
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ADD8E6',
    borderRadius: 6,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12, // for spacing if supported
    marginTop: 16,
    marginBottom: 16,
  },

thumbnail: {
  width: 150,
  height: 100,
  resizeMode: 'cover',
  borderRadius: 8,
  marginHorizontal: 6, // use this if `gap` isn’t supported
},
});

export const SigninStyles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, 
    marginBottom: 16, 
    textAlign: 'center'
  },
  input: {
    height: 40,
    width: 280,
    marginLeft: 31,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 4, 
    paddingHorizontal: 8, 
    marginBottom: 12
  },
  button: {
    backgroundColor: '#007BFF',
    alignSelf: 'center',
    borderRadius: 9999,
    padding: 8,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})

export const CityStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#87CEEB',
  },
});

export default AppStyles;
