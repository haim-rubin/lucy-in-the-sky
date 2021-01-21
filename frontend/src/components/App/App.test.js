import renderer from 'react-test-renderer'
import App from './App'

test('renders learn react link', () => {
  const tree =
    renderer
      .create(
        <App  defaultList={[]} getImages={() =>Promise.resolve([])}  setFavorite={() =>{}}/>
      )
      .toJSON()
  
  expect(tree).toMatchSnapshot()
})
