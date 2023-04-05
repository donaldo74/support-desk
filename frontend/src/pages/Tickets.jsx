import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import { BackButton } from '../components/BackButton'

function Tickets() {
	const { tickets, isLoading, isSuccess } = useSelector(
		(state) => state.tickets
	)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTickets())
	}, [dispatch])
	return <div>Tickets</div>
}

export default Tickets
