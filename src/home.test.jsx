import Home from './home'
import {render, screen} from '@testing-library/react'
import {vi} from 'vitest'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const mockRestaurantList = vi.fn()
vi.mock('./components/RestaurantList', () => ({
    default: (props) => {
        mockRestaurantList(props)
        return <div>mockRestaurantList</div>
    },
}))
vi.mock('./api', () => ({
    default: {
        get: () => Promise.resolve({
            data: [{
                'id': 1, 'name': 'Istanbul'
            }]
        })
    }
}))
const queryClient = new QueryClient()

describe('Simple working test', () => {
    it('the title is visible', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Home/>
            </QueryClientProvider>
        )
        expect(screen.getByText("mockRestaurantList")).toBeInTheDocument()
        expect(screen.getByText("Search")).toBeInTheDocument()
    })
})
