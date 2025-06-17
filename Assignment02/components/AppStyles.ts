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
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12
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
  backLink: {
    fontSize: 16,
    color: '#555',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  tabText: {
    fontSize: 16,
    color: '#555'
  },
  activeText: {
    color: '#000'
  },
});

export default AppStyles;
