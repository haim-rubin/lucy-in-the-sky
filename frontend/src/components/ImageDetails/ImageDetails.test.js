import React from 'react'
import renderer from 'react-test-renderer'

import ImageDetails from './ImageDetails'

it('renders correctly when there are no items', () => {
  const tree =
    renderer
        .create(
            <ImageDetails
                description="Hello"
                url="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDU2M30"
                isFavorite={false}
                setFavorite ={() => {}} imageId="1" />
        )
        .toJSON()
  expect(tree).toMatchSnapshot()
})