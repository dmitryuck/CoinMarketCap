import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  elementContainer: {
    backgroundColor: '#add92b',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 20,
  },
  paramName: {
    fontSize: 20,
    height: 40,
    minWidth: 200,
  },
  paramValue: {
    fontSize: 18,
    height: 40,
  },
  elementRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tag: {
    paddingHorizontal: 10,
    backgroundColor: '#E09432',
    borderRadius: 10,
  },
  tagText: {
    color: '#E6F2FE',
  },
  quotesContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#FFD15D',
    borderRadius: 4,
    padding: 4,
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  quoteName: {
    fontSize: 14,
    color: 'black',
    backgroundColor: '#E09432',
    width: '100%',
    padding: 4,
    fontWeight: 'bold',
  },
  quoteRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  quoteParamName: {
    fontSize: 14,
    minWidth: 120,
  },
  quoteParamValue: {
    fontSize: 14,
  },
});

export default styles;