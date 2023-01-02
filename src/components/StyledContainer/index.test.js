import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import StyledContainer from "./index";

test('should render container correctly', () => {
    const {asFragment} = render(<StyledContainer/>)
    expect(asFragment()).toMatchSnapshot();
})
